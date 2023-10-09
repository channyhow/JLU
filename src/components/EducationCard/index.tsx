import React from 'react';
import './styles.scss';
import { IEducation } from '../../@types';

interface EducationCardProps {
  education: IEducation[];
}

function EducationCard({ education }: EducationCardProps) {
  return (
    <div className="education-card">
      {education.map((edu) => (
        <div key={edu.id} className="education-card__body">
          <div className="education-card__duration">
            <h4 className="education-card__year">
              {edu.endYear}
            </h4>

            <h4 className="education-card__year">
              {edu.startYear}
            </h4>
          </div>
          <div className="education-card__details">
            <div className="education-card__degree">{edu.degree}</div>
            <div className="education-card__school">{edu.school}</div>
            <div className="education-card__location">{edu.location}</div>
            <div className="education-card__skills">
              {edu.skills.length > 0 ? (
                <ul>
                  {edu.skills.map((skill) => (
                    <li key={edu.id}>{skill}</li>
                  ))}
                </ul>
              ) : (
                <div />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EducationCard;
