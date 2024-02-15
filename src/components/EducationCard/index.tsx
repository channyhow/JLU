import React, { useState } from 'react';
import './styles.scss';
import { IEducation } from '../../@types';

interface EducationCardProps {
  education: IEducation[];
}

function EducationCard({ education }: EducationCardProps) {
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);
  const [clickedIndex, setClickedIndex] = useState<string | null>(null);

  // State to store the selected education
  const [selectedEducation, setSelectedEducation] = useState<IEducation | null>(null);

  const handleMouseEnter = (id: string) => {
    setHoveredIndex(id);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  // Function to handle click on a education card
  const handleEducationClick = (edu: IEducation) => {
    setSelectedEducation(edu);
    setClickedIndex(edu.id);
  };

  // const isDataTooLong = (data: string) => {
  //   return data.length > 10; // For example, consider data too long if it exceeds 20 characters
  // };

  return (
    <div className="education-card">
      {education.map((edu, index) => (
        <div
          key={edu.id}
          className="education-card__body"
          onMouseEnter={() => handleMouseEnter(edu.id)}
          onMouseLeave={handleMouseLeave}
        >
          {/* Company card button */}
          <button type="submit" onClick={() => handleEducationClick(edu)}
         >
            <span
  className= 'education-card__school'
  style={{
                textTransform: index % 3 === 1 ? 'none' : 'uppercase',
                opacity: index % 5 === 1 ? '0.8' : '1',
                fontFamily: index % 3 === 1 ? 'EB Garamond' : 'Antonio',
                fontSize: '3.5em',
                cursor: 'pointer',
                transition: 'opacity 0.5s',
                color: (selectedEducation && selectedEducation.id === edu.id) || (hoveredIndex === edu.id) || (clickedIndex === edu.id) ? '#ba0e0e' : 'black',
              }}
            >
              {edu.school}
            </span>

          </button>

          {/* Render modal if a school is selected */}
          {selectedEducation && selectedEducation.id === edu.id && (
          <div style={{ display: 'flex', transition: '0.2s', padding: '0.5em 0' }}>
            <div style={{
              display: 'flex', paddingRight: '0.5em', color: '#E8C328',
            }}
            >
              <h4
                className="education-card__year"
                style={{ paddingRight: '0.5em' }}
              >
                {edu.endYear}
              </h4>

              {' '}
              <h4 className="education-card__year">{edu.startYear}</h4>
            </div>
            <div className="education-card__details" style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div
                className="education-card__degree"
                style={{
                  paddingRight: '0.5em',
                }}
              >
                <h4>
                  {' '}
                  {edu.degree}
                </h4>
              </div>
              {/* <div className="education-card__location"><h4>{edu.location}</h4></div> */}
            </div>
            <div className="education-card__skills">
              {edu.skills.length > 0 ? (
                <ul>
                  {edu.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              ) : (
                <div />
              )}
            </div>
          </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default EducationCard;
