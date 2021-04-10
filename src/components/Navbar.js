import React from "react";
import { Link } from "react-router-dom";
import shoppingIcon from "./static/shopping-bag.png";

function Navbar() {

  let body = document.querySelector("body");
  
  function handleShopPageClick () {
    body.style.backgroundColor = "black";
  }

  return (
    <div>
      <nav>
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li onClick={handleShopPageClick}>
          <Link to="/Shop">Shop</Link>
        </li>
        <li>
          <Link to="/Cart"><img src={shoppingIcon} alt="Cart-Icon"/></Link>
        </li>
      </nav>
    </div>
  );
}

export default Navbar;
