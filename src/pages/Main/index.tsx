import './styles.scss';
import { motion } from 'framer-motion';
import useMediaQuery from '@mui/material/useMediaQuery';
import SkillsComponent from '../../components/Skills';
import Container from '../../components/Container';
import Section from '../../components/Section';

function Main() {
  const isMobile = useMediaQuery('(max-width: 1023px)');

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="main"
    >
      <Section backgroundColor="" color="" display="flex" flexDirection="row" justifyContent="flex-end" alignItems="flex-end" padding="" margin="">
        <Container backgroundColor="" color="" display="flex" flexDirection="column" justifyContent="" alignItems="flex-end" padding={isMobile ? '' : '200px 0 40px 0'} width={isMobile ? '80%' : '60%'}>
          <h1
            style={{
              paddingBottom: '1em',
              fontWeight: '600',
              fontFamily: 'Inter',
              textAlign: 'right',
            }}
          >
            14 ans d&apos;expérience dans le tracking de la
            {' '}
            <span style={{ color: '#CDCFC8' }}>publicité digitale.</span>
          </h1>
          <SkillsComponent />
        </Container>
      </Section>
    </motion.div>
  );
}

export default Main;
