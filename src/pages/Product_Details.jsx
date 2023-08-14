import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { itemAtom } from '../assets/itemAtom';
import { useAtom } from 'jotai';

function Product_Details() {
  // Extract the "id" parameter from the URL
  const { id } = useParams();

  // Use the itemAtom state from Jotai
  const [item, setItem] = useAtom(itemAtom);

  // State to track loading state
  const [loading, setLoading] = useState(true);

  // Construct the URL for fetching product details
  const url = `https://dummyjson.com/products/${id}`;

  // Fetch product details from the API when the component mounts or "id" changes
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setItem(data); // Update the itemAtom state with fetched data
        setLoading(false); // Data fetching is complete
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        alert(error);
      });
  }, [id, setItem]); // Dependencies: "id" and "setItem"

  // State variables for price and delivery cost
  const [price, setPrice] = useState(79.00);
  const [delivery, setDelivery] = useState(12.00);

  return (
    <div className='mt-[100px] w-2/3 p-8 mx-auto rounded-lg shadow-lg'>
      {loading ? (
        <div>Loading...
        
      </div>) : (
        <>
          <div className='flex justify-center'>
            <img
              className='w-[500px] object-cover'
              src={item.images[0]}
              alt="Product"
            />
          </div>
          <div className='mt-8'>
            <h1 className='text-3xl font-semibold'>{item.title}</h1>
            <p className='text-gray-600'>Brand: {item.brand}</p>
            <p className='mt-4'>Description: {item.description}</p>
            <div className='mt-6'>
              <p className='text-xl font-semibold text-green-600'>
                ${item.price.toFixed(2)}
              </p>
              <p className='text-sm text-gray-500'>+ ${delivery.toFixed(2)} delivery</p>
              <p className='text-xl font-semibold mt-2'>
                Total: ${(item.price + delivery).toFixed(2)}
              </p>
              <p className='text-sm mt-2'>Rating: {item.rating} out of 5</p>
            </div>
            <div className='mt-6'>
              <Link
                to='/CheckOut'
                className='bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md'
              >
                ADD TO CART
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Product_Details;
