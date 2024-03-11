import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/JL LOGO_ROSE MINI.svg';
import logoHover from '../../assets/JL LOGO_ROSE JAUNE MINI.svg';

function MiniLogo({ width = '100px', padding = '1em 0' }) {
  const [currentLogo, setCurrentLogo] = useState(logo);

  const handleMouseEnter = () => setCurrentLogo(logoHover);
  const handleMouseLeave = () => setCurrentLogo(logo);

  return (
    <NavLink to="/home">
      <img
        src={currentLogo}
        alt="Jean-Ludovic Albany Logo"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ width, padding, filter: 'drop-shadow(2px 2px 1px rgba(0,0,0,0.1))' }} // Default color filter
      />
    </NavLink>
  );
}

export default MiniLogo;
