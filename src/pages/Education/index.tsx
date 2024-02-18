import React from 'react';
import './styles.scss';
import { motion } from 'framer-motion';
import educationData from '../../utils/data/educationDate.json';
import DataCard from '../../components/DataCard';
import { convertEducationToCommonFields } from '../../utils/dataConversion';

function Education() {
  // Convert the experience data to the common fields format
  const commonEducationData = convertEducationToCommonFields(educationData);
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }} // Initial state of the component
      animate={{ opacity: 1, y: 0 }} // Animation to apply
      transition={{ duration: 0.5 }} // Transition duration
      className="education"
    >
      <h3>education</h3>
      {/* <EducationCard education={educationData} /> */}

      <DataCard data={commonEducationData} />
    </motion.div>
  );
}

export default Education;
