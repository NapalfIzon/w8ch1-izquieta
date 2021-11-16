import { useEffect, useState } from "react";

export default function Pokemon() {
  const pokeApi = "https://pokeapi.co/api/v2/";
  const [pokemons, setPokemons] = useState([]);

  useEffect(
    () =>
      (async () => {
        const response = await fetch(`${pokeApi}pokemon?limit=10&offset=0`);
        const pokemonList = await response.json();
        setPokemons(pokemonList.results);
      })(),
    []
  );

  return (
    <ul className="pokemon-list">
      {pokemons.map((pokemon) => (
        <li key={pokemon.name} className="pokecontainer">
          <div className="pokemon-name">
            <h3 className="pokecontainer__name">
              #{pokemon.url.slice(-3, -1).replace("/", "")} -{" "}
              {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </h3>
          </div>
        </li>
      ))}
    </ul>
  );
}
