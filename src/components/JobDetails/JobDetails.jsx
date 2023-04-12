import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToDb } from '../../utilities/fakedb';

const JobDetails = ()=> {
    
    const jobs = useLoaderData()
    const id = useParams()
    const [selectedJob,setSelectedJob]=useState({});
    
    useEffect(()=>{
        
            const theJob = jobs.find(job => job.id === id.JobDetailsId);
            setSelectedJob(theJob);
    

    },[]);

    // console.log(id.JobDetailsId);
    // console.log(selectedJob);
    const addToAppliedJob = (appliedJob) => {
        addToDb(appliedJob.id);
        console.log(appliedJob.id);
      };
    return (
        <div className='w-3/4 mx-auto mt-10'>
            <h1 className='text-3xl text-center font-bold my-12'>Job Details</h1>
            <div className='grid grid-cols-3 gap-4'>
                <div className='col-span-2'>
                    <p className='my-3'><span className='font-bold'>Job Responsibilities</span> {selectedJob.responsibilities}</p>
                    <p className='my-3'><span className='font-bold'>Job Description:</span> {selectedJob.description}</p>
                    <p className='my-3'><span className='font-bold'>Educational Requirements:</span><br /> {selectedJob.educationalRequirements}</p>
                    <p className='my-3'><span className='font-bold'>Experiences:</span><br /> {selectedJob.experiencesNeeded}</p>
            
                </div>
                <div className='my-2'>
                    <div className='bg-sky-100 p-4 rounded'>
                        <h1 className='font-bold border-b my-4'>Job Details</h1>
                        <p><span className='font-semibold my-4'>Salary: </span>{selectedJob.salary}(Per Month)</p>
                        <p><span className='font-semibold my-4'>Job Title: </span>{selectedJob.jobTitle}</p>
                        <h1 className='font-bold border-b my-5'>Contact Information</h1>
                        <p><span className='font-semibold my-4'>Phone: </span>{selectedJob.phoneNumber}</p>
                        <p><span className='font-semibold my-4'>Email: </span>{selectedJob.email}</p>
                        <p><span className='font-semibold my-4'>Address: </span>{selectedJob.location}</p>
                        
                    </div>
                    <button onClick={()=>addToAppliedJob(selectedJob)} className='bg-blue-400 hover:bg-blue-600 mt-8 w-full text-center p-2 rounded-lg text-white font-semibold'>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;