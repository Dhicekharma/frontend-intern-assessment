import React, { useState } from 'react';
import Categories from '../components/categories/Categories';
import Slider from '../components/slider/Slider';
import List_Product from './List_Product';

function Home() {
  // State to track the selected category
  const [selectedCategory, setSelectedCategory] = useState('');

  // Function to handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <div className="lg:flex">
        {/* Render the Categories component and pass the category selection handler */}
        <Categories onSelectCategory={handleCategorySelect} />
        <div className='lg:w-4/5 mx-auto'>
          <div className="container mx-auto sm:mt-10 lg:mt-[100px]">
            <h1 className="text-3xl font-semibold text-center mb-6">Welcome to Our Store!</h1>
            <p className="text-lg text-center text-gray-600">
              Explore a wide range of products and find the best deals.
            </p>
          </div>
          {/* Render the Slider component */}
          <Slider />
        </div>
      </div>
      
      <div>
        {/* Render the List_Product component and pass the selected category as a filter */}
        <List_Product categoryFilter={selectedCategory} />
      </div> 
    </div>
  );
}

export default Home;
