import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AppliedJob from '../AppliedJob/AppliedJob';

const AppliedJobs = () => {
    const appliedJobs = useLoaderData()
    
    return (
        <div>
            <h1 className='text-5xl font-bold text-center my-12'>Applied Jobs</h1>
            <div className='w-3/4 mx-auto grid justify-items-end '>
                <form className='border border-slate-400' action="#">
                    <label htmlFor='sort'></label>
                    <select name='sort' id='sort'>
                        <option value="fullTime">Full time</option>
                        <option value="#" disabled></option>
                        <option value="fullTime">Onsite</option>
                        <option value="#" disabled></option>
                        <option value="fullTime">Remote</option>
                    </select>

                </form>
            </div>
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