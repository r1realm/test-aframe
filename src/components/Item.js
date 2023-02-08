import { Entity } from "aframe-react"
import { useState, useEffect } from "react"
import 'aframe'
import 'aframe-event-set-component'

function Item({data}){

    const [open, setOpen] = useState(false)





    let scale = data.scale

    const normalizedString = (obj) => {
      let result = obj.split(' ').map(e => {
        return parseFloat(e)
      })
      let scalesNormalized = {
        x: scale[0],
        y: scale[1],
        z: scale[2]
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
    let transformedData = transformScale(newScale, 1, 1, 1)
    // let dataToString = Object.values(transformedData).join(' ')
    let dataToString = `${transformedData.x} ${transformedData.y} ${transformedData.z}`


    return (
      <>
        <Entity
         id={data.id} 
         gltf-model={data.ruta} 
         position={data.position} 
         scale={data.scale} 
         rotation={data.rotation} 
         event-set__mouseenter={`_event: mouseenter; scale: ${dataToString}`}
        // PONER UN EVENTO AQUI PARA QUE CUANDO SE HAGA CLICK EN UN ITEM SE MUESTRE EL PLANE CON BOTON DE COMPRA Y ACCESO AL CARRITO
        />
        <Entity
        id='plane'
        geometry='primitive: plane'
        material='color: blue; opacity: 0.4'
        scale='1.09535 0.56937 0.5'
        position='-2.47413 1.548 1.194'
        rotation='0 90 0'
        visible='false'
        />

        <Entity
        id='addBtn'
        geometry='primitive: circle'
        material='color: lightgreen; opacity: 0.9'
        scale='0.05 0.05 0.05'
        position='-2.42 1.404 0.93'
        rotation='0 90 0'
        visible='false'
        />

        <Entity
        id='removeBtn'
        geometry='primitive: circle'
        material='color: lightgreen; opacity: 0.9'
        scale='0.05 0.05 0.05'
        position='-2.42 1.404 0.8'
        rotation='0 90 0'
        visible='false'
        />

        <Entity
        id='chartBtn'
        geometry='primitive: circle'
        material='color: #d507e4; opacity:0.9'
        scale='0.05 0.05 0.08'
        position='-2.42 1.7 0.8'
        rotation='0 90 0'
        visible='false'
        />
      </>
    )
}

export default Item