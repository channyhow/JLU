import React from 'react';
import './styles.scss';
import { motion } from 'framer-motion';
import ContactForm from '../../components/ContactForm';
// import ResumeDownload from '../../components/ResumeDownload';

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }} // Initial state of the component
      animate={{ opacity: 1, y: 0 }} // Animation to apply
      transition={{ duration: 0.5 }} // Transition duration
      className="contact"
    >
      <div className="container">
        <h4
          className="contact__title"
        >
          contact
        </h4>
        <ContactForm />
      </div>

    </motion.div>
  );
}

export default Contact;
