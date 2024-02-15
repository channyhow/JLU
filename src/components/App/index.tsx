import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import Main from "../../pages/Main";
import Landing from "../../pages/Landing";
import Header from "../Header";
import SwipeableTemporaryDrawer from "../Drawer";
import About from "../../pages/About";
import Education from "../../pages/Education";
import Experience from "../../pages/Experience";
import Contact from "../../pages/Contact";
import Copyright from "../Copyright";
import Logo from "../Logo";

import "./styles.scss";

function App() {
  // Check if the screen width is mobile
  const isMobile = useMediaQuery("(max-width: 767px)");

  // Get the current location using react-router-dom
  const location = useLocation();
  const isLanding = location.pathname === "/";

  return (
    <div className="app">
      {/* Render Drawer and Logo only if not on landing page and screen is mobile */}
      {isMobile && !isLanding && (
        <div className="app__mobile-header">
          <div>
            <SwipeableTemporaryDrawer />
          </div>
          <div>
            {" "}
            <Logo width={'150px'} padding={'1em '} />
          </div>
        </div>
      )}
      <div className="app__outer-container">
        <div className="app__inner-container">
          {/* Render Header if not on landing page and not on mobile */}
          {!isLanding && !isMobile && <Header />}
          {/* Define routes for different pages */}
          <div className="app__routes">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/home" element={<Main />} />
              <Route path="/about" element={<About />} />
              <Route path="/work" element={<Experience />} />
              <Route path="/edu" element={<Education />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
        {/* Render copyright footer if not on landing page */}
      </div>
      {!isLanding && (
        <div className="app__footer">
          <Copyright />
        </div>
      )}
    </div>
  );
}

export default App;
