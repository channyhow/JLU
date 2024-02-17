import React, { useState, useEffect } from "react";
import './styles.scss';

// Replace 'GA_TRACKING_ID' with your actual Google Analytics tracking ID
const GA_TRACKING_ID = "YOUR_GA_TRACKING_ID";

const CookieConsent = () => {
  const [consent, setConsent] = useState(false);

  // useEffect(() => {
  //   const userConsent = localStorage.getItem('cookieConsent');
  //   setConsent(userConsent === 'true');
  // }, []);

  // const initializeAnalytics = () => {
  //   if (window.gtag) {
  //     window.gtag('config', GA_TRACKING_ID, {
  //       'cookie_expires': 0 // Adjust based on your requirements
  //     });
  //   }
  // };

  // const handleAccept = () => {
  //   setConsent(true);
  //   localStorage.setItem('cookieConsent', 'true');
  //   initializeAnalytics(); // Call this function to initialize analytics after consent
  // };

  // if (consent) return null; // If consent is given, don't show the banner

  return (
    <div
      className="cookie-consent-banner"
      style={{
        position: "fixed",
        bottom: "0",
        width: "100%",
        backgroundColor: "white",
        textAlign: "center",
        padding: "10px",
      }}
    >
      <h4  style={{padding:"1em"}}>
        We use cookies to improve your experience. <br/> By continuing to use our
        site, you accept our use of cookies.
      </h4>
     
      <button  style={{background:"black", color:"white", padding:"0.5em 1em"}} onClick={handleAccept}><h4>Accept</h4></button>
    </div>
  );
};

export default CookieConsent;
