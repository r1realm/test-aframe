import React from 'react'
import { Entity } from 'aframe-react'

function Amongus() {
  return (
    <>
        <a-assets>
            <a-asset-item id='amongus' src='./assets/items/item_amongus/scene.gltf'></a-asset-item>
        </a-assets>

        <Entity gltf-model='#amongus' position='-2.801 0.713 2.077' scale='-0.008 0.005 0.008' rotation='0 90 0'/>
    </>
  )
}

export default Amongus