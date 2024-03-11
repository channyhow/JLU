import React from 'react';
import './styles.scss';

function Copyright() {
  return (
    <div className="copyright">
      <p className="copyright__body">
        ©2024 -
        {' '}
        <a
          href="https://channyhow.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>channy how.</span>
        </a>

        {' '}
        {' '}
        {/* Coded with ♡ in
        {' '}
        <span>Vite.js</span>
        {' '}

        <span>React</span>
        {' '}
        {' '}
        and
        {' '}
        {' '}
        <span> Scss</span>
        , deployed with
        {' '}
        <span>Netlify</span> */}

      </p>
    </div>
  );
}

export default Copyright;
