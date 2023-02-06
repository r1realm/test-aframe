import { Entity } from 'aframe-react'
import React from 'react'
import 'aframe'
import 'aframe-event-set-component'

function Item(props) {




  return (
    <>
        <Entity 
        id='plane'
        geometry='primitive: plane' 
        material='color: blue; opacity: 0'
        position="-2.44946 1.02015 2.06953" 
        rotation="0 90 0" 
        scale='0.5 0.528 0.5'
        event-set__enter="_event: mouseenter; material.opacity: 0.6"
        event-set__leave="_event: mouseleave; material.opacity: 0"
        ></Entity>
    </>
  )
}

export default Item