import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = ()=> {
    const jobs = useLoaderData()
    const id = useParams()
    const [selectedJob,setSelectedJob]=useState({});
    
    useEffect(()=>{
        
            const theJob = jobs.find(job => job.id === id.JobDetailsId);
            setSelectedJob(theJob);
    

    },[])

    console.log(id.JobDetailsId);
    console.log(selectedJob);
    return (
        <div>
            <h1>jhaslaucvi{id.JobDetailsId}</h1>

        </div>
    );
};

export default JobDetails;