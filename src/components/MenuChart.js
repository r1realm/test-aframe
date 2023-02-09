import { Entity } from "aframe-react"
import 'aframe'
import 'aframe-event-set-component'


function MenuChart(isOpen) {
  console.log(isOpen);
  return (
    <>
        <Entity
        id='plane'
        geometry='primitive: plane'
        material='color: black; opacity: 0.6'
        scale='1.09535 0.56937 0.5'
        position='-2.47413 1.548 0.64552'
        rotation='0 90 0'
        visible= {`'${isOpen}'`}
        />

        <Entity
        id='addBtn'
        geometry='primitive: circle'
        material='color: lightgreen; opacity: 0.9'
        scale='0.065 0.065 0.065
        '
        position='-2.42 1.404 0.389'
        rotation='0 90 0'
        visible={`'${isOpen}'`}
        />
        <a-text
        id='add' 
        value='+'
        position="-2.42 1.404 0.441"
        rotation='0 90 0'
        width='3'
        visible={`'${isOpen}'`}
        />

        <Entity
        id='removeBtn'
        geometry='primitive: circle'
        material='color: lightgreen; opacity: 0.9'
        scale='0.065 0.065 0.065'
        position='-2.42 1.404 0.223'
        rotation='0 90 0'
        visible={`'${isOpen}'`}
        />
        <a-text 
        id='rem'
        value='-'
        position='-2.42 1.421 0.276'
        rotation='0 90 0'
        visible={`'${isOpen}'`}
        />

        <Entity
        id='chartBtn'
        geometry='primitive: circle'
        // material='color: #d507e4; opacity:0.9'
        scale='0.065 0.065 0.065'
        position='-2.42 1.7 0.234'
        rotation='0 90 0'
        visible={`'${isOpen}'`}
        />
        {/* poner imagen png de carrito */}
        
    </>
  )
}

export default MenuChart