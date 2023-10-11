import React, { useState } from "react";
import Text2 from "../Text2/Text2";

export default function Text() {
  const [number, setNumber] = useState(10);
  const [text, setText] = useState("Hello");

  function buttonHandler() {
    setNumber((prev) => prev + 1);
    setText("asdfasdf");
  }

  return (
    <div>
      {number}
      <button onClick={buttonHandler}>Click me</button>
      <Text2 text={text} />
    </div>
  );
}
