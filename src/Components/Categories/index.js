import React, { useEffect, useState } from 'react'
import FeatureCard from '../FeatureCard';

const Categories = () => {
   
        const [categories, setCategories] = useState([]); // Initialize as an empty array
      
        useEffect(() => {
          const fetchCategories = async () => {
            const response = await fetch('https://fakestoreapi.com/products/categories');
            const data = await response.json();
            console.log(data, 'data'); // For debugging
            setCategories(data);
          };
          fetchCategories();
        }, []); // Only run on mount
      
        if (categories.length === 0) return <div>Loading...</div>
      
        return (
        
            <FeatureCard  cards={categories} />
        );
    };


export default Categories
