/**
 * Scroll Animation System
 * Lightweight, pure JavaScript scroll animation observer
 * Triggers animations only once when elements come into view from bottom
 */

class ScrollAnimationObserver {
  constructor(options = {}) {
    this.options = {
      threshold: 0.1, // Percentage of element that needs to be visible
      rootMargin: '0px 0px -50px 0px', // Trigger 50px before element enters viewport
      once: true, // Only animate once
      selector: '.scroll-animate',
      animatedClass: 'animated',
      debug: false,
      ...options
    };

    this.observer = null;
    this.animatedElements = new Set();
    this.isInitialized = false;

    // Bind methods
    this.handleIntersection = this.handleIntersection.bind(this);
    this.init = this.init.bind(this);
    this.destroy = this.destroy.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  /**
   * Initialize the scroll animation observer
   */
  init() {
    if (this.isInitialized) {
      console.warn('ScrollAnimationObserver is already initialized');
      return;
    }

    // Check for Intersection Observer support
    if (!('IntersectionObserver' in window)) {
      console.warn('IntersectionObserver not supported. Animations will be disabled.');
      this.fallbackToImmediate();
      return;
    }

    // Check for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.fallbackToImmediate();
      return;
    }

    // Create intersection observer
    this.observer = new IntersectionObserver(this.handleIntersection, {
      threshold: this.options.threshold,
      rootMargin: this.options.rootMargin
    });

    // Observe all elements
    this.observeElements();
    this.isInitialized = true;

    if (this.options.debug) {
      console.log('ScrollAnimationObserver initialized', {
        elementsCount: document.querySelectorAll(this.options.selector).length,
        options: this.options
      });
    }
  }

  /**
   * Handle intersection observer callback
   */
  handleIntersection(entries) {
    entries.forEach(entry => {
      const element = entry.target;
      
      // Only trigger if element is intersecting and coming from bottom
      if (entry.isIntersecting && !this.animatedElements.has(element)) {
        this.animateElement(element);
        
        // If once is true, stop observing this element
        if (this.options.once) {
          this.observer.unobserve(element);
          this.animatedElements.add(element);
        }
      }
    });
  }

  /**
   * Animate a single element
   */
  animateElement(element) {
    // Add animated class
    element.classList.add(this.options.animatedClass);
    
    // Dispatch custom event
    element.dispatchEvent(new CustomEvent('scroll-animate', {
      detail: {
        element,
        animation: element.dataset.animation || 'fade-in'
      }
    }));

    if (this.options.debug) {
      console.log('Animated element:', element, element.dataset.animation);
    }
  }

  /**
   * Observe all elements with the selector
   */
  observeElements() {
    const elements = document.querySelectorAll(this.options.selector);
    
    elements.forEach(element => {
      // Skip if already animated
      if (this.animatedElements.has(element)) {
        return;
      }

      // Check if element is already in viewport (page refresh case)
      const rect = element.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (isInViewport && rect.top < window.innerHeight * 0.8) {
        // Element is already visible, animate immediately
        this.animateElement(element);
        this.animatedElements.add(element);
      } else {
        // Element is not visible, observe it
        this.observer.observe(element);
      }
    });
  }

  /**
   * Fallback for browsers without IntersectionObserver or reduced motion
   */
  fallbackToImmediate() {
    const elements = document.querySelectorAll(this.options.selector);
    elements.forEach(element => {
      element.classList.add(this.options.animatedClass);
    });
    
    if (this.options.debug) {
      console.log('Using fallback animation (immediate)');
    }
  }

  /**
   * Refresh observer (useful for dynamic content)
   */
  refresh() {
    if (!this.isInitialized) {
      return;
    }

    // Disconnect current observer
    if (this.observer) {
      this.observer.disconnect();
    }

    // Re-observe elements
    this.observeElements();

    if (this.options.debug) {
      console.log('ScrollAnimationObserver refreshed');
    }
  }

  /**
   * Add new elements to observe
   */
  addElements(elements) {
    if (!this.observer) {
      return;
    }

    const elementsArray = Array.isArray(elements) ? elements : [elements];
    
    elementsArray.forEach(element => {
      if (element.matches && element.matches(this.options.selector)) {
        this.observer.observe(element);
      }
    });
  }

  /**
   * Remove elements from observation
   */
  removeElements(elements) {
    if (!this.observer) {
      return;
    }

    const elementsArray = Array.isArray(elements) ? elements : [elements];
    
    elementsArray.forEach(element => {
      this.observer.unobserve(element);
      this.animatedElements.delete(element);
    });
  }

  /**
   * Destroy the observer
   */
  destroy() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
    
    this.animatedElements.clear();
    this.isInitialized = false;

    if (this.options.debug) {
      console.log('ScrollAnimationObserver destroyed');
    }
  }

  /**
   * Get animation statistics
   */
  getStats() {
    const totalElements = document.querySelectorAll(this.options.selector).length;
    const animatedCount = this.animatedElements.size;
    
    return {
      total: totalElements,
      animated: animatedCount,
      pending: totalElements - animatedCount,
      isInitialized: this.isInitialized
    };
  }
}

// Auto-initialize when DOM is ready
let scrollAnimationObserver = null;

function initScrollAnimations(options = {}) {
  // Destroy existing observer if any
  if (scrollAnimationObserver) {
    scrollAnimationObserver.destroy();
  }

  // Create new observer
  scrollAnimationObserver = new ScrollAnimationObserver(options);
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      scrollAnimationObserver.init();
    });
  } else {
    scrollAnimationObserver.init();
  }

  return scrollAnimationObserver;
}

// Export for use in other modules
export { ScrollAnimationObserver, initScrollAnimations };

// Global initialization with default options
if (typeof window !== 'undefined') {
  // Auto-initialize with default options
  const defaultObserver = initScrollAnimations({
    debug: process.env.NODE_ENV === 'development'
  });

  // Make available globally for debugging
  window.scrollAnimationObserver = defaultObserver;



  // Refresh on window resize (for responsive changes)
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      defaultObserver?.refresh();
    }, 250);
  });
}