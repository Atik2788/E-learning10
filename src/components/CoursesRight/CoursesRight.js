import React from "react";
import { FaStar, IconName } from "react-icons/fa";


const CoursesRight = ({ course }) => {
  const { name, url, title, ratings } = course;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="h-[250px]" src={url} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title ">{name}</h2>
          <p className="h-14">{title}</p>
          <p className="text-lg flex">{ratings} <span className="ml-2"><FaStar></FaStar></span> </p>
        </div>
      </div>
    </div>
  );
};

export default CoursesRight;
