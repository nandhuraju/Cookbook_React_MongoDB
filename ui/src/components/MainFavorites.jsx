import React from "react";

const MainFavorites = () => {
  return (
    <div>
      <main className="flex-grow p-4">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Your Favourite Recipes
          </h2>
          <div
            id="results"
            className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          ></div>
        </div>
      </main>
    </div>
  );
};

export default MainFavorites;
