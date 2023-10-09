import React from 'react';
import './styles.scss';

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">
        <span>JL</span>
        Albany
      </h1>
      <h4 className="header__subtitle">14 ans d&apos;expérience dans le tracking de la publicité digitale.</h4>
      <p className="header__body">
        Lancement de campagne, gestion de tags, intégration de solutions de tracking tierces,
        mise en place de TMS et Analytics et de solutions pour publisher.
      </p>
    </header>
  );
}

export default Header;
