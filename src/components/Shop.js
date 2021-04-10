import React from "react";
import RyzenPic from "./static/ryzenPic.png";

function Shop() {
  return (
    <div
      className="appDiv"
      style={{
        height: "100vh",
        backgroundColor: "white",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="shopWrapDiv">
        <div className="sideBarDiv">
          <div>All Products</div>
          <div className="prodListDiv">
            <p>Processors</p>
            <p>Memory</p>
            <p>Motherboard</p>
            <p>Video Cards</p>
            <p>Chassis</p>
          </div>
        </div>
        <div className="shopMainDiv">
          <div className="prodDiv" id="prod1">
            <img className="imageClass" src={RyzenPic}/>
            <p className="productInfoPara">AMD Ryzen 5 5600X</p>
            <p className="productPrice">$299.00</p>
          </div>
          <div className="prodDiv" id="prod2">
            <img className="imageClass" src={RyzenPic} />
            <p className="productInfoPara">AMD Ryzen 7 5800X</p>
            <p className="productPrice">$449.00</p>
          </div>
          <div className="prodDiv" id="prod3">
            <img className="imageClass" src={RyzenPic} />
            <p className="productInfoPara">AMD Ryzen 9 5900X</p>
            <p className="productPrice">$549.00</p>
          </div>
          <div className="prodDiv" id="prod4">
            <img className="imageClass" src={RyzenPic} />
            <p className="productInfoPara">AMD Ryzen 9 5950X</p>
            <p className="productPrice">$799.00</p>
          </div>
        </div>
        </div> {/* className = "shopWrapDiv"  */}
    </div> //className = "appDiv"
  );
}

export default Shop;
