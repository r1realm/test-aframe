import "aframe";
import "aframe-animation-component";
import "aframe-particle-system-component";
import "babel-polyfill";
import { Entity, Scene } from "aframe-react";
import React from "react";
import ReactDOM from "react-dom";
import sky from "./img/boho.png";
import floor from "./img/sky.jpg";
class App extends React.Component {
  render() {
    return (
      <Scene>
        <Entity
          primitive="a-plane"
          src={floor}
          rotation="-90 180 0"
          height="90"
          width="100"
        />
        <Entity
          geometry={{ primitive: "box" }}
          material={{ color: "blue" }}
          position={{ x: 0, y: 0, z: -5 }}
        />
        <Entity
          geometry={{ primitive: "box" }}
          material={{ color: "red" }}
          position={{ x: 1.5, y: 0, z: -5 }}
          scale={{ x: 2, y: 2, z: 2 }}
        />
        <Entity particle-system={{ preset: "rain" }} />
        <Entity light={{ type: "ambient" }} />
        <Entity primitive="a-sky" src={sky} />
      </Scene>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#sceneContainer"));
