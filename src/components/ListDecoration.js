import React from 'react'
import ItemsDecoration from '../data/ItemsDecoration'
import { Entity } from 'aframe-react'

function ListDecoration() {
    const item = ItemsDecoration.map((e) => {
      return (
        <Entity
          id={e.id}
          gltf-model={e.ruta}
          position={e.position}
          scale={e.scale}
          rotation={e.rotation}
        />
      )
    })

  return (
    item
  )
}

export default ListDecoration
