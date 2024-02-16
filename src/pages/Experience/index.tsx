import React from 'react';
import './styles.scss';
import { motion } from 'framer-motion';
import DataCard from '../../components/DataCard';
import { convertExperienceToCommonFields } from '../../utils/dataConversion'; // Ensure this import path is correct
import experienceData from '../../utils/data/experienceData.json'; // Make sure the path to your data is correct

function Experience() {
  // Convert the experience data to the common fields format
  const commonExperienceData = convertExperienceToCommonFields(experienceData);

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }} // Initial state of the component
      animate={{ opacity: 1, y: 0 }} // Animation to apply
      transition={{ duration: 0.5}} // Transition duration      
      className="experience"
    >
      <h3 className="experience__title">
work      </h3>
      {/* Now passing the converted data */}
      <DataCard data={commonExperienceData}/>
    </motion.div>
  );
}

export default Experience;
