import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import JobCategory from '../JobCategory/JobCategory';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import { useLoaderData } from 'react-router-dom';
import JobDetails from '../JobDetails/JobDetails';

const Home = () => {
  const jobs = useLoaderData();
  //console.log(jobs)
  const showDetails = (selectedJob) => {
    // console.log(selectedJob);
    <JobDetails
      key={selectedJob.id}
      job={selectedJob}
    ></JobDetails>
  };

  const [data, setData]=useState(4)
  const sliceData = jobs.slice(0,data)
  const showData =()=>{
    const newData = data + 3;
    setData(newData);
    document.getElementById("btn").classList.add('hidden');
  }
  


  return (
    <div className=' w-4/5 m-auto'>
      <Header></Header>
      <JobCategory></JobCategory>
      <div className='mt-12'>
        <h1 className='text-5xl text-center'>Featured Jobs</h1>
        <p className=' text-center my-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-10'>
        {
          Array.isArray(jobs)
          ?
          sliceData.map((job)=><FeaturedJobs
          key={job.id}
          job={job}
          showDetails={showDetails}
          ></FeaturedJobs>): null
        }
      </div>
      <button onClick={showData} id='btn'  className='bg-blue-400 hover:bg-blue-600 w-1/6 text-center p-2 rounded-lg text-white font-semibold my-8 mx-auto flex justify-center'>Show All</button>
    </div>
  );
};

export default Home; <h1>Home</h1>