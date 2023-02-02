import "aframe";
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';
import 'aframe-particle-system-component';

function Mundo() {
    return (
        <Scene>
            <Entity 
            id="menty" 
            geometry={{primitive: 'box'}} 
            material={{color: 'lightgreen'}} 
            position={{x: 0, y: 0, z: -5}}
            rotation={{x: 0, y: 50, z: 0}}
            scale={{x: 2, y: 5, z:2}}
            />
        </Scene>
    )
}

export default Mundo 