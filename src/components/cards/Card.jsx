import React from "react";
import { Link } from "react-router-dom";

function Card({ product }) {
  return (
    <div className="shadow-xl w-[300px] mx-auto pb-5 h-[430px]">

      {/* Product Card */}
      <div className="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
        {/* Product Image */}
        <img
          className="object-contain w-full h-[200px]"
          src={product.images[0]}
          alt="Product"
        />
      </div>

      {/* Card Details */}
      <div className="p-5">
        <p className="text-gray-500 mb-2">
          Brand: {product.brand}
        </p>
        <p className="text-gray-500 mb-2">
          Category: {product.category}
        </p>
        <p className="text-gray-500">
          {product.stock} left
        </p>
        
        {/* Card Title or Product Name */}
        <h3 className="text-gray-900 font-semibold text-lg mt-3 dark:text-white">
          {product.title}
        </h3>

        {/* Product Price */}
        <div className="flex items-center justify-between mt-4">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            ${product.price}
          </span>

          {/* Link to view product detail */}
          <Link
            to={`/products/${product.id}`}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 shadow-lg  focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
