import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import CoursesRight from "../CoursesRight/CoursesRight";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("https://elearn-server-atik2788.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="mt-20">
        <h1 className="text-center text-5xl font-bold font-sans mb-20 shadow-lg p-5">Our Courses</h1>

      <div className="lg:flex w-11/12 mx-auto mt-10">
        <div className="lg:w-2/6">
          <h3 className="text-3xl text-center lg:text-left font-bold mb-6">Course List</h3>
          {courses.map((course) => (
            <Link to ={`/cartdetails/${course.id}`}>
            <div className="text-xl font-bold mt-2 shadow-md text-center lg:text-left py-2"
                key={course.id}>
              {course.name}
            </div></Link>
          ))}
        </div>

        <div className="w-full p-14 md:grid lg:grid md:grid:cols-2 lg:grid-cols-2 md:gap-5 lg:gap-10 mb-10">
          {
            courses.map(course=>
              <CoursesRight
              key={course.id}
              course={course}
              ></CoursesRight>
            )
          }
          </div>
      </div>
    </div>
  );
};

export default Courses;
