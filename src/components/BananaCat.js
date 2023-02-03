import React from 'react';
import { Entity } from "aframe-react";

function BananaCat() {
  return (
    <>
      <a-assets>
        <a-asset-item
          id="banana_cat"
          src="./assets/items/item_banana_cat/scene.gltf"
        ></a-asset-item>
      </a-assets>

      <Entity
        gltf-model="#banana_cat"
        position="-2.452 0.672 -0.297"
        scale="0.2 0.2 0.2"
        rotation="0 90 -45"
      />
    </>
  );
}

export default BananaCat;
