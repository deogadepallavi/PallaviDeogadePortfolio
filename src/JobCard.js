import React, { useState } from 'react';

const JobCard = ({ job = {} }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="job-card" onClick={toggleDetails}>
      <div className="job-title">{job.title || 'No Title Provided'}</div>
      <div className="job-duration">{job.duration || 'No Duration Provided'}</div>
      <span className="toggle-btn">{isOpen ? '−' : '+'}</span>
      {isOpen && (
        <div className="details">
          <p className="location">📍 {job.location || 'No Location Provided'}</p>
          <p>{job.description || 'No Description Available'}</p>
          <div className="tech-stack">
            {job.techStack.length > 0 ? (
              job.techStack.map((tech, index) => <span key={index}>{tech}</span>)
            ) : (
              <span>No Tech Stack Available</span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default JobCard;
