import React from 'react';
import { Entity } from 'aframe-react';

function Mundo() {

    const AFRAME = window.AFRAME

    AFRAME.registerComponent('modify-materials', {
        init: function () {
          // Wait for model to load.
          this.el.addEventListener('model-loaded', () => {
            // Grab the mesh / scene.
            const obj = this.el.getObject3D('mesh');
            // Go over the submeshes and modify materials we want.
            obj.traverse(node => {
              if (node.name.indexOf('ship') !== -1) {
                node.material.color.set('red');
              }
            });
          });
        }
      });

    return (
        <>
            <a-assets>
                <a-asset-item id='cola' src='./3Dmodels/Can/scene.gltf'/>
            </a-assets>
            
            <Entity gltf-model='#cola' position='0 1.41152 -5' scale='0.01 0.01 0.01' />


            <Entity geometry={{primitive:'box'}} material={{color:'green'}} position={{x:0, y:3, z:-5}}/>
        </>
    )
}

export default Mundo 