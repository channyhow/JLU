import React from 'react';
import './styles.scss';
import { IExperience } from '../../@types';

interface ExperienceCardProps {
  experiences: IExperience[];
}

function ExperienceCard({ experiences }: ExperienceCardProps) {
  return (
    <div className="experience-card">
      {experiences.map((exp) => (
        <div key={exp.id} className="experience-card__body">
          <div className="experience-card__duration">
            <h4 className="experience-card__year">
              {exp.endYear}
            </h4>

            <h4 className="experience-card__year">
              {exp.startYear}
            </h4>
          </div>
          <div className="experience-card__details">
            <div className="experience-card__degree">{exp.position}</div>
            <div className="experience-card__school">{exp.company}</div>
            <div className="experience-card__location">{exp.location}</div>
            <div>
              {exp.skills.length > 0 ? (
                <ul className="experience-card__skillslist">
                  {exp.skills.map((skill) => (
                    <li key={exp.id} className="experience-card__skills">{skill}</li>
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

export default ExperienceCard;
