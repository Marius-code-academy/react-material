import React from "react";
import { useSelector } from "react-redux";

export default function Counter() {
  const counter = useSelector((state) => state.counter.value);
  console.log(counter);

  return (
    <div>
      <h3>{counter}</h3>
    </div>
  );
}
