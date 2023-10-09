import React from 'react';
import './styles.scss';
import ContactForm from '../ContactForm';

function Contact() {
  return (
    <section className="contact">
      <h4 className="contact__title">Contact</h4>
      <ContactForm />
    </section>
  );
}

export default Contact;
