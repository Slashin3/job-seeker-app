import React from 'react';
import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <div className="success-container" role="alert" aria-live="assertive">
      <h2>Submission Successful!</h2>
      <p>Thank you for signing up. Your information has been submitted successfully.</p>
      <Link to="/">Go Back to Signup</Link>
    </div>
  );
};

export default Success;
