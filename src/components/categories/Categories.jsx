import React from 'react';
import { Link } from 'react-router-dom';
import { useAtom } from 'jotai';
import { productsAtom } from '../../assets/productAtom';

function Categories({ onSelectCategory }) {
  const [products] = useAtom(productsAtom);

  // Handler for when a category is clicked
  const handleCategoryClick = (category) => {
    onSelectCategory(category);
  };

  // Extract unique categories from products
  const uniqueCategories = Array.from(
    new Set(products.map((product) => product.category))
  );

  return (
    <div className=" shadow-md lg:w-1/5 p-4 mt-[100px] rounded-md h-fit ml-3 items-center justify-center">
      {/* Categories header */}
      <h1>Categories</h1>
      
      {/* Search form */}
      <form className="flex relative mt-4">
        <input
          placeholder="Search Item"
          required
          type="text"
          className="flex-grow w-3/3 h-10 px-4 mb-3 transition duration-200 bg-white hover:border border-gray-300 rounded shadow-md appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
        />
        <button
          type="submit"
          className="bg-gray-300 inline-flex items-center justify-center h-10 px-2 rounded shadow-md"
        >
          <img
            className="w-[20px]"
            src="/Icons/gif/magnifying-glass.gif"
            alt=""
          />
        </button>
      </form>
      
      {/* Category list */}
      <ul className=" items-start  lg:flex-col md:flex hidden justify-between mt-4">
        {/* All Category */}
        <li
          className="p-1 rounded-lg bg-white tracking-wider flex lg:flex-row sm:flex-col text-base font-thin items-center justify-center cursor-pointer"
          onClick={() => handleCategoryClick('')}
        >
          <img
            className="w-[30px] mr-2"
            src="/Icons/gif/supermarket.gif"
            alt="All Category"
          />
          <Link to="">All</Link>
        </li>

        {/* Unique categories */}
        {uniqueCategories.map((category) => (
          <li
            key={category}
            className="p-1 rounded-lg bg-white tracking-wider flex lg:flex-row sm:flex-col text-base font-thin items-center justify-center cursor-pointer"
            onClick={() => handleCategoryClick(category)}
          >
            <img
              className="w-[30px] mr-2"
              src={`/Icons/gif/${category}.gif`}
              alt={category}
            />
            <Link to="">{category}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
