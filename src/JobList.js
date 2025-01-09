import React from 'react';
import JobCard from './JobCard';
import { jobs } from './jobsData'; // Import the jobs array

const JobList = () => {
  return (
    <div>
      {jobs.map((job, index) => (
        <JobCard key={index} job={job} />
      ))}
    </div>
  );
};

export default JobList;
