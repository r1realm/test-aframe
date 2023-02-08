import React from 'react'
import { Entity } from 'aframe-react'

function Lights() {
  return (
    <>
      <a-entity id="ligth3rosa" light="type: point; color: #ff00a2; intensity: 1.07" color="rgb(228, 18, 99)" position="-2.92159 0.94775 -0.32773" rotation="-162.61 -106.67 -4.61" scale="0.36 0.09 -1.14"></a-entity>
      <a-entity id="light1blue" light="type: spot; color: #0112f9; decay: 1.4; intensity: 2.34" position="3.55723 1.3264 2.33657" rotation="7.320000000000001 91.21 0.29" scale="0.39 0.05 0.75" visible=""></a-entity>
      <a-entity id="ligth2general" light="type: ambient; decay: 1.44; intensity: 0.110" position="-0.35806 2.31124 -1.17206" rotation="" scale="" visible=""></a-entity>
      <a-entity light="type: point" visible="" id="unnamedlight"></a-entity>
      <a-entity light="angle: 36.15; decay: -1.07; intensity: 0.2; type: spot" id="ligth" rotation="-29.999999999999996 54.02 0" position="-1.71998 3.31193 4.51091"></a-entity>
      <a-entity light="type: spot; angle: 29.48; decay: -1.07; intensity: 0.1" id="ligth-2" rotation="28.6 55 0" position="-1.47278 -0.42046 3.83191"></a-entity>
      <a-entity light="color: #0055ff; intensity: 0.11" id="tv"></a-entity>

    </>
  )
}

export default Lights
