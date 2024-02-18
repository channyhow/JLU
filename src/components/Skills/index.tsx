import React, { useState } from 'react';
import './styles.scss'; // Make sure you have this SCSS file
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import TagIcon from '@mui/icons-material/Tag';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import BarChartIcon from '@mui/icons-material/BarChart';
import NoteIcon from '@mui/icons-material/Note';
import AssessmentIcon from '@mui/icons-material/Assessment';
import CampaignIcon from '@mui/icons-material/Campaign';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import GoogleIcon from '@mui/icons-material/Google';
import { NavLink } from 'react-router-dom';

const skills = [
  { name: 'lancement de campagne', icon: <RocketLaunchIcon /> },
  { name: 'gestion de tags', icon: <TagIcon /> },
  { name: 'intégration de solutions de tracking', icon: <LocationSearchingIcon /> },
  { name: 'mise en place de TMS', icon: <BarChartIcon /> },
  // { name: "solutions pour publisher", icon: <NoteIcon /> },
  { name: 'web analytics', icon: <AssessmentIcon /> },
  { name: 'online campaign management', icon: <ManageAccountsIcon /> },
  { name: 'advertising operations', icon: <CampaignIcon /> },
  { name: 'google ad manager', icon: <GoogleIcon /> },
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
    <div className="skills">
      {skills.map((skill, index) => (
        <NavLink to="/work">
          <div
            key={index}
            className="skills__container"
            onMouseEnter={() => handleMouseEnter(skill.name)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="skills__icon">{skill.icon}</div>
            <h2 className="skills__name">{skill.name}</h2>
          </div>
        </NavLink>
      ))}
    </div>
  );
}

export default Skills;
