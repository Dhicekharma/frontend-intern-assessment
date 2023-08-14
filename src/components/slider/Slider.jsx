import React, { useState } from 'react';

const images = [
  'https://gh.jumia.is/cms/0-Weekly-CP/2023/WK31/Slider/Nasco_ls_d.jpg',
  'https://example.com/image2.jpg',
  'https://example.com/image3.jpg',
  // ... add more image URLs
];

function Slider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="mx-auto sm:mt-10 sm:w-5/6 mt-[100px] mb-10">
      <div className="relative overflow-hidden">
        <div className="text-center text-black font-bold">
          <h1 className="text-2xl md:text-4xl lg:text-5xl py-4">Products of the Week</h1>
        </div>
        {/* Slider images */}
        <img
          className=" lg:w-fit mx-auto lg:h-[400px] relative lg:object-cover object-contain transition-transform duration-300 transform scale-100 hover:scale-105"
          src={images[currentImageIndex]}
          alt={`Slider ${currentImageIndex}`}
        />
        {/* Navigation buttons */}
        <div className=" justify-between my-auto  flex items-center top-1/2 transform -translate-y-1/2">
          <button
            className="w-[30px] a h-[30px] bg-white bg-opacity-50  saturate-150  text-black rounded-full shadow-md mr-4 focus:outline-none hover:bg-opacity-75"
            onClick={prevImage}
          >
            <img src="/Icons/png/previous.png" alt="Previous" />
          </button>

          <button
            className="w-[30px] a h-[30px] bg-white bg-opacity-50 text-black rounded-full shadow-md focus:outline-none hover:bg-opacity-75"
            onClick={nextImage}
          >
            <img src="/Icons/png/next.png" alt="Next" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Slider;
