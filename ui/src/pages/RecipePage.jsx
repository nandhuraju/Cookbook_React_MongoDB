import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import image1 from '../assets/images/Logo.jpeg';

const RecipePage = () => {
  const { recipeId } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      const res = await fetch(`/api/recipes/${recipeId}`);
      const data = await res.json();
      setRecipe(data);
    };
    fetchRecipe();
  }, [recipeId]);

  const deleteRecipe = async () => {
    const confirm = window.confirm('Delete this recipe?');
    if (!confirm) return;
    const res = await fetch(`/api/recipes/${recipeId}`, { method: 'DELETE' });
    if (res.ok) {
      navigate('/home');
    } else {
      alert('Failed to delete the recipe');
    }
  };

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className='container mx-auto p-4'>
      <h2 className='text-3xl mb-4'>{recipe.title}</h2>
      <img src={image1} alt="Recipe thumbnail" className='w-80 h-40 mb-4' />
      <p className='mb-4'><strong>Ingredients:</strong> {recipe.ingredients}</p>
      <p className='mb-4'><strong>Instructions:</strong> {recipe.instructions}</p>
      <button onClick={() => navigate(`/recipes/update/${recipeId}`)} className="bg-purple-500 text-white px-4 py-2 rounded mr-2">
        Update Recipe
      </button>
      <button onClick={deleteRecipe} className="bg-red-500 text-white px-4 py-2 rounded">
        Delete Recipe
      </button>
    </div>
  );
};

export default RecipePage;
