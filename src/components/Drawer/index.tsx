import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { useState } from 'react';
import { useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../Logo';
import Socials from '../Socials';
import Navigation from '../Navigation';

type Anchor = 'menu';

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = useState({
    menu: false,
  });
  const isMobile = useMediaQuery('(max-width: 767px)');

  const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event
        && event.type === 'keydown'
        && ((event as React.KeyboardEvent).key === 'Tab'
          || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <SwipeableDrawer
      anchor={isMobile ? 'top' : 'left'}
      open={state.menu}
      onClose={toggleDrawer('menu', false)}
      onOpen={toggleDrawer('menu', true)}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100vh',
          width: '100%',
          backgroundColor: ' ',
          padding: '2em',
          borderRight: isMobile ? '' : '1px solid black',
          borderBottom: isMobile ? '1px solid black' : '',
          alignItems: 'flex-start',
        }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            width: isMobile ? '' : '100%',
            flexDirection: isMobile ? 'column' : 'row',
          }}
        >
          <Logo
            width=""
            padding=""
            filter="drop-shadow(2px 2px 1px rgba(0,0,0,0.1))"
            displayStyle="long"
          />
          <p style={{
            padding: isMobile ? '14px 0' : '0 14px', fontWeight: '500', color: '#e8c328',
          }}
          >
            Expert en tracking digital
            {' '}
          </p>
        </div>
        <Navigation color="black" hoverColor="#e8c328" />
        <Socials color="black" hoverColor="#e8c328" />
      </Box>
    </SwipeableDrawer>
  );

  return (

    <div
      style={{
        display: 'flex',
        flexDirection: isMobile ? 'row' : 'column',
        justifyContent: 'space-between',
        height: isMobile ? '' : '100%',
        width: isMobile ? '100%' : '',
        alignItems: 'center',
        padding: isMobile ? '14px' : '0 14px',
        borderRight: isMobile ? '' : '1px solid black',
        borderBottom: isMobile ? '1px solid black' : '',

      }}
    >
      {' '}
      <button onClick={toggleDrawer('menu', true)} type="button">
        <Logo
          width=""
          padding={isMobile ? '' : '40px 0'}
          filter="drop-shadow(2px 2px 1px rgba(0,0,0,0.1))"
          displayStyle={isMobile ? 'long' : 'short'}
        />
      </button>
      {isMobile ? (
        <button onClick={toggleDrawer('menu', true)} type="button">
          <MenuIcon />
        </button>

      ) : (
        <button onClick={toggleDrawer('menu', true)} type="button">
          <h4 style={{ padding: isMobile ? '30px 0' : '40px 0' }}>Menu</h4>
        </button>
      )}

      {list('menu')}
    </div>
  );
}
