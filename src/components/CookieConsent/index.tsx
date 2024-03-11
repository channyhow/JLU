// CookieConsent.tsx
import React, { useState, useEffect } from 'react';
// import '../../utils/@types';
import './styles.scss';

const GTM_ID = 'GTM-NJ3VJVF5'; // Your GTM container ID

function CookieConsent() {
  const [consent, setConsent] = useState<boolean>(false);

  // Declare initializeGTM as a function expression at the top
  const initializeGTM = () => {
    console.log('Initializing GTM');
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js',
    });
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
    document.head.appendChild(script);
  };

  useEffect(() => {
    const userConsent = localStorage.getItem('cookieConsent');
    if (userConsent === 'true') {
      setConsent(true);
      initializeGTM();
    }
  }, []);

  const handleAccept = () => {
    console.log('Accept clicked');
    setConsent(true);
    localStorage.setItem('cookieConsent', 'true');
    initializeGTM();
  };

  // Debugging: Log the current state of 'consent'
  useEffect(() => {
    console.log('Consent state changed:', consent);
  }, [consent]);

  if (consent) {
    console.log('Consent given, not rendering the consent banner');
    return null; // If consent is given, don't show the banner
  }

  return (
    <div
      className="cookie-consent-banner"
    >
      <h4 style={{ padding: '1em' }}>
        Nous utilisons des cookies pour améliorer votre expérience.
        <br />
        En continuant à utiliser notre site, vous acceptez notre utilisation des
        cookies.
      </h4>

      <button
        style={{ background: 'black', color: 'white', padding: '0.5em 1em' }}
        type="submit"
        onClick={handleAccept}
      >
        <h4>Accepter</h4>
      </button>
    </div>
  );
}

export default CookieConsent;
