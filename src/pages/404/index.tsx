import React from 'react';
import './styles.scss';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

function NotFound() {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ scale: '0.8' }}
      className="not-found"
    >
      <h4
        className="not-found__title"
        style={{
          // textTransform: 'uppercase',
          padding: '0.5em',
        }}
      >
        Oops !
      </h4>
      <p className="not-found__description">
        On dirait que vous êtes perdu.
        {' '}
        <br />
        La page que vous cherchez n&rsquo;est pas disponible.
      </p>
      <NavLink to="/home" className="not-found__home-link">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          style={{
            background: 'black', color: 'white', padding: '0.5em 1em', borderRadius: '0px',
          }}
        >
          <h4>Ramenez-moi à l&rsquo;accueil</h4>
        </motion.button>
      </NavLink>
    </motion.div>
  );
}

export default NotFound;
