import React, { useState } from 'react';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import './styles.scss';

function Socials() {
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
    // { icon: <GitHubIcon />, href: 'https://github.com/', target: '_github' },
    { icon: <LinkedInIcon />, href: 'https://www.linkedin.com/jlalbany', target: '_linkedin' },
    { icon: <SmartphoneIcon />, href: 'tel:+33617550738', target: '_phone' },
  ];

  return (
    <ol className="socials">
      {socialIcons.map((social) => (
        <li
          key={social.href}
          // jaune: #E8C328 vert: #165421
          style={{ padding: '0 1em', color: hoveredIndex === social.href ? '#E8C328' : '#165421', transition: '0.2s' }}
          onMouseEnter={() => handleMouseEnter(social.href)}
          onMouseLeave={handleMouseLeave}
        >
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {social.icon}
          </a>
        </li>
      ))}
    </ol>
  );
}

export default Socials;
