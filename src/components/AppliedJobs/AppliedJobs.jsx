import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AppliedJob from '../AppliedJob/AppliedJob';

const AppliedJobs = () => {
    const appliedJobs = useLoaderData()
    console.log(appliedJobs)
    return (
        <div>
            <h1 className='text-5xl font-bold text-center -scroll-mt-12'>Applied Jobs</h1>
            <div>
                {
                    appliedJobs.map(job=><AppliedJob
                    key={job.id}
                    job={job}
                    ></AppliedJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;