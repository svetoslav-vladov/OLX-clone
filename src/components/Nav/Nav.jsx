import React from 'react';
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <span>Category</span>
      <Link to="/contacts">Contact Us</Link>
    </nav>
  );
};

export default Nav;