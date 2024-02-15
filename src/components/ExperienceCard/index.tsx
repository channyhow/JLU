import React, { useState } from 'react';
import './styles.scss';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { IExperience } from '../../@types';

interface ExperienceCardProps {
  experiences: IExperience[];
}

function ExperienceCard({ experiences }: ExperienceCardProps) {
  // Initial number of experiences to display
  const [displayStartIndex, setDisplayStartIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);
  const [clickedIndex, setClickedIndex] = useState<string | null>(null);

  // State to store the selected experience
  const [selectedExperience, setSelectedExperience] = useState<IExperience | null>(null);

  // Function to handle mouse enter event
  const handleMouseEnter = (id: string) => {
    setHoveredIndex(id);
  };

  // Function to handle mouse leave event
  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  // Function to handle click on a company card
  const handleCompanyClick = (experience: IExperience) => {
    setSelectedExperience(experience);
    setClickedIndex(experience.id);
  };

  // Function to handle "See More" button click
  const handleSeeMore = () => {
    const newStartIndex = displayStartIndex + 5;
    if (newStartIndex < experiences.length) {
      setDisplayStartIndex(newStartIndex);
    }
  };

  // Function to handle "See Less" button click
  const handleSeeLess = () => {
    const newStartIndex = displayStartIndex - 5;
    if (newStartIndex >= 0) {
      setDisplayStartIndex(newStartIndex);
    }
  };

  return (
    <div className="experience-card" style={{ display: 'flex' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        {/* Map over experiences array to render company cards */}
        {experiences.slice(displayStartIndex, displayStartIndex + 5).map((exp, index) => (
          <div
            style={{ display: 'flex', alignItems: 'center' }}
            onMouseEnter={() => handleMouseEnter(exp.id)}
            onMouseLeave={handleMouseLeave}
            key={exp.id}
          >
            {/* Company card button */}
            <button type="submit" onClick={() => handleCompanyClick(exp)}
            
            >
              {/* Company name */}
              <span
                style={{
                  textTransform: index % 3 === 1 ? 'none' : 'uppercase',
                  opacity: index % 5 === 1 ? '0.8' : '1',
                  fontFamily: index % 3 === 1 ? 'EB Garamond' : 'Antonio',
                  fontSize: selectedExperience && selectedExperience.id === exp.id && exp.company.length > 20 ? '1.5em' : '3.5em', // Adjust font size based on company name length
                  cursor: 'pointer',
                  transition: 'opacity 0.5s',
                  color: (selectedExperience && selectedExperience.id === exp.id) || (hoveredIndex === exp.id) || (clickedIndex === exp.id) ? '#ba0e0e' : 'black', // Change color on click and hover
                }}
              >
                {exp.company}
              </span>
            </button>
            {/* Render modal if a company is selected */}
            {selectedExperience && selectedExperience.id === exp.id && (
              <div className="modal" style={{ marginLeft: '1em' }}>
                <div className="modal-content">
                  {/* Details of selected experience */}
                  <div style={{ display: 'flex', alignItems: 'baseline' }}>
                    <h4 style={{ padding: '0 0.5em', fontFamily: 'EB Garamond' }}>{selectedExperience.position}</h4>
                  </div>
                  <div style={{
                    display: 'flex', alignItems: 'baseline', color: '#E8C328', fontFamily: 'EB Garamond',
                  }}
                  >
                    <p style={{ padding: '0 0.5em' }}>{selectedExperience.startYear}</p>
                    <p>{selectedExperience.endYear}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
        <div style={{ display: 'flex' }}>
          {/* "See Less" button */}
          {displayStartIndex > 0 && (
            <button onClick={handleSeeLess} style={{ margin: '1em' }} type="submit">
              <ExpandLessIcon />
            </button>
          )}
          {/* "See More" button */}
          {displayStartIndex + 5 < experiences.length && (
            <button onClick={handleSeeMore} style={{ margin: '1em' }} type="submit">
              <ExpandMoreIcon />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;
