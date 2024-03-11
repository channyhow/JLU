import React, { useState } from 'react';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
// import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import './styles.scss';

function Socials({
  color = '#133955',
  hoverColor = '#D79FC7',
  padding = '1em',
  opacity = '1',
}) {
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);

  const handleMouseEnter = (href: string) => {
    setHoveredIndex(href);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const socialIcons = [
    { icon: <AlternateEmailIcon />, href: 'mailto:contact@albany.fr', target: '_email' },
    { icon: <InstagramIcon />, href: 'https://www.instagram.com/jlalbany', target: '_insta' },
    { icon: <LinkedInIcon />, href: 'https://www.linkedin.com/jlalbany', target: '_linkedin' },
    { icon: <SmartphoneIcon />, href: 'tel:+33617550738', target: '_phone' },
  ];

  return (
    <ol className="socials" style={{ padding }}>
      {socialIcons.map((social) => (
        <li
          key={social.href}
          style={{
            padding,
            color: hoveredIndex === social.href ? hoverColor : color,
            scale: '0.8',
            transition: 'color 0.2s', // Specify transition property
            filter: 'drop-shadow(2px 2px 1px rgba(0,0,0,0.1))',
            opacity,
          }}
          onMouseEnter={() => handleMouseEnter(social.href)}
          onMouseLeave={handleMouseLeave}
        >
          <a href={social.href} target="_blank" rel="noopener noreferrer">
            {social.icon}
          </a>
        </li>
      ))}
    </ol>
  );
}

export default Socials;
