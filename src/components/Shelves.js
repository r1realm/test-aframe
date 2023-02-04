import React from 'react'
import { Entity } from 'aframe-react';


function Shelves() {
  return (
    <>
        <a-assets>
            <a-asset-item id='shelves' src='./assets/furniture/furniture_shelves/scene.gltf' text="align:center;color:#322342;value:HP;width:50"></a-asset-item>
        </a-assets>

        <Entity gltf-model='#shelves' position='-2.801 0.070 2.717' scale='-0.02 0.015 0.015' rotation='0 90 0'/>
    </>
  )
}

export default Shelves