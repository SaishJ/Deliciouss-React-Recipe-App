import React from "react";
import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import SearchBar from "./components/SearchBar";

const App = () => {
  return (
    <BrowserRouter>
      <SearchBar />
      <Category />
      <Pages />
    </BrowserRouter>
  );
};

export default App;
