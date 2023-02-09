import 'super-hands'
import 'aframe'

function Controls() {
  return (
    <>
        <a-entity laser-controls="hand: right" raycaster="far: 2"></a-entity>
        {/* <a-entity laser-controls="hand: left" raycaster="far: 2"> </a-entity>  */}
    </>
  )
}

export default Controls
