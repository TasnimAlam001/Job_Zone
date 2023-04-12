import React from 'react';
import './JobCategory.css'
import { key } from 'localforage';

const JobCategory = () => {
    const jobs = [
        {
            id: "1",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8mC3hmsIfRcJw5_yPqDm0hBdUeOJ6DBkxw1Hbrn-8OqOfONNmJ_aFZR9ZhQZ4wZ3_pqs&usqp=CAU",
            name: "Account & Finance",
            availableJob: "300"
        },
        {
            id: "2",
            img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/04/106032482.jpeg?auto=format&q=60&w=1280&h=960&fit=crop&crop=faces",
            name: "Creative Design",
            availableJob: "100+"
        },
        {
            id: "3",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfVVMUzx8N7UC4pE9vSnSUblT0NwnuIjPLY4Z6CY3GllzavLsuu8eP2hHMvu936A2DDTU&usqp=CAU",
            name: "Marketing & Sales",
            availableJob: "150"
        },
        {
            id: "4",
            img: "https://arrivein.com/wp-content/uploads/2022/07/01_EngineerCanada-1-1-1-1.png",
            name: "Engineering Job",
            availableJob: "224"
        }
    ];


    return (
        <div>
            <h1 className='text-center text-3xl md:text-5xl mb-3 mt-8'>Job Category List</h1>
            <p className='text-center mb-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                {
                    jobs.map(job =>
                        
                        <div className='job'>
                            
                            <img src={job.img} alt="" />
                            <h4 className='text-2xl mt-3'>{job.name}</h4>
                            <p>{job.availableJob} Jobs Available</p>
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default JobCategory;