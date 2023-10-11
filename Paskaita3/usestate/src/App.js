import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Display from "./components/Display/Display";
import ColorPicker from "./components/ColorPicker/ColorPicker";

function App() {
  const [number, setNumber] = useState(2);
  return (
    <div>
      <ColorPicker />
      <Button text={"Add one"} onClick={() => setNumber((prev) => prev + 1)} />
      <Display number={number} />
      <Button text={"Subtract one"} onClick={() => setNumber((prev) => prev - 1)} />
    </div>
  );
}

export default App;
