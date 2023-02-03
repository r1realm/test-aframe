import React from 'react';
import { Entity, Scene } from "aframe-react";
import "aframe-particle-system-component";
import "aframe";

function Test() {
  return (
    <div>
      <Scene>
        <Entity
          id="rain"
          particle-system={{preset: "rain", color: "#24CAFF", particleCount: 5000}}
        ></Entity>

        <Entity
          id="sphere"
          geometry={{primitive: "sphere"}}
          material={{color: "#EFEFEF", shader: "flat"}}
          position={{x:0, y:0.15, z:-5}}
          light={{type: "point", intensity: "5"}}
          animation={{property: "position", easing: "easeInOutQuad", dir: "alternate", dur:1000, to: 0 -0.10 -5, loop: true}}
        ></Entity>
      </Scene>
    </div>
  );
}

export default Test;
