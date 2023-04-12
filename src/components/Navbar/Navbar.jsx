import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='mb-12 px-5'>
            <div className='flex justify-between md:w-4/5 m-auto pt-8'>
                <h1 className='text-3xl md:text-5xl'>Job Zone</h1>
                <div className='md:flex items-center'>
                    <Link className='mr-2 md:mr-4' to="/">Home</Link>
                    <Link className='mr-2 md:mr-4' to="/statistics">Statistics</Link>
                    <a className='mr-2 md:mr-4' href="/appliedJobs">Applied Jobs</a>
                    <Link className='mr-2 md:mr-4' to="/blog">Blog</Link>
                    
                </div>
                <button className='bg-purple-400 p-3 rounded text-white'>Star Applying</button>
            </div>
        </nav>
    );
};

export default Navbar;