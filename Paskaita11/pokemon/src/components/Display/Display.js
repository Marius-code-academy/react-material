import React from "react";

export default function Display({ pokemon }) {
  return (
    <div>
      {pokemon.sprites ? (
        <>
          <p>{pokemon.name}</p>
          <p>{pokemon.types.map((type) => type.type.name).join(", ")}</p>
          <img src={pokemon.sprites.other.dream_world.front_default} alt="" />
          <p>{pokemon.weight}</p>
          <p>{pokemon.height}</p>
        </>
      ) : (
        <p>Nera</p>
      )}
    </div>
  );
}
