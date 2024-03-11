import React, { useState } from 'react';
import './styles.scss';
import { useMediaQuery } from '@mui/material';
import { CardProps } from '../../types';

function DataCard({ data }: CardProps) {
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);
  // Removed the clickedIndex state as it's no longer needed for hover functionality
  const isMobile = useMediaQuery('(max-width:1023px)');

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
                fontSize: '3em',
                cursor: 'pointer',
                transition: 'opacity 0.5s',
                color: hoveredIndex === entry.id ? '#D79FC7' : isMobile ? 'white' : 'black',
              }}
            >
              {entry.organization}
            </span>
          </button>

          {/* Show modal when hoveredIndex matches entry.id */}
          {hoveredIndex === entry.id && (
          <div className="data-card__modal">
            {' '}
            <h5 style={{ fontWeight: '500' }}>{entry.title}</h5>

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
          </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default DataCard;
