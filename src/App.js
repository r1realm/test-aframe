import 'aframe';
import {Scene, Entity} from 'aframe-react'
import Room from './components/Room';
import Controls from './components/Controls';
import ListItems from './components/ListItems';
import ListDecoration from './components/ListDecoration';
import './app.css'
import Ligths from  './components/Lights'


function App() {
  return (
    <Scene background="color: black">
      <Room />
        <ListItems/>
        <ListDecoration/>
        <Ligths />
      <Entity id="shelvesCam" position="-0.29 -0.20012 2.883" rotation="0 90 0">
        <a-camera id="camera"></a-camera>
        <Controls/>
      </Entity>
    </Scene>
  );
}

export default App;



