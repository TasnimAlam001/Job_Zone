import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className=''>
            <div className='flex justify-between w-4/5 m-auto pt-8'>
                <h1 className='text-5xl'>Job Zone</h1>
                <div className='flex items-center'>
                    <Link className='mr-4' to="/">Home</Link>
                    <Link className='mr-4' to="/statistics">Statistics</Link>
                    <Link className='mr-4' to="/appliedJobs">Applied Jobs</Link>
                    <Link className='mr-4' to="/blog">Blog</Link>
                </div>
                <button className='bg-purple-400 p-3 rounded text-white'>Star Applying</button>
            </div>
        </nav>
    );
};

export default Navbar;