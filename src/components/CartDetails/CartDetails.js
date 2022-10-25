import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CartDetails = () => {
    const courseDetails = useLoaderData();
    console.log(courseDetails)

    return (
        <div>
            Details
        </div>
    );
};

export default CartDetails;