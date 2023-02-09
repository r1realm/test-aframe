import React, { useState} from "react"
import { Entity } from "aframe-react"
import 'aframe'
import 'aframe-event-set-component'
import MenuChart from "./MenuChart"
import BuyMenu from "./BuyMenu"


function Item({data, selected, setSelected}){
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
    
    const [isOpen, setIsOpen] = useState(false)
   
      const handleClick = () => {
        setIsOpen(!isOpen);
        setSelected(data.id)
  };
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
        events={{
          click: () => handleClick(),
      }}
  />
        {/* // event-set__click={`_event: click; _target: #plane; visible: '${isOpen}'`}
        // event-set__click1={`_event: click; _target: #addBtn; visible: '${isOpen}'`}
        // event-set__click2={`_event: click; _target: #removeBtn; visible: '${isOpen}'`}
        // event-set__click3={`_event: click; _target: #chartBtn; visible: '${isOpen}'`}
      /> */}


      <MenuChart isOpen={isOpen} data={data}/>
      <BuyMenu isOpen={isOpen}/>

      { selected === data.id ? (
        <>
      <a-text
      id='title'
      value= {data.name}
      rotation= '0 90 0'
      position="-2.458 1.688 1.12476" 
      scale="0.4 0.4 0.4" 
    
      />
 
      <a-text
      id='price'
      value={data.price} 
      rotation='0 90 0'
      position="-2.458 1.399 0.7" 
      scale='0.4 0.4 0.4'
      />

      <a-text
      id='data'
      value={data.data}
      rotation='0 90 0'
      position='-2.458 1.56663 1.12476' 
      scale='0.4 0.4 0.4'
      width= " 2.42"      />
      </>
      ) : ('')}
      </>
    )
}

export default Item