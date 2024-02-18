import './styles.scss';
import { motion } from 'framer-motion';
import SkillsComponent from '../../components/Skills';

function Main() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="main"
    >
      <h1
        style={{
          textTransform: 'uppercase',
          paddingBottom: '0.5em',
        }}
      >
        14 ans d&apos;expérience dans le tracking de la publicité digitale.
      </h1>
      <div>
        <SkillsComponent />
      </div>
    </motion.div>
  );
}

export default Main;
