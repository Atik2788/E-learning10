import React from "react";
import { FaStar } from "react-icons/fa";
import AOS from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";


const CoursesRight = ({ course }) => {
  const { name, url, title, ratings, price } = course;

  useEffect(() =>{
    AOS.init({duration: 1000})
  },[])

  return (
    <div data-aos="fade-up" >
      <div className="rounded-xl w-94 bg-base-100 shadow-xl h-[475px]">
        <figure>
          <img className="h-[250px] rounded-t-xl mx-auto" src={url} alt="Shoes" />
        </figure>

        <div className="card-body mt-2 ">
          <div className="flex justify-between">
            <span className="card-title text-2xl font-bold darkWithText"> {name}</span>
            <span className="font-bold text-2xl ">{price}</span>
          </div>

          <p className="h-14 font-bold mt-2 darkWithText">{title}</p>
          <p className="text-lg flex darkWithText">{ratings} <span className="ml-2 text-yellow-500 pt-1"><FaStar></FaStar></span> </p>
          </div>
      </div>
    </div>
  );
};

export default CoursesRight;
