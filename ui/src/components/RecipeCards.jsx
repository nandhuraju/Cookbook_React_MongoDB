import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";

const RecipeCards = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await fetch("/api/recipes");

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        
        if (Array.isArray(data)) {
          setRecipes(data);
        } else {
          throw new Error("Fetched data is not an array");
        }
      } catch (error) {
        console.error("Error fetching recipes:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchRecipes();
  }, []);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 my-10">
          {recipes.map((rec) => (
            <RecipeCard key={rec.recipeId} recipe={rec} />
          ))}
        </div>
      )}
    </>
  );
};

export default RecipeCards;
