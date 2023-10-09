import React from 'react';
import './styles.scss';

function Copyright() {
  return (
    <section className="copyright">
      {/* <h4 className="copyright__title">Copyright</h4> */}
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
    </section>
  );
}

export default Copyright;
