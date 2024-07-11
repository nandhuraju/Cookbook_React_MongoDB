import React from 'react';
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import AddRecipe from "./pages/AddRecipe";
import Homepage from "./pages/Homepage";
import RecipePage from "./pages/RecipePage";  // Importing the new RecipePage
import UpdateRecipePage from "./pages/UpdateRecipePage"; // Importing the new UpdateRecipePage

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import MainLayout from "./layouts/MainLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<IndexPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/" element={<MainLayout />}>
          <Route path="/home" element={<Homepage />} />
          <Route path="/addrecipe" element={<AddRecipe />} />
          <Route path="/recipes/:recipeId" element={<RecipePage />} /> 
          <Route path="/recipes/update/:recipeId" element={<UpdateRecipePage />} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
