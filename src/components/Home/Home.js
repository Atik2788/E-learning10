import React from 'react';
import Courses from '../Courses/Courses';

const Home = () => {
    return (
        <div>
            <div className='lg:flex mt-32 w-11/12 mx-auto'>
                <div className='w-7/12 '>
                    <h1 className='text-5xl font-semibold'>Become an international 
                    <p className='text-orange-600 font-bold my-2'>3d artist</p> from anywhere.
                    </h1>
                    <p className='mt-4 text-2xl'>Gain the skills you need to get hired. Learn online, connect to life-changing opportunities. Make your future from here. Keep stay with us..
                    </p>
                </div>

                <div className='mx-auto shadow-lg'>
                    <img src={'https://hariwebinfotech.com/wp-content/uploads/2021/08/MediumValidAardwolf-max-1mb.gif'} alt="" />
                </div>
            </div>

            
        </div>
    );
};

export default Home;