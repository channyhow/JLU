import React from 'react';
import './styles.scss';

function Copyright() {
  return (
    <div className="copyright">
      <p className="copyright__body">
        Coded with ♡ in
        {' '}
        <span>Visual Studio Code</span>
        .
        {' '}
        <br />
        {' '}
        Built in
        {' '}
        <span>Vite.js</span>
        {' '}
        and
        {' '}
        <span>SCSS</span>
        , deployed with
        {' '}
        <span>Netlify</span>
        .
      </p>
    </div>
  );
}

export default Copyright;
