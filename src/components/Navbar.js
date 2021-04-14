import React from "react";
import { Link } from "react-router-dom";
import shoppingIcon from "./static/shopping-bag.png";

function Navbar() {
  return (
    <div>
      <nav>
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/Shop">Shop</Link>
        </li>
      </nav>
    </div>
  );
}

export default Navbar;
