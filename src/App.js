import 'aframe';
import 'aframe-particle-system-component';
import {Entity, Scene} from 'aframe-react'
import Room from './components/Room';
import Controls from './components/Controls';
import ListItems from './components/ListItems';
import ListDecoration from './components/ListDecoration';
import './app.css'


function App() {
  return (
    <Scene>
      <Room />
      

        <ListItems/>
        <ListDecoration/>
    
      <Entity light={{type: 'point'}} position={{x: -0.270, y: 2.147, z: -1.108}}/>

      <Entity id="shelvesCam" position="-0.29 -0.20012 2.883" rotation="0 90 0"cd d>
        <a-camera id="camera"></a-camera>
        <Controls/>
      </Entity>
    </Scene>
  );
}

export default App;



