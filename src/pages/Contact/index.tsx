import React from 'react';
import './styles.scss';
import { motion } from 'framer-motion';
import ContactForm from '../../components/ContactForm';
import Container from '../../components/Container';
import Section from '../../components/Section';
// import ResumeDownload from '../../components/ResumeDownload';

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }} // Initial state of the component
      animate={{ opacity: 1, y: 0 }} // Animation to apply
      transition={{ duration: 0.5 }} // Transition duration
      className="contact"
    >
      <Section backgroundColor="" color="" display="flex" flexDirection="row" justifyContent="flex-end" alignItems="" padding="" margin="">
        <Container backgroundColor="" color="" display="flex" flexDirection="column" justifyContent="flex-start" alignItems="flex-end" padding="" width="60%">
          {' '}
          <h4
            className="contact__title"
          >
            contact
          </h4>
          <ContactForm />
        </Container>
      </Section>
    </motion.div>
  );
}

export default Contact;
