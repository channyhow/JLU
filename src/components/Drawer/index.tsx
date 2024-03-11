import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import AlignVerticalCenterIcon from '@mui/icons-material/AlignVerticalCenter';
import { useState } from 'react';
import Logo from '../Logo';
import Socials from '../Socials';
import Navigation from '../Navigation';
import MiniLogo from '../Mini Logo';

type Anchor = 'menu';

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = useState({
    menu: false,
  });

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
      anchor="left"
      open={state.menu}
      onClose={toggleDrawer('menu', false)}
      onOpen={toggleDrawer('menu', true)}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly', // Center items vertically
          height: '100%',
          width: '80vw',
          backgroundColor: '#133955 ',
          padding: '2em',
        }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <div>
          <MiniLogo />

          <Socials color="#e8c328" hoverColor="#268770" />
          <Navigation color="#e8c328" hoverColor="#268770" />
        </div>
      </Box>
    </SwipeableDrawer>
  );

  return (
    <div style={{ padding: '1em ', width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {' '}
        <Button onClick={toggleDrawer('menu', true)}>
          <AlignVerticalCenterIcon
            sx={{
              color: '#e8c328',
            }}
          />
        </Button>
        {list('menu')}
        <Logo width="150px" padding="1em" filter="drop-shadow(2px 2px 1px rgba(0,0,0,0.1))" />
      </div>
    </div>
  );
}
