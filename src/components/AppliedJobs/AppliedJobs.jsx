import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AppliedJobs = () => {
    const jobs = useLoaderData()
    console.log(jobs)
    return (
        <div>
            <h1 className='text-5xl font-bold text-center -scroll-mt-12'>Applied Jobs</h1>
            <p>jobs :{jobs.length}</p>
        </div>
    );
};

export default AppliedJobs;