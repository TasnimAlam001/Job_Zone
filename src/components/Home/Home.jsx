import React from 'react';
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
          jobs.map((job)=><FeaturedJobs
          key={job.id}
          job={job}
          showDetails={showDetails}
          ></FeaturedJobs>): null
        }
      </div>
    </div>
  );
};

export default Home; <h1>Home</h1>