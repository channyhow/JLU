import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/JL LOGO_ROSE MINI.svg';
import logoHover from '../../assets/JL LOGO_ROSE JAUNE MINI.svg';

function MiniLogo() {
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
        // style={{padding:'1.5em 0'}}
      />
    </NavLink>
  );
}

export default MiniLogo;
