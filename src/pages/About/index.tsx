import React from 'react';
import './styles.scss';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

function About() {

  return (
    <motion.div
    initial={{ opacity: 0, y: 0 }} // Initial state of the component
    animate={{ opacity: 1, y: 0 }} // Animation to apply
    transition={{ duration: 0.5}} // Transition duration      
    className="about"
    >
      <h3
        className="about__title"
      >
        about
      </h3>
      <p className="about__body">
        Au cours des deux dernières décennies, tout en faisant de Paris mon lieu
        de résidence principal, je suis originaire de La Réunion. J&apos;ai cultivé
        un intérêt profond pour les voyages, le trail running et le cyclisme.
        Par ailleurs, je me suis investi dans le mode de vie végétalien, motivé
        par son engagement envers la préservation de l&apos;environnement.
      </p>
      <p className="about__body">
        Ma passion pour la diversité culinaire végétalienne m&apos;a inspiré de
        manière constante, nourrissant mon quotidien. En parallèle, mes 14
        années d&apos;expérience dans le domaine du suivi publicitaire numérique ont
        forgé une solide expertise en analyse de données et en gestion de
        campagnes publicitaires en ligne.
      </p>
      <p className="about__body">
        Mon parcours, tant personnel que professionnel, illustre mon dévouement
        envers l&apos;exploration, l&apos;excellence et le respect de notre environnement.
        {' '}
      </p>
      <NavLink to={'/contact'}><h4 className="about__signature">Jean-Ludovic Albany</h4></NavLink>


    </motion.div>
  );
}

export default About;
