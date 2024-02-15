import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);
  const handleMouseEnter = (href: string) => {
    setHoveredIndex(href);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const pages = [
    { name: 'About', href: '/about', title: 'about' },
    { name: 'Experience', href: '/work', title: 'work' },
    { name: 'Education', href: '/edu', title: 'edu' },
    { name: 'Contact', href: '/contact', title: 'contact' },
  ];

  return (
    <ul style={{ listStyle: 'none', padding: '1.5em', textAlign: 'right' }}>
      {pages.map((page) => (
        <li key={page.href}>
          <NavLink to={page.href}>
            <h4
                // jaune: #E8C328 vert: #165421
              style={{
                padding: '0.5em 0',
                color: hoveredIndex === page.href ? '#E8C328' : '#165421',
                transition: '0.2s',

              }}
              onMouseEnter={() => handleMouseEnter(page.href)}
              onMouseLeave={handleMouseLeave}
            >
              {page.title}
            </h4>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default Navigation;
