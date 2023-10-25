import React, { useState } from "react";
import axios from "axios";

export default function Input({ setPokemon }) {
  const [input, setInput] = useState("");

  const POKEMON_HOST = process.env.REACT_APP_POKEMON_HOST;

  async function getPokemon() {
    try {
      const { data } = await axios.get(`${POKEMON_HOST}/${input}`);
      setPokemon(data);
    } catch (error) {
      alert("Pokemon not found");
    }
  }

  return (
    <div>
      <input type="text" onChange={(e) => setInput(e.target.value)} value={input} />
      <button onClick={getPokemon}>Submit</button>
    </div>
  );
}
