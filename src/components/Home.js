import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div id="homeWrapDiv">
      <p id="mainPara">The Milky Way Galaxy</p>
      <p id="subPara">Now available for preorder, shipping December, 2021.</p>
      <Link to="/Shop">
        <button>SHOP NOW</button>
      </Link>
    </div>
  );
}

export default Home;
