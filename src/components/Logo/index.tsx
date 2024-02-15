import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/JL LOGO_150 NOIR.svg';
import logoHover from '../../assets/JL LOGO_150 JAUNE NOIR.svg';
import logoRose from '../../assets/JL LOGO_150 ROSE.svg';
import logoRoseHover from '../../assets/JL LOGO_150 ROSE JAUNE.svg';
import { useMediaQuery } from '@mui/material';

function Logo({ scale }: { scale?: string }) {
  // Check if the screen width is mobile
  const isMobile = useMediaQuery("(max-width: 767px)");
  const [currentLogo, setCurrentLogo] = useState(isMobile ? logoRose : logo);

  const handleMouseEnter = () => setCurrentLogo(isMobile ? logoRoseHover : logoHover);
  const handleMouseLeave = () => setCurrentLogo(isMobile ? logoRose : logo);

  return (
    <NavLink to="/home">
      <img
        src={currentLogo}
        alt="Jean-Ludovic Albany Logo" 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ transform: `scale(${scale})`, filter: `brightness(100%)` }} // Default color filter
      />
    </NavLink>
  );
}

export default Logo;
