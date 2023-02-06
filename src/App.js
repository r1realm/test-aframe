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
      <Controls/>
      
        <ListItems/>
        <ListDecoration/>
    
      <Entity light={{type: 'point'}} position={{x: -0.270, y: 2.147, z: -1.108}}/>
      
    </Scene>
  );
}

export default App;



