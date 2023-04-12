import React from 'react';

const JobSector = ({job}) => {
    return (
        <div className='job'>
            <img src={job.img} alt="" />
            <h4 className='text-2xl mt-3'>{job.name}</h4>
            <p>{job.availableJob} Jobs Available</p>
        </div>
    );
};

export default JobSector;