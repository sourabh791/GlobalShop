

import React, { useEffect, useState } from 'react';
import Hero from '../../Components/Hero';


import Stats from '../../Components/StatCard';
import ProductsCard from '../../Components/ProductCard';
import Categories from '../../Components/Categories';

const Home = () => {
  const [products, setProducts] = useState([]); // Initialize as an empty array

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products?limit=12');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data); // For debugging
        setProducts(data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, []); // Only run on mount

  return (
    <>
      <Hero />
      <Categories/>
      <div className="flex flex-col text-center w-full mt-20">
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">PRODUCTS</h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">MOST POPULAR PRODUCTS</h1>
      </div>
      {
        products.length > 0 
          ? <ProductsCard products={products} /> // Pass the fetched products as a prop
          : <div>Loading...</div> // Loading state
      }
     
      <Stats />
    </>
  );
};

export default Home;


