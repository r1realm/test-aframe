import 'aframe';
import 'aframe-particle-system-component';
import {Entity, Scene} from 'aframe-react'
import Room from './components/Room';
import Controls from './components/Controls';
import ListItems from './components/ListItems';
import ListDecoration from './components/ListDecoration';
import './app.css'
import Ligths from  './components/Lights'


function App() {
  return (
    <Scene>
      <Room />
      <Controls/>
        <ListItems/>
        <ListDecoration/>
        <Ligths />
    </Scene>
  );
}

export default App;



