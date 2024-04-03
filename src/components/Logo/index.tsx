/* eslint-disable react/require-default-props */
import React from 'react';
import { NavLink } from 'react-router-dom';

interface LogoProps {
  displayStyle: 'short' | 'long';
  padding?: string;
  width?: string;
  filter?: string;
}

function Logo({
  displayStyle,
  padding,
  width,
  filter,
}: LogoProps) {
  // Determine logo text based on the displayStyle prop
  const logoText = displayStyle === 'short' ? 'JLA' : 'JLALBANY';

  return (
    <NavLink to="/" style={{ filter }}>
      <h1 style={{ padding, width, fontFamily: 'Anton' }}>{logoText}</h1>
    </NavLink>
  );
}

export default Logo;
