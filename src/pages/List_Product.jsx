import React from 'react';
import Card from '../components/cards/Card';
import { useAtom } from 'jotai';
import { productsAtom } from '../assets/productAtom';

function List_Product({ categoryFilter }) {
  // Use the productsAtom state from Jotai
  const [products] = useAtom(productsAtom);

  // Filter products based on the selected category
  const filteredProducts = categoryFilter
    ? products.filter(product => product.category === categoryFilter)
    : products;

  return (
    
    <div>
      {/* Create a grid layout for displaying products */}
      <div className="w-3/4 sm:w-full lg:w-2/3 grid lg:grid-cols-3 sm:grid-cols-2 mx-auto space-y-10">
        {/* Map through filtered products and render each Card component */}
        {filteredProducts.map((product) => (
          <div key={product.id}>
            {/* Pass the product data to the Card component */}
            <Card product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default List_Product;
