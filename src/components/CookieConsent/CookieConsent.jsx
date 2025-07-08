import React, { useState, useEffect } from 'react';
import { Icon } from '../Icons/IconSystem';
import '../../styles/components/CookieConsent/CookieConsent.scss';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Check if user has already given consent
    const consentGiven = localStorage.getItem('cookieConsentGiven');
    const consentTimestamp = localStorage.getItem('cookieConsentTimestamp');
    
    // Show banner if no consent or consent is older than 1 year
    if (!consentGiven || isConsentExpired(consentTimestamp)) {
      // Delay showing the banner for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
        setIsAnimating(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const isConsentExpired = (timestamp) => {
    if (!timestamp) return true;
    const oneYear = 365 * 24 * 60 * 60 * 1000; // 1 year in milliseconds
    return Date.now() - parseInt(timestamp) > oneYear;
  };

  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsentGiven', 'all');
    localStorage.setItem('cookieConsentTimestamp', Date.now().toString());
    localStorage.setItem('cookiePreferences', JSON.stringify({
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true
    }));
    hideBanner();
  };

  const handleAcceptNecessary = () => {
    localStorage.setItem('cookieConsentGiven', 'necessary');
    localStorage.setItem('cookieConsentTimestamp', Date.now().toString());
    localStorage.setItem('cookiePreferences', JSON.stringify({
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false
    }));
    hideBanner();
  };

  const hideBanner = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  const openPrivacyPolicy = () => {
    window.open('/privacy-policy', '_blank');
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div className={`cookie-backdrop ${isAnimating ? 'visible' : ''}`} />
      
      {/* Cookie Consent Banner */}
      <div className={`cookie-consent ${isAnimating ? 'visible' : ''}`}>
        <div className="cookie-consent-container">
          
          {/* Header */}
          <div className="cookie-header">
            <div className="cookie-icon-wrapper">
              <div className="icon-container icon-container-md icon-container-primary">
                <Icon name="Info" size={24} />
              </div>
            </div>
            <h3 className="cookie-title">We Value Your Privacy</h3>
          </div>

          {/* Content */}
          <div className="cookie-content">
            <p className="cookie-description">
              We use cookies to enhance your browsing experience, serve personalized content, 
              and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
            </p>

            {/* Cookie Types */}
            <div className="cookie-types">
              <div className="cookie-type">
                <div className="cookie-type-header">
                  <Icon name="Shield" size={16} />
                  <span>Necessary Cookies</span>
                  <span className="required-badge">Required</span>
                </div>
                <p>Essential for website functionality and security.</p>
              </div>

              <div className="cookie-type">
                <div className="cookie-type-header">
                  <Icon name="Analytics" size={16} />
                  <span>Analytics Cookies</span>
                </div>
                <p>Help us understand how visitors interact with our website.</p>
              </div>

              <div className="cookie-type">
                <div className="cookie-type-header">
                  <Icon name="Settings" size={16} />
                  <span>Functional Cookies</span>
                </div>
                <p>Enable enhanced functionality and personalization.</p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="cookie-actions">
            <div className="cookie-buttons">
              <button 
                className="cookie-btn cookie-btn-secondary"
                onClick={handleAcceptNecessary}
                aria-label="Accept only necessary cookies"
              >
                <Icon name="Shield" size={16} />
                Necessary Only
              </button>
              
              <button 
                className="cookie-btn cookie-btn-primary"
                onClick={handleAcceptAll}
                aria-label="Accept all cookies"
              >
                <Icon name="Check" size={16} />
                Accept All
              </button>
            </div>

            <div className="cookie-links">
              <button 
                className="cookie-link"
                onClick={openPrivacyPolicy}
                aria-label="View privacy policy"
              >
                <Icon name="Info" size={14} />
                Privacy Policy
              </button>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="cookie-decoration">
            <div className="decoration-dots"></div>
            <div className="decoration-line"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookieConsent;