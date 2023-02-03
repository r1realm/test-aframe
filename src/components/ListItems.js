import React from 'react'
import { Entity } from 'aframe-react'
import Items from './ItemsInfo'

function ListItems() {

  const item = Items.map((e) => {
    return(
      <Entity
      id = {e.id}
      gltf-model = {e.ruta}
      position = {e.position}
      scale = {e.scale}
      rotation = {e.rotation}
      />
    )
  })
  
  return (
    item
  )
}

export default ListItems