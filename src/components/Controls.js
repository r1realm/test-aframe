import 'super-hands'
import 'aframe'

function Controls() {
  return (
    <>
        {/* <Entity  id="leftHand" hand-controls="hand: left; handModelStyle: lowPoly; color: #ffcccc"/>
        <Entity id="rightHand" hand-controls="hand: right; handModelStyle: lowPoly; color: #ffcccc"/> */}
        <a-entity   laser-controls="hand: right" raycaster="far: 2"></a-entity>
        <a-entity laser-controls="hand: left" raycaster="far: 2"> </a-entity> 
        {/* <a-entity hand-controls laser-controls raycaster="far: 2"></a-entity> */}
    </>
  )
}

export default Controls
