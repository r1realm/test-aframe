import React from 'react'


function Lights() {
  return (
    <>
      <a-entity id="ligth3rosa" light="type: point; color: #ff00a2; intensity: 1.07" color="rgb(228, 18, 99)" position="-2.92159 0.94775 -0.32773" rotation="-162.61 -106.67 -4.61" scale="0.36 0.09 -1.14"></a-entity>
      <a-entity id="light1blue" light="type: spot; color: #0112f9; decay: 1.4; intensity: 2.34" position="3.55723 1.3264 2.33657" rotation="7.320000000000001 91.21 0.29" scale="0.39 0.05 0.75" visible=""></a-entity>
      <a-entity light="type: point; intensity: 0.68" visible="" id="unnamedlight"></a-entity>
      <a-entity light="angle: 36.15; decay: -1.07; intensity: 0.2; type: spot" id="ligth" rotation="-29.999999999999996 54.02 0" position="-1.71998 3.31193 4.51091"></a-entity>
      <a-entity light="type: spot; angle: 29.48; decay: -1.07; intensity: 0.1" id="ligth-2" rotation="28.6 55 0" position="-1.47278 -0.42046 3.83191"></a-entity>
      <a-entity light="color: #0055ff; intensity: 0.11" id="tv"></a-entity>
      <a-entity light="intensity: 0.1; type: ambient" visible="" id="luzgeneral2"></a-entity>
      <a-entity light="type: spot; angle: 29.48; decay: -1.07; intensity: 0.1" id="ligth-2" rotation="28.6 55 0" position="-1.47278 -0.76451 4.79232"></a-entity>
      <a-entity light="intensity: 0.2; type: spot; shadowCameraVisible: true" id="plantlightt" rotation="-56.77 144.14 0" position="3.41238 7.18529 -7.63275"></a-entity>
     {/* <a-entity id="bigbiglight-3" light="intensity: 0; shadowCameraVisible: true; type: spot" rotation="" visible=""></a-entity> */}
     <a-entity light="intensity: 0.2" id="newlight" visible=""></a-entity>
     <a-entity light="angle: 42.68; color: #002aff; intensity: 0.3; type: spot" id="thebluelight" rotation="-28.86 265.3 -0.56" position="-1.6256 4.19887 1.35553"></a-entity>

    </>
  )
}

export default Lights
