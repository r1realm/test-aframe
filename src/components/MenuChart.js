import { Entity } from "aframe-react"
import 'aframe'
import 'aframe-event-set-component'


function MenuChart(data) {

  return (
    <>
        <Entity
        id='plane'
        geometry='primitive: plane'
        material='color: blue; opacity: 0.6'
        scale='1.09535 0.56937 0.5'
        position='-2.47413 1.548 1.194'
        rotation='0 90 0'
        // visible={`${props.isOpen}`}
      
        />
        <a-text
        position='-2.474 1.548 1.194'
        rotation='0 90 0'
        value= {data.data}
        >
        </a-text>

        <Entity
        id='addBtn'
        geometry='primitive: circle'
        material='color: lightgreen; opacity: 0.9'
        scale='0.05 0.05 0.05'
        position='-2.42 1.404 0.93'
        rotation='0 90 0'
        // visible='false'
        />

        <Entity
        id='removeBtn'
        geometry='primitive: circle'
        material='color: lightgreen; opacity: 0.9'
        scale='0.05 0.05 0.05'
        position='-2.42 1.404 0.8'
        rotation='0 90 0'
        // visible='false'
        />

        <Entity
        id='chartBtn'
        geometry='primitive: circle'
        material='color: #d507e4; opacity:0.9'
        scale='0.05 0.05 0.08'
        position='-2.42 1.7 0.8'
        rotation='0 90 0'
        // visible='false'
        />
    </>
  )
}

export default MenuChart