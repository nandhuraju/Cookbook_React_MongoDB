import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateRecipePage = () => {
  const { recipeId } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState({
    title: "",
    ingredients: "",
    instructions: ""
  });

  useEffect(() => {
    const fetchRecipe = async () => {
      const res = await fetch(`/api/recipes/${recipeId}`);
      const data = await res.json();
      setRecipe(data);
    };
    fetchRecipe();
  }, [recipeId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe((prevRecipe) => ({ ...prevRecipe, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`/api/recipes/${recipeId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recipe),
    });
    if (res.ok) {
      navigate(`/recipes/${recipeId}`);
    } else {
      alert("Failed to update recipe");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl mb-4">Update Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={recipe.title}
            onChange={handleChange}
            className="border rounded w-full py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Ingredients</label>
          <textarea
            name="ingredients"
            value={recipe.ingredients}
            onChange={handleChange}
            className="border rounded w-full py-2 px-3"
            rows="4"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Instructions</label>
          <textarea
            name="instructions"
            value={recipe.instructions}
            onChange={handleChange}
            className="border rounded w-full py-2 px-3"
            rows="4"
            required
          />
        </div>
        <button type="submit" className="bg-purple-500 text-white px-4 py-2 rounded">
          Update Recipe
        </button>
      </form>
    </div>
  );
};

export default UpdateRecipePage;
