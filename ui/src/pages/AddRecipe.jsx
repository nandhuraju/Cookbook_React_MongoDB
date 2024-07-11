import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddRecipe = () => {
  const [recipeId, setRecipeId] = useState("");
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    const newRecipe = {
      recipeId,
      title,
      ingredients,
      instructions,
    };

    addRecipeSubmit(newRecipe);
    toast.success("New recipe added");
    navigate("/home");
  };

  const addRecipeSubmit = async (newRecipe) => {
    const res = await fetch("/api/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecipe),
    });
    return res;
  };

  return (
    <div>
      <section class="bg-white mb-20">
        <div class="container m-auto max-w-2xl py-2">
          <div class="bg-purple-100 px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
            <form onSubmit={submitForm}>
              <h2 class="text-3xl text-purple-800 text-center font-semibold mb-6">
                Add Recipe
              </h2>

              <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2">
                  Recipe Id
                </label>
                <input
                  type="text"
                  id="recipeId"
                  name="recipeId"
                  class="border rounded w-full py-2 px-3 mb-2"
                  placeholder="eg. 1"
                  required
                  value={recipeId}
                  onChange={(e) => setRecipeId(e.target.value)}
                />
              </div>

              <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2">
                  Recipe Name
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  class="border rounded w-full py-2 px-3 mb-2"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2">
                  Ingredients
                </label>
                <input
                  type="text"
                  id="ingredients"
                  name="ingredients"
                  class="border rounded w-full py-2 px-3 mb-2"
                  required
                  value={ingredients}
                  onChange={(e) => setIngredients(e.target.value)}
                />
              </div>

              <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2">
                 Instructions
                </label>
                <input
                  type="text"
                  id="instructions"
                  name="instructions"
                  class="border rounded w-full py-2 px-3 mb-2"
                  required
                  value={instructions}
                  onChange={(e) => setInstructions(e.target.value)}
                />
              </div>

              <div>
                <button
                  class="bg-purple-500 hover:bg-purple-600 my-10  text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Add Recipe
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddRecipe;
