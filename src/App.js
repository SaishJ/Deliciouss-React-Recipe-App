import React from "react";
import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import Navbar from "./pages/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <SearchBar />
      <Category />
      <Pages />
    </BrowserRouter>
  );
};

export default App;
