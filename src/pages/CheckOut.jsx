import { useAtom } from 'jotai';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { itemAtom } from '../assets/itemAtom';

function CheckOut() {
  // Use the itemAtom state from Jotai
  const [item,setItem] = useAtom(itemAtom);
console.log(item)
  // State variables to manage count, price, delivery, name, rating, and description
  const [count, setCount] = useState(0);

  return (
    <div className='my-[120px] lg:w-3/4 mx-auto  flex-col '>
      <h1 className='font-bold text-[20px] pl-40 border-b-2'>Cart</h1>
      <div className='lg:flex'>
        <div className='shadow-lg w-fit'>
          <img className='lg:w-[300px] w-[400px]' src={item.images[0]} alt="" />
        </div>
        <div className='lg:w-[50%] px-11'>
          <h1 className='font-extrabold text-[30px] '>{item.title}</h1>
          <h1>{item.description}</h1>
          <button className='hover:bg-slate-300 px-2 shadow-lg border-gray-900 border rounded-xl min-w-[100px] text-[15px] font-bold'>
            Remove From Cart
          </button>
        </div>
        <div className='px-11 space-y-4'>
          <p className='text-[30px] font-bold text-green-600'>
            ${item.price}
          </p>
          <div className='flex items-center'>
            <button
              className='p-2 mx-3 bg-gray-900 text-white font-extrabold text-lg rounded-xl'
              onClick={() => setCount(count + 1)}
            >
              +
            </button>
            <p className='p-2 rounded-lg shadow-gray-900 shadow-md border text-white bg-gray-200'>
              items: {count}
            </p>
            <button
              className='p-2 mx-3 w-9 bg-gray-900 text-white font-extrabold text-lg rounded-xl'
              onClick={() => setCount(count - 1)}
            >
              -
            </button>
          </div>
          <form className='mt-3 space-y-5' action="">
            <input
              className='shadow-lg border rounded-md h-[50px]'
              type="tel"
              name="tel_number"
              id=""
              required
              placeholder='Enter number to checkout'
            />
            <Link to={'/checkOut_success'}>
              <button className='bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md' type="submit">
                Check Out
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
