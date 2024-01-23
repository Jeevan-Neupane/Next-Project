// LoadingPage.js

import React from 'react';
import { FaSpinner } from 'react-icons/fa';

const LoadingPage = () => {
  return (
    <div className="loadingContainer">
      <FaSpinner className="spinner" />
      <p className="Loadingtext">Loading...</p>
    </div>
  );
};

export default LoadingPage;
