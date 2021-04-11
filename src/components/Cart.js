import React from "react";
import Image from "./static/ryzenPic.png"

function Cart() {
  return (
    <div className="cartWrapperDiv">
      <p className="endBtn">X</p>
      <div className="nameOfSect">
        <p>Your Shopping Cart</p>
      </div>
      <div className="addedProd">
        <img className="addedProdImg" src={Image}  alt="product for purchase"/>
        <div className="priceDetail">
          <p className="nameOfProd">Ryzen 4500 X</p>
          <div className="quanDiv">
            <button className="reduceProd">-</button>
            <input className="countBox" type="number" min="0" max="10" />
            <button className="addMoreProd">+</button>
          </div>
        </div>
      </div>
      <div className="subTotal">
          <span>Subtotal: </span><p>$<span></span></p>
      </div>
      <button className="checkOut">CHECKOUT</button>
    </div>
  );
}

export default Cart;
