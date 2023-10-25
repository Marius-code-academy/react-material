import { useState } from "react";
import "./App.css";
import Display from "./components/Display/Display";
import Input from "./components/Input/Input";

function App() {
  const [pokemon, setPokemon] = useState({});

  return (
    <div>
      <Display pokemon={pokemon} />
      <Input setPokemon={setPokemon} />
    </div>
  );
}

export default App;
