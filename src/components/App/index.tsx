import {
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';

import { useMediaQuery } from '@mui/material';
import Main from '../../pages/Main';
import Landing from '../../pages/Landing';
import Header from '../Header';
import SwipeableTemporaryDrawer from '../Drawer';
import About from '../../pages/About';
import Education from '../../pages/Education';
import Experience from '../../pages/Experience';
import Contact from '../../pages/Contact';
import Copyright from '../Copyright';
import Logo from '../Logo';

import './styles.scss';
import Socials from '../Socials';
import CookieConsent from '../CookieConsent';
import NotFound from '../../pages/404';

function App() {
  // Check if the screen width is mobile
  const isMobile = useMediaQuery('(max-width: 1023px)');

  // Get the current location using react-router-dom
  const location = useLocation();
  const isLanding = location.pathname === '/';

  return (
    <div className="app">
      {/* Render Drawer and Logo only if not on landing page and screen is mobile */}
      {isMobile && !isLanding && (
        <div className="app__mobile-header">
          <div>
            <SwipeableTemporaryDrawer />
          </div>
          <div>
            {' '}
            <Logo width="150px" padding="1em " />
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

              <Route path="/" element={isMobile ? <Navigate to="/home" replace /> : <Landing />} />
              <Route path="/home" element={<Main />} />
              <Route path="/about" element={<About />} />
              <Route path="/work" element={<Experience />} />
              <Route path="/edu" element={<Education />} />
              <Route path="/contact" element={<Contact />} />
              {/* Catch-all route for handling 404 pages */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
        {/* Render copyright footer if not on landing page */}
      </div>
      {' '}

      <div className="app__footer" style={{ display: 'flex', flexDirection: 'column' }}>
        {' '}
        {isMobile && !isLanding && (
          <div
            className="app__socials"
            style={{ scale: '0.8' }}
          >
            <Socials color="#e5d9d5" hoverColor="#e5d9d5" />
          </div>
        )}
        {!isLanding && (
          <div>
            <Copyright />
          </div>
        )}
        {' '}
        <CookieConsent />

      </div>
    </div>
  );
}

export default App;
