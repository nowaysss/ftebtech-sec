import { useState, useEffect } from "react";

const useServicessScroll = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = document.querySelector(".itservices-section");
    if (!element) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const rect = element.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
          setIsVisible(isVisible);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Throttle scroll event with passive listener for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial visibility

    return () => {
      window.removeEventListener("scroll", handleScroll, { passive: true });
    };
  }, []);

  return isVisible;
};

export default useServicessScroll;
