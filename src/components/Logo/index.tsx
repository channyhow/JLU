import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/JL LOGO_150 NOIR.svg';
import logoHover from '../../assets/JL LOGO_150 JAUNE NOIR.svg';

function Logo() {
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

export default Logo;
