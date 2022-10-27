import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>           
        <div className=" my-40 w-11/12 mx-auto">
            <div className="lg:flex ">
                <div className='lg:w-3/5'>
                    <img src="https://i.ibb.co/RPhhK96/e-learning-online-digital-age-knowledge-education-training-seminar-personal-development-113717-127.webp" alt='' className=" rounded-lg shadow-2xl" />
                </div>

                <div className='lg:w-2/5 lg:ml-10 lg:mt-20 mt-10'>
                    <h1 className="text-5xl font-bold">We are here to help you!</h1>
                    <p className="py-6 text-xl">Get unlimited access to 1000+ of ELearn's top courses for your team. Learn and improve skills across business, tech, design, and more.</p>
                    <Link to='/courses'><button className="btn btn-primary">Get Started</button></Link>
                </div>
            </div>
        </div>
        </div>
    );
};

export default About;