import React from 'react';
import './AppliedJob.css'
import { Link } from 'react-router-dom';

const AppliedJob = ({ job }) => {
    const {id,logo, jobTitle, company, location, salary, jobType1, jobType2 } = job;
    console.log(job)
    return (
        <div className='border border-slate-200 my-5 w-3/4 mx-auto rounded-lg p-5 grid grid-cols-3 gap-4'>
            <img className='logo2 my-auto' src={logo} alt="" />
            <div className=''>
                <p className='text-3xl font-bold my-2'>{jobTitle}</p>
                <p className='text-2xl mb-2'>{company}</p>
                <p><span className='border border-blue-400 text-blue-400 px-3 rounded font-semibold'>{jobType1}</span> <span className='border border-blue-400 text-blue-400 px-3 rounded font-semibold'>{jobType2}</span></p>
                <p className='text-1xl  my-1'>Location: {location}</p>
                <p className='text-1xl  mb-2'>Salary : <span className='font-semibold'>{salary}</span></p>
            </div>
            <div className='content-center my-auto'>
                <Link to={`/${id}`} className='bg-blue-400 hover:bg-blue-600 text-center h-fit  ml-24 p-2 rounded-lg text-white font-semibold'>View Details</Link>
            </div>
        </div>
    );
};

export default AppliedJob;
