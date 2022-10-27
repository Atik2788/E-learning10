import React from "react";
import { Link } from "react-router-dom";

const ShowMoreHome = () => {
  return (
    <div className="mt-20">
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url("https://i.ibb.co/PFncnVd/teamcoaching2.webp")` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="w-8/12 ">
            <h1 className="mb-5 text-5xl font-bold"><span className="text-white">An investment in knowledge is always pays off!</span></h1>
            <h3 className="mb-5">
             Keep learning! It will helps you every single parts of life. Knowledge is the true friend of your. It will never harm you.
            </h3>
            <Link to='/blog'><button className="btn btn-primary">Learn More</button></Link>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ShowMoreHome;
