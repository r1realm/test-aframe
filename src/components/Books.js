import React from 'react';
import { Entity } from "aframe-react";

function Books() {
  return (
    
      <>
        <a-assets>
          <a-asset-item
            id="books"
            src="./assets/items/item_books/scene.gltf"
          ></a-asset-item>
        </a-assets>

        <Entity
          gltf-model="#books"
          position="-2.581 1.322 3.157"
          scale="0.2 0.2 0.2"
          rotation="0 90 90"
        />
      </>
  );
}

export default Books;

