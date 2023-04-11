import React, { useEffect } from 'react';

import './FeaturedJobs.css'

const FeaturedJobs = ({job,showDetails}) => {
    const {logo,jobTitle,company,location,jobType1,jobType2,salary}=job;

    
    
    
    return (
        <div className='border border-slate-300 grid p-8 '>
            
            <img className='logo' src={logo} alt="" />
            <p className='text-3xl font-bold my-2'>{jobTitle}</p>
            <p className='text-2xl mb-2'>{company}</p>
            <p><span className='border border-blue-400 text-blue-400 px-3 rounded font-semibold'>{jobType1}</span> <span className='border border-blue-400 text-blue-400 px-3 rounded font-semibold'>{jobType2}</span></p>
            
            <p className='text-1xl  my-1'>Location: {location}</p>
            <p className='text-1xl  mb-2'>Salary : <span className='font-semibold'>{salary}</span></p>
            <button onClick={()=>showDetails(job)} className='bg-blue-400 hover:bg-blue-600 w-1/3 px-3 p-2 rounded-lg text-white font-semibold'>View Details</button>
            
            
        </div>
    );
};

export default FeaturedJobs;