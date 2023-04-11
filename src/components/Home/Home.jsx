import React from 'react';
import Header from '../Header/Header';
import JobCategory from '../JobCategory/JobCategory';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
  const jobs =useLoaderData();
    return (
        <div className=' w-4/5 m-auto'>
          <Header></Header>
          <JobCategory></JobCategory>
          <div className='mt-12'>
          <h1 className='text-5xl text-center'>Featured Jobs</h1>
            <p className=' text-center my-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
          </div>
          <div className='grid grid-cols-2 gap-6 mt-10'>
          {
            jobs.map(job=><FeaturedJobs
            key={job.id}
            job={job}
            ></FeaturedJobs>)
          }
          </div>
        </div>
    );
};

export default Home;<h1>Home</h1>