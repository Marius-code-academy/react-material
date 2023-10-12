import { useState } from 'react';
import './App.css';
import UserList from './components/UserList/UserList';

function App() {
  // const [isRendering, setIsRendering] = useState(false);

  // if (isRendering) {
  //   return (
  //     <div>
  //       <h1>Labas</h1>
  //     </div>
  //   )
  // }


  return (
    <div>
      {/* {
        isRendering ? <h1>is Rendering yra true</h1> : <h1>is Rendering yra false</h1>
      }
      {
        [<h1>pirmas</h1>, <h2>Antras</h2>, 'asdf', 62 ]
      }
      <h1>Viso gero</h1>
      <button onClick={() => setIsRendering((prev) => !prev)}>Toggle</button> */}
      <UserList />
    </div>
  );
}

export default App;
