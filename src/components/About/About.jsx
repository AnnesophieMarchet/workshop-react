import { useRouteLoaderData } from "react-router-dom";
import Pokemon from "./Pokemon";
// import { useEffect, useState } from "react";

export default function About() {
  const pokemonsData = useRouteLoaderData("Pokecard");
  // const [pokemons, setPokemons] = useState([]);

  // useEffect(() => {
  //   setPokemons(pokemonsData);
  // }, [pokemonsData]);

  console.log(pokemonsData);
  return (
    <>
      <div>Je suis About </div>
      <h1>Je suis le titre</h1>
      <div>
        {pokemonsData.map((pokemon) => (
          <div key={pokemon.id}>
            <Pokemon data={pokemon} />
          </div>
        ))}
      </div>
    </>
  );
}
