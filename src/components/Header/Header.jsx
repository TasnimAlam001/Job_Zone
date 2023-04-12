import React from 'react';
import image from '../../image/hardy.png';
const Header = () => {
    return (
        <div className='md:flex md:px-8 pb-5 '>
            <div className='my-auto'>
                <h1 className='text-3xl md:text-7xl font-bold'>One Step <br /> Closer To Your <br /> <span className='text-purple-400'>Dream Job</span></h1>
                <p className='py-4'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='bg-purple-400 p-3 rounded text-white'>Get Started</button>
            </div>
            <img  src={image} alt="" />
        </div>
    );
};

export default Header;