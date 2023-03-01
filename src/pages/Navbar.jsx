import React from "react";
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";

const Navbar = () => {
  return (
    <nav className="navbar">
      <GiKnifeFork />
      <Link to={"/"}>deliciousss</Link>
    </nav>
  );
};

export default Navbar;
