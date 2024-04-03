import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

function Copyright() {
  return (
    <div className="copyright">

      <Link
        to="https://channyhow.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h5>channy how ©2024 </h5>
      </Link>

    </div>
  );
}

export default Copyright;
