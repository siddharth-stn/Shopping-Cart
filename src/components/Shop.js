import React, { useEffect, useState } from "react";
import RyzenPic from "./static/ryzenPic.png";

function Element(props) {
  // function to create the cart element and inside this function is the function to create the cartitems element also
  let itemsArray = props.itemsArray;

  function handleInputOnChange(e) {
    if (e.target.value > 10) {
      e.target.value = 10;
    } else if (e.target.value < 1) {
      e.target.value = 1;
    }
  }

  function CreatedItem(item, index) {
    //function to create the items in the cart
    return (
      <div className="addedProd" key={index + 1}>
        <p>{index + 1}.</p>
        <img
          className="addedProdImg"
          src={item.image.src}
          alt="the added product for purchase"
        />
        <div className="priceDetail">
          <p className="nameOfProd">
            {item.nameOfProd.innerText} (
            <span className="rate">{item.ratePerPiece.innerHTML}</span>)
          </p>
          <div className="quanDiv">
            <button className="reduceProd">-</button>
            <input
              className="countBox"
              type="number"
              min="1"
              max="10"
              defaultValue="1"
              onChange={handleInputOnChange}
            />
            <button className="addMoreProd">+</button>
          </div>
        </div>
      </div>
    );
  } // function CreateItem Ends here //

  // let totalPrice = 0;
  let DisplayArray = [];

  itemsArray.forEach((item, index) => {
    DisplayArray.push(CreatedItem(item, index));
  }); // final array to be displayed as an element is created here

  return (
    <div className="cartWrapperDiv">
      <p className="endBtn">X</p>
      <div className="nameOfSect">
        <p>Your Shopping Cart</p>
      </div>
      {DisplayArray}
      {/* This DisplayArray is created by calling the function createdItems with the push method */}
      <div className="subTotal">
        <span>Subtotal: </span>
        <p>
          $<span> </span>
        </p>
      </div>
      <button className="checkOut">CHECKOUT</button>
    </div>
  );
} // function to create cart element Ends here

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX//

/* Adding event Listeners to add and remove button of the cart in the global scope 
to make sure event listeners must not have multiple registers on component re renders*/

window.addEventListener("click", (event) => {
  if (event.target.className === "addMoreProd") {
    event.target.previousElementSibling.value++;
  } else if (event.target.className === "reduceProd") {
    event.target.nextElementSibling.value--;
  }
});

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX//
// Main Function of the Shop Component ------>>
function Shop() {
  const [cartItemsList, setCartItems] = useState([]);

  function handleClick(e) {
    e.preventDefault();
    let target = e.target.parentNode;
    let image = target.children[0];
    let nameOfProd = target.children[1];
    let ratePerPiece = target.children[2];

    let itemChoice = {
      target,
      image,
      nameOfProd,
      ratePerPiece,
    };

    var doNotInclude = cartItemsList.map((element) => {
      if (element.target.id !== itemChoice.target.id) {
        return itemChoice;
      } else return false;
    });

    if (doNotInclude) {
      if (!doNotInclude.includes(false)) {
        setCartItems((oldArray) => {
          return [...oldArray, itemChoice];
        });
      }
    }
  }
  const Cart = () => {
    // function called to make the cart
    if (cartItemsList.length !== 0) {
      return <Element itemsArray={cartItemsList} />; //Element is JSX element that renders/appends the Cart Components to the Shop Page
    }
  };

  useEffect(() => {
    let chosenProductsArray = Array.from(
      document.getElementsByClassName("addedProd")
    );
    if (chosenProductsArray.length > 0) {
      let price = [];
      chosenProductsArray.forEach((item, index) => {
        let itemRate = Number(
          item.children[2].children[0].children[0].innerHTML.slice(1)
        );
        let quantity = Number(item.getElementsByClassName("countBox")[0].value);
        price[index] = itemRate * quantity;
      });

      let totalCost = 0;
      price.forEach((item) => {
        totalCost += item;
      });
      let subTotalDiv = document.getElementsByClassName("subTotal")[0];
      subTotalDiv.innerHTML = `Subtotal: $ ${totalCost}`;
    }
  }, [cartItemsList]);

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
      {/* className = "appDiv" End */}
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
          <a href="#prod1" onClick={handleClick}>
            <div className="prodDiv" id="prod1">
              <img className="imageClass" src={RyzenPic} alt="choose product" />
              <p className="productInfoPara">AMD Ryzen 5 5600X</p>
              <p className="productPrice">$299.00</p>
            </div>
          </a>
          <a href="#prod2" onClick={handleClick}>
            <div className="prodDiv" id="prod2">
              <img className="imageClass" src={RyzenPic} alt="choose product" />
              <p className="productInfoPara">AMD Ryzen 7 5800X</p>
              <p className="productPrice">$449.00</p>
            </div>
          </a>
          <a href="#prod3" onClick={handleClick}>
            <div className="prodDiv" id="prod3">
              <img className="imageClass" src={RyzenPic} alt="choose product" />
              <p className="productInfoPara">AMD Ryzen 9 5900X</p>
              <p className="productPrice">$549.00</p>
            </div>
          </a>
          <a href="#prod4" onClick={handleClick}>
            <div className="prodDiv" id="prod4">
              <img className="imageClass" src={RyzenPic} alt="choose product" />
              <p className="productInfoPara">AMD Ryzen 9 5950X</p>
              <p className="productPrice">$799.00</p>
            </div>
          </a>
        </div>
      </div>
      {/* className = "shopWrapDiv"  */}
      {Cart()} {/* Render the Cart Component in the shop component*/}
    </div> //className = "appDiv"
  );
}

export default Shop;
