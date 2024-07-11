import React from 'react';
import image1 from '../assets/images/Logo.jpeg';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  const { title, instructions, recipeId } = recipe;

  return (
    <div className='bg-purple-100 rounded-md shadow-2xl flex flex-col items-center justify-center mx-5 my-5 py-10'>
      <h2 className='font-bold text-lg text-purple-900'>{title}</h2>
      <img src={image1} alt="Recipe thumbnail" className='w-80 h-40 mb-2' />
      <p className='text-black mb-4'>{instructions.substring(0, 100)}...</p>
      <Link to={`/recipes/${recipeId}`} className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">
        Learn More
      </Link>
    </div>
  );
};

export default RecipeCard;
