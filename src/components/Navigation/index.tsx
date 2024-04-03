import { useMediaQuery } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navigation({
  color = '#133955',
  hoverColor = '#D79FC7',
  padding = '1em',
  // textAlign = 'center',
}) {
  const isMobile = useMediaQuery('(max-width: 1023px)');

  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);

  const handleMouseEnter = (href: string) => {
    setHoveredIndex(href);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const pages = [
    { name: 'About', href: '/about', title: 'À propos' },
    { name: 'Experience', href: '/work', title: 'Expérience' },
    { name: 'Education', href: '/edu', title: 'Éducation' },
    { name: 'Contact', href: '/contact', title: 'Contact' },
  ];

  return (
    <ul style={{ listStyle: 'none', padding }}>
      {pages.map((page, index) => (
        <li
          key={page.href}
          style={{
            borderTop: index === 0 ? 'none' : '1px solid #CDCFC8',
            width: isMobile ? '250px' : '400px',
            textAlign: 'left',
          }}
        >
          <NavLink
            to={page.href}
            style={({ isActive }) => ({
              padding: '0.5em 0',
              color: isActive ? color : (hoveredIndex === page.href ? hoverColor : color),
              transition: '0.2s',
              // filter: 'drop-shadow(2px 2px 1px rgba(0,0,0,0.1))',
            })}
            onMouseEnter={() => handleMouseEnter(page.href)}
            onMouseLeave={handleMouseLeave}
          >
            <h5 style={{ padding: '14px' }}>{page.title}</h5>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default Navigation;
