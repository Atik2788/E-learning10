import React from "react";
import { FaStar } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

import welcomeVideo from "../../assets/sleek-welcome-background_wyfvvvz-s__f1bb1126d621e8323d2d2713ce6308bb__P360.mp4";

const CheckOut = () => {
  const course = useLoaderData();
  const { url, price, title, details, author, name, ratings, students, id } =
    course;

  return (
    <div>
      <div className="mt-20">
        <div className="text-center font-bold w-11/12 mx-auto">
          <h1 className="text-4xl">Congratulation !!</h1>
          <h3 className="text-2xl mt-2">name</h3>
          <p className="text-2xl mt-2">You got lifetime access.</p>
        </div>

        <video
          className="mx-auto mt-5 lg:w-3/5 w-11/12 rounded-md"
          src={welcomeVideo}
          controls
          autoPlay="true"
        ></video>
      </div>

      <div className="w-10/12 mx-auto mt-20">
        <div className=" lg:flex bg-base-100 shadow-xl ">
            <div>
                <figure>
                    <img src={url} alt="Album" />
                </figure>
            </div>

          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p className="text-2xl font-bold">{title}</p>
            <p>{details}</p>
            <div className="card-actions justify-center lg:justify-start mt-2">
              <Link to='/'><button className="btn btn-primary">Start Course</button></Link>
            </div>            
          </div>

        </div>        
      </div>


    </div>
  );
};

export default CheckOut;
