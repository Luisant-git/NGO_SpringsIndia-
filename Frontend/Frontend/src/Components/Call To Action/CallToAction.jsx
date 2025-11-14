import React from 'react';
import { FaTrophy } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <div className="jm-call-to-action-area pb-100">
      <div className="container">
        <div className="jm-noo-call-to-action-content">
          <div className="jm-action-box">
            <h2 className="jm-action-title text-white mb-0">
              {' '}
              Let’s work together to achieve success.
            </h2>
          </div>
          <div className="jm-action-text px-3">
          <div className='text-center' style={{ fontSize: "50px", color: "gold" }}>
      <FaTrophy />
      <p>Achievement Unlocked!</p>
    </div>
          </div>
          {/* <span className="jm-action-button ">
                    <Link to="/postJobPage" className="jm-theme-btn">Post now</Link>
                </span>  */}
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
