import React from 'react';

const JobDetails = ({job}) => {
    return (
        <div>
            <h1>{job.jobTitle}</h1>
        </div>
    );
};

export default JobDetails;