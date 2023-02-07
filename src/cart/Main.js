import React from "react";
import Items from "../components/ItemsInfo";

function Main(props) {
  const { items, onAdd } = props;
  return (
    <main className=" block row-2">
      <h1>Welcome to the e-commerce store!</h1>
      <hr></hr>
      <h2>Products to sell</h2>
      <div className="row">
        {items.map((product) => (
          <Items key={product.id} product={product} onAdd={onAdd} />
        ))}
      </div>
    </main>
  );
}

export default Main;
