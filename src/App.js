import 'aframe';
import 'aframe-particle-system-component';
import {Entity, Scene} from 'aframe-react'
import Amongus from './components/Amongus';
import Room from './components/Room';
import Shelves from './components/Shelves';
import Sanrio from './components/Sanrio';
import Anime from './components/Anime';
import BananaCat from './components/BananaCat';
import Books from './components/Books';

function App() {
  return (
    <Scene>
      <Room />
        <Shelves />
            <Amongus />
            <Sanrio />
            <Anime />
            <BananaCat/>
            <Books/>
            
    
      <Entity light={{type: 'point'}} position={{x: -0.270, y: 2.147, z: -1.108}}/>
      
    </Scene>
  );
}

export default App;



