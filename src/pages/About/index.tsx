import React from 'react';
import './styles.scss';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import Container from '../../components/Container';
import Section from '../../components/Section';

function About() {
  const isMobile = useMediaQuery('(max-width: 1023px)');
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }} // Initial state of the component
      animate={{ opacity: 1, y: 0 }} // Animation to apply
      transition={{ duration: 0.5 }} // Transition duration
      className="about"
    >
      <Section backgroundColor="" color="" display="flex" flexDirection="row" justifyContent="flex-end" alignItems="flex-end" padding="" margin="">
        <Container backgroundColor="" color="" display="flex" flexDirection="column" justifyContent="space-between" alignItems="" padding="" width={isMobile ? '80%' : '60%'}>
          <h4 className="about__title">À propos</h4>
          <div className="about__body">
            <p>
              Fort de
              {' '}
              <span>plus de 6 ans d&apos;expérience</span>
              {' '}
              dans l&apos;industrie en
              ligne, je me suis spécialisé dans la gestion de campagnes et de
              projets. J&apos;occupe un rôle pivot entre les clients, les agences
              et les éditeurs pour obtenir les meilleurs résultats de campagne.
            </p>
            <p>
              J&apos;aide également les éditeurs à
              {' '}
              <span>
                élargir ou adapter leur
                inventaire aux réseaux d&apos;échange publicitaire.
              </span>
              {' '}
              Avec mon
              penchant pour résoudre les problèmes de suivi, je vous assure
              d&apos;obtenir le meilleur mélange de
              {' '}
              <span>suivi média </span>
              pour votre
              campagne.
            </p>
            <p>
              Au cours des deux dernières décennies, tout en faisant de Paris mon
              lieu de résidence principal et originaire de
              {' '}
              <span>La Réunion</span>
              , j&apos;ai
              cultivé un intérêt profond pour les voyages, le trail running et le
              cyclisme. Par ailleurs, je me suis investi dans le mode de vie
              végétalien, motivé par son engagement envers
              {' '}
              <span>
                la préservation de
                l&apos;environnement.
              </span>
            </p>
            <p className="about__body">
              Ma passion pour la diversité culinaire végétalienne m&apos;a inspiré
              de manière constante, nourrissant mon quotidien. En parallèle, mes
              14 années d&apos;expérience dans le domaine du suivi publicitaire
              numérique ont forgé une solide expertise en analyse de données et en
              gestion de campagnes publicitaires en ligne.
            </p>
            <p>
              Mon parcours, tant personnel que professionnel, illustre mon
              dévouement envers l&apos;exploration, l&apos;excellence et le
              respect de notre environnement.
            </p>

            <NavLink to="/contact">
              <h4 className="about__signature" style={{ color: '#e8c328' }}>Jean-Ludovic Albany</h4>
            </NavLink>
          </div>
        </Container>
      </Section>
    </motion.div>
  );
}

export default About;
