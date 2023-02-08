import { Entity } from "aframe-react"
import { useState, useEffect } from "react"

function Item({data}){

    const [open, setOpen] = useState(false)

    return (
        <>
        <Entity
          id={data.id}
          gltf-model={data.ruta}
          position={data.position}
          scale={data.scale}
          rotation={data.rotation}
        ></Entity>
        {
          open ? <Entity  ></Entity> : <></>
        }
      </>
    )
}

export default Item