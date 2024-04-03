import React, { useState } from 'react';
import './styles.scss';
import { motion } from 'framer-motion';
import useMediaQuery from '@mui/material/useMediaQuery';
import DataCard from '../../components/DataCard';
import { convertExperienceToCommonFields } from '../../utils/dataConversion'; // Ensure this import path is correct
import experienceData from '../../utils/data/experienceData.json'; // Make sure the path to your data is correct
import Container from '../../components/Container';
import Section from '../../components/Section';
import FilterButton from '../../components/FilterButton';

interface ExperienceProps {
  startYear: number;
  endYear: number;
}

function Experience() {
  const isMobile = useMediaQuery('(max-width: 1023px)');

  // Convert the experience data to the common fields format
  const commonExperienceData = convertExperienceToCommonFields(experienceData);
  const [filteredData, setFilteredData] = useState(commonExperienceData);
  const [isFilterApplied, setIsFilterApplied] = useState(false);

  const handleOpen = ({ startYear, endYear }: ExperienceProps) => {
    const filtered = commonExperienceData.filter((data) => {
      const year = parseInt(data.startYear, 10);
      return year >= startYear && year <= endYear;
    });
    setFilteredData(filtered);
    setIsFilterApplied(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }} // Initial state of the component
      animate={{ opacity: 1, y: 0 }} // Animation to apply
      transition={{ duration: 0.5 }} // Transition duration
      className="experience"
    >
      <Section backgroundColor="" color="" display="flex" flexDirection="row" justifyContent="flex-end" alignItems="" padding="" margin="">
        <Container backgroundColor="" color="" display="flex" flexDirection="column" justifyContent="flex-start" alignItems="flex-end" padding="" width="60%">
          <h4 className="experience__title">
            work
          </h4>
          <div
            className="experience__filters"
            style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              alignItems: 'flex-end',
              whiteSpace: 'nowrap',

            }}
          >
            <FilterButton label="2000-2009" onStartYearFilterChange={handleOpen} startYear={2000} endYear={2009} />

            <FilterButton label="2010-2019" onStartYearFilterChange={handleOpen} startYear={2010} endYear={2019} />
            <FilterButton label="2020-présent" onStartYearFilterChange={handleOpen} startYear={2020} endYear={new Date().getFullYear()} />
          </div>
          {isFilterApplied && <DataCard data={filteredData} />}
        </Container>
      </Section>

    </motion.div>
  );
}

export default Experience;
