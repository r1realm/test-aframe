import React from 'react'
import { Entity } from 'aframe-react'

function Sanrio() {
  return (
    <>
        <a-assets>
            <a-asset-item id='kuromi' src='./assets/sanrio/sanrio_kuromi/scene.gltf'></a-asset-item>
        </a-assets>

        <a-assets>
            <a-asset-item id='cinamon' src='./assets/sanrio/sanrio_cinnamonroll/scene.gltf'></a-asset-item>
        </a-assets>

        <Entity gltf-model='#kuromi' position='-2.648 2.108 2.623' scale='-0.042 0.060 0.058' rotation='0 90 0'/>
        <Entity gltf-model='#cinamon' position='-2.669 2.027 2.952' scale='0.028 0.050 0.058' rotation='0 90 0'/>
    </>
  )
}

export default Sanrio