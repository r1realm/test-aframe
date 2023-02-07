import React from 'react'
import ItemsInfo from './ItemsInfo'
// import Item from './Item'
import { Entity } from 'aframe-react'
import 'aframe'
import 'aframe-event-set-component'

function ListItems() {

  const itemsMap = ItemsInfo.map((e) => {
    return (
      // <Item data={e} />
      // LO QUE ESTA COMENTADO ARRIBA ES COMO QUIERE CARLOS QUE LO HAGAMOS
      <>
        <Entity
         id={e.id} 
         gltf-model={e.ruta} 
         position={e.position} 
         scale={e.scale} 
         rotation={e.rotation} 
         // event-set_click="_event: click; funcion que muestre el entity plane"
        // PONER UN EVENTO AQUI PARA QUE CUANDO SE HAGA CLICK EN UN ITEM SE MUESTRE EL PLANE CON BOTON DE COMPRA Y ACCESO AL CARRITO
        />
        <Entity
        id='plane'
        geometry='primitive: plane'
        material='color: blue; opacity: 0.4'
        scale='1.09535 0.56937 0.5'
        position='-2.47413 1.548 1.194'
        rotation='0 90 0'
        />

        <Entity
        id='addBtn'
        geometry='primitive: circle'
        material='color: lightgreen; opacity: 0.9'
        scale='0.05 0.05 0.05'
        position='-2.42 1.404 0.93'
        rotation='0 90 0'
        />
        <a-text id='add'value="+"></a-text>

        <Entity
        id='removeBtn'
        geometry='primitive: circle'
        material='color: lightgreen; opacity: 0.9'
        scale='0.05 0.05 0.05'
        position='-2.42 1.404 0.8'
        rotation='0 90 0'
        />
        <a-text id='remove' value="-"></a-text>

        <Entity
        id='chartBtn'
        geometry='primitive: circle'
        material='color: #d507e4; opacity:0.9'
        scale='0.05 0.05 0.08'
        position='-2.42 1.7 0.8'
        rotation='0 90 0'
        />
      </>
      )
  })

  return (
    itemsMap
  )
}

export default ListItems