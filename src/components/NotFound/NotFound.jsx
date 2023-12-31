import React from 'react';
import './NotFound.css'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <div className="bg-indigo-900 relative overflow-hidden h-screen">
                <img src="https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1" className="absolute h-full w-full object-cover" />
                <div className="inset-0 bg-black opacity-25 absolute">
                </div>
                <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
                    <div className="w-full font-mono flex flex-col items-center relative z-10">
                        
                        <p className="font-extrabold text-8xl my-44 text-white animate-bounce">
                            404
                        </p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default NotFound;