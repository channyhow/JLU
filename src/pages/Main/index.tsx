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
      <div className="container">
        <h1
          style={{
            textTransform: 'uppercase',
            paddingBottom: '0.5em',
            filter: 'drop-shadow(2px 2px 1px rgba(0,0,0,0.1))',
            fontWeight: '500',
          }}
        >
          14 ans d&apos;expérience dans le tracking de la publicité digitale.
        </h1>
        <SkillsComponent />
      </div>

    </motion.div>
  );
}

export default Main;
