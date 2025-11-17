import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="container">
        <div className="not-found-content">

          <p>The page you are looking for doesn't exist or has been moved.</p>

        </div>
      </div>
    </div>
  );
};

export default NotFound;