import './styles.scss';
import { motion } from 'framer-motion';
import educationData from '../../utils/data/educationDate.json';
import DataCard from '../../components/DataCard';
import { convertEducationToCommonFields } from '../../utils/dataConversion';
import Container from '../../components/Container';
import Section from '../../components/Section';

function Education() {
  // Convert the experience data to the common fields format
  const commonEducationData = convertEducationToCommonFields(educationData);
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }} // Initial state of the component
      animate={{ opacity: 1, y: 0 }} // Animation to apply
      transition={{ duration: 0.5 }} // Transition duration
      className="education"
    >
      <Section backgroundColor="" color="" display="flex" flexDirection="row" justifyContent="flex-end" alignItems="" padding="" margin="">
        <Container backgroundColor="" color="" display="flex" flexDirection="column" justifyContent="flex-start" alignItems="flex-end" padding="" width="60%">
          <h4 className="education__title">education</h4>
          <DataCard data={commonEducationData} />
        </Container>
      </Section>
    </motion.div>
  );
}

export default Education;
