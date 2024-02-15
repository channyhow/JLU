import React from 'react';
import './styles.scss';
import ExperienceCard from '../../components/ExperienceCard';
import experienceData from '../../data/experienceData.json';
import { motion } from 'framer-motion';

function Experience() {
  return (
    <motion.div
    initial={{ opacity: 0, y: 0 }} // Initial state of the component
    animate={{ opacity: 1, y: 0 }} // Animation to apply
    transition={{ duration: 0.5}} // Transition duration      
    className="experience"
    >
      <h3
        className="experience__title"
      >
        work
      </h3>
      <ExperienceCard experiences={experienceData} />
    </motion.div>
  );
}

export default Experience;
