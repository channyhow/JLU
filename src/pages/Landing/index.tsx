import './styles.scss';
import { motion } from 'framer-motion';
import Logo from '../../components/Logo';

function Landing() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }} // Initial state of the component
      animate={{ opacity: 1, y: 0 }} // Animation to apply
      transition={{ duration: 1 }} // Transition duration
      className="landing"
    >
      {' '}
      <div className="landing__logo" style={{ scale: '0.5' }}>
        <Logo />
      </div>
    </motion.div>
  );
}

export default Landing;
