import 'super-hands'
import 'aframe'

function Controls() {
  return (
    <>
        <a-entity laser-controls="hand: right" raycaster="far: 2" hand-tracking-controls="hand: right;"></a-entity>
        <a-entity laser-controls="hand: left" raycaster="far: 2" hand-tracking-controls="hand: left"> </a-entity> 
    </>
  )
}

export default Controls
