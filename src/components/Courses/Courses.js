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
        <h1 className="text-center text-5xl font-bold font-sans">Our Courses</h1>

      <div className="flex w-11/12 mx-auto mt-10">
        <div className="w-2/5">
          <h3 className="text-2xl font-bold mb-4">Course List</h3>
          {courses.map((course) => (
            <Link to ={`/cart-details${course.id}`}>
            <div className="text-xl font-bold"
                key={course.id}>
              {course.name}
            </div></Link>
          ))}
        </div>

        <div className="w-full">
          <CoursesRight></CoursesRight>
        </div>
      </div>
    </div>
  );
};

export default Courses;
