import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../../pages/Main';
import About from '../../pages/About';
import Education from '../../pages/Education';
import Experience from '../../pages/Experience';
import Contact from '../../pages/Contact';
import NotFound from '../../pages/404';
import Wrapper from '../Wrapper';
import WrapperScroller from '../WrapperScroller';
import SwipeableTemporaryDrawer from '../Drawer';
import Shell from '../Shell';
import './styles.scss';
import PinSpacer from '../PinSpacer';
import CookieConsent from '../CookieConsent';
import Copyright from '../Copyright';

function App() {
  // const isMobile = useMediaQuery('(max-width: 1023px)');

  return (
    <Wrapper backgroundColor="" color="">
      <PinSpacer>
        <SwipeableTemporaryDrawer />
      </PinSpacer>

      <WrapperScroller>
        <Shell
          display="flex"
          flexDirection="column"
          justifyContent=""
          height="100%"
          padding=""
          backgroundColor=""
          margin=""
        >
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Experience />} />
            <Route path="/edu" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          {' '}
          <Copyright />

        </Shell>
        {' '}

      </WrapperScroller>
      {' '}

      <CookieConsent />
    </Wrapper>
  );
}

export default App;
