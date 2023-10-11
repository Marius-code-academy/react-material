import React, { useState } from "react";

export default function ColorPicker() {
  const [color, setColor] = useState("red");
  console.log("Color picker rendered");
  return (
    <div>
      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("blue")}>Blue</button>
      <button onClick={() => setColor("green")}>Green</button>
      <div style={{ backgroundColor: color }}>Hello</div>
    </div>
  );
}
