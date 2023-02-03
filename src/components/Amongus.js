import 'aframe'
import 'aframe-event-set-component'
import { Entity } from 'aframe-react'
import 'super-hands'
import 'aframe'

function Amongus() {

  return (
        <Entity 
          id='amongus'
          gltf-model='./assets/items/item_amongus/scene.gltf' 
          position='-2.801 0.713 2.077' 
          scale='-0.009 0.006 0.009' 
          rotation='0 90 0'
          event-set__enter="_event: mouseenter; scale: 0.010 0.007 0.010"
          event-set__leave="_event: mouseleave; scale: -0.009 0.006 0.009"
          draggable
        />
  )
}

export default Amongus