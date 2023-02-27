import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiIndiaGate, GiChopsticks } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Category = () => {
  return (
    <div className="category-list">
      <NavLink className="category-link" to={"/cuisine/Indian"}>
        <GiIndiaGate />
        <h4>Indian</h4>
      </NavLink>
      <NavLink className="category-link" to={"/cuisine/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </NavLink>
      <NavLink className="category-link" to={"/cuisine/American"}>
        <FaHamburger />
        <h4>American</h4>
      </NavLink>
      <NavLink className="category-link" to={"/cuisine/Japanese"}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </NavLink>
    </div>
  );
};

export default Category;
