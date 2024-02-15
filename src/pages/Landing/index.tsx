import './styles.scss';
import Logo from '../../components/Logo';
import { motion } from 'framer-motion';

function Landing() {
  return (
    <motion.div
    initial={{ opacity: 0, y: 0 }} // Initial state of the component
    animate={{ opacity: 1, y: 0 }} // Animation to apply
    transition={{ duration: 1 }} // Transition duration
    className='landing'
  >      <div className="landing__logo" style={{ scale: '0.5' }}>
        <Logo />
      </div>
    </motion.div>
  );
}

export default Landing;
