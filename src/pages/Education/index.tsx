import React from "react";
import "./styles.scss";
import educationData from "../../data/educationDate.json";
import EducationCard from "../../components/EducationCard";
import { motion } from "framer-motion";

function Education() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }} // Initial state of the component
      animate={{ opacity: 1, y: 0 }} // Animation to apply
      transition={{ duration: 0.5 }} // Transition duration
      className="education"
    >
      <h3>education</h3>
      <EducationCard education={educationData} />
    </motion.div>
  );
}

export default Education;
