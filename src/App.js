import 'aframe';
import 'aframe-particle-system-component';
import {Entity, Scene} from 'aframe-react'
import Room from './components/Room';
import Controls from './components/Controls';
import ListItems from './components/ListItems';
import ListDecoration from './components/ListDecoration';
import './app.css'
import Item from './components/Item';


function App() {

  // window.AFRAME.registerComponent('limit-my-distance', {
  //   init: function() {
  //       // nothing here
  //   },
  //   tick: function() {
  //     // limit Z
  //     if (this.el.object3D.position.z > 1.5) {
  //       this.el.object3D.position.z = 1.5;
  //     }
  //     if (this.el.object3D.position.z < 1.5) {
  //       this.el.object3D.position.z = -1.5;
  //     }

  //     // limit X
  //     if (this.el.object3D.position.x >1.5) {
  //       this.el.object3D.position.x = 1.5;
  //     }
  //     if (this.el.object3D.position.x < 1.5) {
  //       this.el.object3D.position.x = -1.5;
  //     }

  //   }
  // });


  return (
    <Scene>
      <Room />
      

        <ListItems/>
        <ListDecoration/>



      <Item/>




      <Entity light={{type: 'point'}} position={{x: -0.270, y: 2.147, z: -1.108}}/>

      <Entity id="shelvesCam" position="-0.29 -0.20012 2.883" rotation="0 90 0">
        <a-camera id="camera"></a-camera>
        <Controls/>
      </Entity>
    </Scene>
  );
}

export default App;



