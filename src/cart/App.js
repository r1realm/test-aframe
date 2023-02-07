import React, { useState } from "react";
// import data from "./data"; This is ItemInfo
import data from "../components/ItemsInfo";

import Header from "./components/Header";
import Main from "./components/Main";
import Basket from "./components/Basket";
import "./App.css";

function App() {
  const { products } = data;
  //reads the products from data array
  const [cartItems, setCartItems] = useState([]);
  //defining the state of each items from the data array

  //DOWN BELOW the onAdd function only adds each items to the basket
  //
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
    //IN THE ELSE PART THE PRODUCT DOES NOT EXIST, WE NEED OT ADD IT.
    //TO ADD THE PRODUCT, WE USE THE SETCARTITEMS VARIABLE AND USE THE
    //ARRAY CONCATINATION AND JOIN IT WITH PRODCUTS AND, SETTING THE QTY PRODUCT AS ONE.
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  //onRemove function has it substracting function of each added items.

  return (
    <div>
      <Header countCartItems={cartItems.length} />
      <div>
        <Main products={products} onAdd={onAdd} />
        <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></Basket>
      </div>
    </div>
  );
}

export default App;
