import React from "react";
import { FaStar } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const CartDetails = () => {
  const courseDetails = useLoaderData();
  const { url, price, title, details, author, name, ratings, students } = courseDetails;

  return (
    <div className="w-10/12 mx-auto mt-20">

        <h1 className="text-center text-5xl mb-10 shadow-md p-4">{title}</h1>

      <div >
      <div className="card w-full bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={url}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-3xl">{name}</h2>
          <p className="text-xl font-semibold">{details}</p>
          <p className="font-bold">{author}</p>
          <p className="flex font-bold"><span className="mx-2 ">Ratings: {ratings}</span> <span><FaStar></FaStar></span></p>
          <p className="font-bold">{students}</p>

          <div className="card-actions">
            <button className="btn btn-primary mt-5"><Link to='/checkout'>Go Premium</Link></button>
          </div>
        </div>
      </div>
      </div>

    </div>
  );
};

export default CartDetails;
