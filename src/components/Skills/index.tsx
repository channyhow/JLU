import React, { useState } from 'react';
import './styles.scss'; // Make sure you have this SCSS file
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import TagIcon from '@mui/icons-material/Tag';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import BarChartIcon from '@mui/icons-material/BarChart';
// import NoteIcon from '@mui/icons-material/Note';
import AssessmentIcon from '@mui/icons-material/Assessment';
import CampaignIcon from '@mui/icons-material/Campaign';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import GoogleIcon from '@mui/icons-material/Google';
import { NavLink } from 'react-router-dom';

const skills = [
  {
    name: 'lancement de campagne',
    icon: <RocketLaunchIcon sx={{ color: '#D79FC7' }} />,
  },
  { name: 'gestion de tags', icon: <TagIcon sx={{ color: '#e8c328' }} /> },
  {
    name: 'intégration de solutions de tracking',
    icon: <LocationSearchingIcon sx={{ color: '#D79FC7' }} />,
  },
  {
    name: 'mise en place de TMS',
    icon: <BarChartIcon sx={{ color: '#133955' }} />,
  },
  // { name: "solutions pour publisher", icon: <NoteIcon /> },
  { name: 'web analytics', icon: <AssessmentIcon sx={{ color: '#133955' }} /> },
  {
    name: 'online campaign management',
    icon: <ManageAccountsIcon sx={{ color: '#D79FC7' }} />,
  },
  {
    name: 'advertising operations',
    icon: <CampaignIcon sx={{ color: '#133955' }} />,
  },
  { name: 'google ad manager', icon: <GoogleIcon sx={{ color: '#e8c328' }} /> },
];

function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const handleMouseEnter = (skill: string) => {
    setHoveredSkill(skill);
  };

  const handleMouseLeave = () => {
    setHoveredSkill(null);
  };

  return (
    <ul style={{ listStyle: 'none' }}>
      {skills.map((skill, index) => (
        <li
          key={skill.name}
          style={{
            borderTop: index === 0 ? 'none' : '1px solid #CDCFC8',
            // width: 'max-content',
            textAlign: 'right',
            padding: '0.5em 0',
          }}
        >
          <NavLink to="/work" key={skill.name}>
            <div
              key={skill.name}
              className="skills__container"
              style={{ display: 'flex', width: '100%', alignItems: 'center' }}
            >
              {/* { hoveredSkill === skill.name
              && (
              <div className="skills__icon-container"style={{ height:'5px' }}>
                <div className="skills__icon" style={{ scale: '0.7' }}>{skill.icon}</div>
              </div>
              )} */}
              <p
                className="skills__name"
                style={{ color: hoveredSkill === skill.name ? '#e8c328' : '' }}
                onMouseEnter={() => handleMouseEnter(skill.name)}
                onMouseLeave={handleMouseLeave}
              >
                {skill.name}
              </p>
            </div>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default Skills;
