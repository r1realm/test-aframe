import 'aframe';
import 'aframe-particle-system-component';
import {Entity, Scene} from 'aframe-react'
import Mundo from './components/Mundo';

function App() {
  return (
    <Scene>
      <Mundo />

      <Entity light={{type: 'point'}}/>
      <Entity geometry={{primitive:'box'}} material={{color:'red'}} position={{x:0, y:0, z:-5}}/>
    </Scene>
  );
}

export default App;



