import React from "react";
import { useLoaderData } from "react-router-dom";

const CartDetails = () => {
  const courseDetails = useLoaderData();
  const { url, price, title, details, author } = courseDetails;

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
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      </div>

    </div>
  );
};

export default CartDetails;
