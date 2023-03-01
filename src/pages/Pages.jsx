import React from "react";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Cuisine from "./Cuisine";
import SearchFeed from "./SearchFeed";
import RecipeDetail from "./RecipeDetail";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
      <Route path="/search/:searchTerm" element={<SearchFeed />} />
      <Route path="/recipe/:id" element={<RecipeDetail />} />
    </Routes>
  );
};

export default Pages;
