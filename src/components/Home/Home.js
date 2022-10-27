import React from 'react';
import { Link } from 'react-router-dom';
import About from '../About/About';
import Login from '../Sheared/Login/Login';
import ShowMoreHome from '../ShowMoreHome/ShowMoreHome';
import AOS from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";


const Home = () => {

    useEffect(() =>{
        AOS.init({duration: 1000})
      },[])


    return (
        <div>
            <div className='lg:flex md:flex mt-32 w-11/12 mx-auto '>
                <div className='lg:w-11/12 md:w-2/4 md:text-left text-center lg:text-left mx-auto'>
                    <h1 className='text-5xl font-semibold'>Become an international 
                    <p className='text-orange-600 font-bold my-2'>3d artist</p> from anywhere.
                    </h1>
                    <p className='mt-4 text-2xl'>Gain the skills you need to get hired. Learn online, connect to life-changing opportunities. Make your future from here. Keep stay with us..
                    </p>
                    <Link to='/courses'><button className="mt-4 btn btn-outline btn-primary">Start Now!</button></Link>
                </div>

                <div className='mx-auto shadow-lg lg:mt-0 md:mt-0 mt-5'>
                    <img src={'https://hariwebinfotech.com/wp-content/uploads/2021/08/MediumValidAardwolf-max-1mb.gif'} alt="" />
                </div>
            </div>

            <ShowMoreHome></ShowMoreHome>
            <div  data-aos=""><About></About></div>
            <h2 className='text-center text-5xl font-bold mt-20 shadow-xl lg:w-2/5 mx-auto py-4'>Get in Touch</h2>
            <div data-aos=""><Login></Login></div>
            


        </div>
    );
};

export default Home;