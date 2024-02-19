import React, { useState } from 'react';
import './styles.scss';
import { CardProps, EducationOrExperience } from '../../types';

function DataCard({ data }: CardProps) {
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);
  // Removed the clickedIndex state as it's no longer needed for hover functionality

  const handleMouseEnter = (id: string) => setHoveredIndex(id);
  const handleMouseLeave = () => setHoveredIndex(null);
  // Removed handleDataClick as it's no longer needed for hover functionality

  return (
    <div className="data-card">
      {data.map((entry, index) => (
        <div
          key={entry.id}
          className="data-card__body"
          onMouseEnter={() => handleMouseEnter(entry.id)}
          onMouseLeave={handleMouseLeave}
        >
          <button type="button">
            <span
              className="data-card__organization"
              style={{
                textTransform: index % 3 === 1 ? 'none' : 'uppercase',
                opacity: index % 5 === 1 ? '0.8' : '1',
                fontFamily: index % 3 === 1 ? 'EB Garamond' : 'Antonio',
                fontSize: '3.5em',
                cursor: 'pointer',
                transition: 'opacity 0.5s',
                color: hoveredIndex === entry.id ? '#ba0e0e' : 'black',
              }}
            >
              {entry.organization}
            </span>
          </button>

          {/* Show modal when hoveredIndex matches entry.id */}
          {hoveredIndex === entry.id && (
            <div className="data-card__modal">
              <div
                className="data-card__duration"
                style={{
                  display: 'flex',
                  paddingRight: '0.5em',
                  color: '#E8C328',
                }}
              >
                <p className="data-card__year" style={{ paddingRight: '0.5em' }}>
                  {entry.endYear}
                </p>
                <p className="data-card__year">{entry.startYear}</p>
              </div>
              <div className="data-card__details" style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className="data-card__title">
                  <h4 style={{ fontWeight: '500' }}>{entry.title}</h4>
                </div>
              </div>
              {/* Uncomment and adjust as needed if you decide to display skills
              <div className="data-card__skills">
                {entry.skills && entry.skills.length > 0 ? (
                  <ul>
                    {entry.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                ) : (
                  <div />
                )}
              </div> */}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default DataCard;
