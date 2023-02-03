import React from 'react'
import { Entity } from 'aframe-react'

function Anime() {
  return (
    <>
        <a-assets>
            <a-asset-item id='higokumaru' src='./assets/anime/anime_higokumaru/scene.gltf'></a-asset-item>
        </a-assets>

        <a-assets>
            <a-asset-item id='magician' src='./assets/anime/anime_magician/scene.gltf'></a-asset-item>
        </a-assets>

        <a-assets>
            <a-asset-item id='momonga' src='./assets/anime/anime_momonga/scene.gltf'></a-asset-item>
        </a-assets>

        <Entity gltf-model='#higokumaru' position='-2.77538 1.36288 2.623' scale='0.028 0.03 0.028' rotation='0 90 0'/>
        <Entity gltf-model='#magician' position='-2.6741 1.57099 2.25362' scale='0.078 0.06 0.098' rotation='0 90 0'/>
        <Entity gltf-model='#momonga' position='-2.88268 2.03748 2.19578' scale='0.002 0.002 0.002' rotation='0 90 0'/>
    </>
  )
}

export default Anime