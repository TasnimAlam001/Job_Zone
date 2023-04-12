import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='border border-slate-400 p-4 m-4'>
                <h1 className='text-3xl font-semibold'>
                    When should we use context API?
                </h1>
                <ul>
                    <li>Context API is a React structure that makes it possible to share particular information and helps to address prop-drilling at all application levels.</li>
                </ul>
            </div>
            <div className='border border-slate-400 p-4 m-4'>
            <h1 className='text-3xl font-semibold'>
                What is react custom HOOk?
            </h1>
            <ul>
                <li>A React JS software developer can employ custom React JS hooks, which are reusable functions, to add distinctive and customized functionality to React apps.</li>
            </ul>
            </div>
            <div className='border border-slate-400 p-4 m-4'>
            <h1 className='text-3xl font-semibold'>
                Why we use useRef and useMemo?
            </h1>
            <ul>
                <li>We are able to maintain values between renders thanks to the useRef Hook. A mutable value that does not require a re-render when updated can be stored there. It can be used to get immediate access to a DOM element.</li>
                <li>
                    Fundamentally, useMemo is a tool built to help us optimize re-renders.
                </li>
            </ul>
            </div>

        </div>
    );
};

export default Blog;