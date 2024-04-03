import React from 'react';
import './styles.scss';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import Container from '../../components/Container';
import Section from '../../components/Section';

export default function NotFound() {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ scale: '0.8' }}
      className="not-found"
    >
      <Section backgroundColor="" color="" display="flex" flexDirection="row" justifyContent="flex-end" alignItems="center" padding="" margin="">
        <Container backgroundColor="" color="" display="flex" flexDirection="column" justifyContent="flex-start" alignItems="flex-end" padding="40px 0" width="60%">
          <h3
            className="not-found__title"
            style={{ paddingBottom: '1em ' }}
          >
            Oopsie Daisy !
          </h3>
          <p
            className="not-found__description"
            style={{ paddingBottom: '1em ' }}

          >
            On dirait que vous êtes perdu.
            {' '}
            <br />
            La page que vous cherchez n&rsquo;est pas disponible.
          </p>
          <NavLink to="/" className="not-found__home-link">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              style={{
                border: '1px solid black', color: 'black', padding: '0.5em 1em', borderRadius: '0px', whiteSpace: 'nowrap', backgroundColor: 'transparent',
              }}
            >
              <h5>Ramenez-moi à l&rsquo;accueil</h5>
            </motion.button>
          </NavLink>
        </Container>
      </Section>
    </motion.div>
  );
}
