import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import logo from '../../assets/JL LOGO_150 NOIR.svg';
import logoHover from '../../assets/JL LOGO_150 JAUNE NOIR.svg';
import logoRose from '../../assets/JL LOGO_150 ROSE.svg';
import logoRoseHover from '../../assets/JL LOGO_150 ROSE JAUNE.svg';

function Logo({ width, padding }: { width?: string; padding?: string }) {
  // Check if the screen width is mobile
  const isMobile = useMediaQuery('(mAX-width: 1023px)');
  const [currentLogo, setCurrentLogo] = useState(isMobile ? logoRose : logo);

  const handleMouseEnter = () => setCurrentLogo(isMobile ? logoRose : logo);
  const handleMouseLeave = () => setCurrentLogo(isMobile ? logoRose : logo);

  // Use the width prop to directly set the width or height of the image
  // Assuming the width prop is a valid CSS value (e.g., '100px', '50%', etc.)
  // If you also need to adjust the height based on the width, you might need additional logic
  const imageStyle = { width, padding };

  return (
    <NavLink to="/home">
      <img
        src={currentLogo}
        alt="Jean-Ludovic Albany Logo"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={imageStyle}
      />
    </NavLink>
  );
}

export default Logo;
