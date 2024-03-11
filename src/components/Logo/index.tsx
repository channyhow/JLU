import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import logo from '../../assets/JL LOGO_150 BLANC.svg';
import logoHover from '../../assets/JL LOGO_150 JAUNE NOIR.svg';
import logoRose from '../../assets/JL LOGO_150 ROSE.svg';
// Assuming you have logoRoseHover ready to be used
// import logoRoseHover from '../../assets/JL LOGO_150 ROSE JAUNE.svg';

function Logo({ width = '150px', padding = '0', filter = 'none' }) {
  const isMobile = useMediaQuery('(max-width: 1023px)');
  const [currentLogo, setCurrentLogo] = useState(logo);

  // Update the logo based on the screen size
  useEffect(() => {
    setCurrentLogo(isMobile ? logoRose : logo);
  }, [isMobile]);

  const handleMouseEnter = () => setCurrentLogo(isMobile ? logoRose : logoHover);
  const handleMouseLeave = () => setCurrentLogo(isMobile ? logoRose : logo);

  return (
    <NavLink to="/home">
      <img
        src={currentLogo}
        alt="Jean-Ludovic Albany Logo"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ width, padding, filter }}
      />
    </NavLink>
  );
}

export default Logo;
