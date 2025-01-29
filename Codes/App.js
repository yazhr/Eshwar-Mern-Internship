import logo from './logo.svg';
import './App.css';
import {Rough} from './rough.js';
// import { Parent } from './parent1.js';
import Array from './array2.js';
import Apps from './spreed.js';
import { ParentComponent } from './parent1.js';
import { ChildComponent } from './child1.js';
import { Grandparentcomponent } from './grandparent.js';
import Cart from './cart.js';
import { Timer } from './useeffectitem.js';
function App() {
  return (
    <div>
      {/* <Rough product name = 'cpu' product 
      id = '32' product Price = '2000'/>  
      <Rough product name = 'lap' product id = '40' product Price = '5000'/>   */}
      {/* <Parent/> */}
      {/* <Grandparentcomponent/> */}

      <Timer/>
    </div>
  );
}

export default App;