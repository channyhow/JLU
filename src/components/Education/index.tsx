import React from 'react';
import './styles.scss';
import educationData from '../../data/educationDate.json';
import EducationCard from '../EducationCard';

function Education() {
  return (
    <section className="education">
      <h4 className="education__title">Education</h4>
      {/* <p className="education__body"> */}
      <EducationCard education={educationData} />
      {/* </p> */}
    </section>
  );
}

export default Education;
