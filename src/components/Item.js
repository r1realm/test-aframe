import React, { useState} from "react"
import { Entity } from "aframe-react"
import 'aframe'
import 'aframe-event-set-component'
import MenuChart from "./MenuChart"


function Item({data}){
    let scale = data.scale

    const normalizedString = (obj) => {
      let result = obj.split(' ').map(e => {
        return parseFloat(e)
      })
      let scalesNormalized = {
        x: result[0],
        y: result[1],
        z: result[2]
      }
      return scalesNormalized
    }

    const transformScale = (initialScale, x, y, z) => {
      x = x?x:1
      y = y?y:1
      z = z?z:1
      let finalScale = {
        x: initialScale.x*x,
        y: initialScale.y*y,
        z: initialScale.z*z
      }
      return finalScale
    }

    let newScale = normalizedString(scale)
    let transformedData = transformScale(newScale, 1.05, 1.05, 1.05)
    let dataToString = Object.values(transformedData).join(' ')

    const [isOpen, setIsOpen] = useState('true')

    return (
      <>
      <Entity
        id={data.id} 
        gltf-model={data.ruta} 
        position={data.position} 
        scale={data.scale} 
        rotation={data.rotation} 
        event-set__mouseenter={`_event: mouseenter; scale: ${dataToString}`}
        event-set__mouseleave={`_event: mouseleave; scale: ${scale}`}
        // event-set__click={`_event: click; _target: #plane; visible: ${isOpen}`}

        // event-set__click='_event: click; _target: #plane; visible: true'
        // event-set__click1='_event: click; _target: #addBtn; visible: true'
        // event-set__click2='_event: click; _target: #removeBtn; visible: true'
        // event-set__click3='_event: click; _target: #chartBtn; visible: true'
      />
      {/* <MenuChart isOpen={isOpen}/> */}
      <MenuChart data={data} />
      </>
    )
}

export default Item