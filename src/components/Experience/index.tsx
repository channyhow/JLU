import React, { useState } from 'react';
import './styles.scss';
import { Button } from '@mui/material';
import experienceData from '../../data/experienceData.json';
import ExperienceCard from '../ExperienceCard';

function Experience() {
  // Initialize a state to track whether to show all experiences
  const [showAllExperiences, setShowAllExperiences] = useState(false);

  // Slice the 'experienceData' array to get the first three experiences
  const firstThreeExperiences = experienceData.slice(0, 3);

  return (
    <section className="experience">
      <h4 className="experience__title">Experience</h4>
      {/* Toggle button to show/hide all experiences */}

      {/* Pass either 'firstThreeExperiences' or 'experienceData' based on the state */}
      <ExperienceCard experiences={showAllExperiences ? experienceData : firstThreeExperiences} />
      <Button
        style={{
          margin: '1em',
          padding: '0.5em',
          color: 'white',
          alignSelf: 'flex-start',
          opacity: 0.8,
        }}
        type="submit"
        onClick={() => setShowAllExperiences(!showAllExperiences)}
      >
        {showAllExperiences ? 'merci!' : 'Voir le résumé complet'}
      </Button>
      {' '}

    </section>
  );
}

export default Experience;

// Define the 'IExperience' interface somewhere in your project
// and ensure it matches the structure of your experience data.
