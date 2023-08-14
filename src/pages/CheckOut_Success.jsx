import React from 'react';
import { Link } from 'react-router-dom';

function CheckOut_Success() {
  return (
    <div className='mt-[100px] b'>
      {/* Display success message and continue shopping button */}
      <div className='flex flex-col justify-center items-center h-screen'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-24 w-24 text-green-500 mb-4'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M5 13l4 4L19 7'
          />
        </svg>
        <h1 className='text-2xl font-semibold mb-2'>Payment Successful</h1>
        <p className='text-gray-600'>
          Your payment has been successfully processed.
        </p>
        <Link to={'/'}>
          <button className='bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 mt-6 transition duration-300'>
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CheckOut_Success;
