import React, { useState } from 'react';
import './styles.scss';
import { motion } from 'framer-motion';
import { CardProps, ICommonFields } from '../../types';

function DataCard({ data }: CardProps) {
  const [visibleYear, setVisibleYear] = useState<string | null>(null);

  // Aggregate data by start year
  const dataByYear = data.reduce((acc: { [key: string]: ICommonFields[] }, item: ICommonFields) => {
    const { startYear } = item;
    if (!acc[startYear]) {
      acc[startYear] = [];
    }
    acc[startYear].push(item);
    return acc;
  }, {});

  // Toggle visibility of experiences by year
  const handleYearClick = (year: string) => {
    setVisibleYear((prevYear) => (prevYear === year ? null : year));
  };

  return (

    <ul style={{ listStyle: 'none', width: '60%', padding: '40px 0' }}>
      {Object.entries(dataByYear).map(([year, items], index) => (
        <li
          key={year}
          style={{
            borderTop: index === 0 ? 'none' : '1px solid #CDCFC8',
            textAlign: 'right',
            padding: '1em 0',
          }}
        >
          <button
            type="button"
            onClick={() => handleYearClick(year)}
            style={{
              cursor: 'pointer', background: 'none', border: 'none', padding: 0, color: '', textAlign: 'left', width: '100%',
            }}
          >
            <h3 style={{ textAlign: 'right' }}>
              {year}
            </h3>
          </button>
          {visibleYear === year && (
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="data-details"

          >
            {items.map((item) => (
              <li
                key={item.id}
                style={{
                  padding: '0.5em 0', whiteSpace: 'nowrap', textAlign: 'right', display: 'flex', alignItems: 'flex-end', flexDirection: 'column',
                }}
              >
                <h5 style={{ paddingBottom: '0.5em', fontWeight: '500' }}>
                  {' '}
                  {item.organization}
                </h5>
                <p style={{ whiteSpace: 'normal' }}>
                  {' '}
                  {item.title}
                </p>
              </li>
            ))}
          </motion.div>
          )}
        </li>
      ))}
    </ul>
  );
}

export default DataCard;
