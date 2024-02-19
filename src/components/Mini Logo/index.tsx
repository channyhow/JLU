import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/JL LOGO_ROSE MINI.svg';
import logoHover from '../../assets/JL LOGO_ROSE JAUNE MINI.svg';

function MiniLogo({ scale }: { scale?: string }) {
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
        style={{ transform: `scale(${scale})`, filter: 'brightness(100%)' }} // Default color filter
      />
    </NavLink>
  );
}

export default MiniLogo;
