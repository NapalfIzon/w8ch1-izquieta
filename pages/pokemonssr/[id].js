import Image from "next/image";

export default function PokemonSSR({ pokemonData }) {
  console.log(pokemonData);
  return (
    <>
      <ul className="pokemon-data">
        <li className="pokeimage">
          <Image
            src={`${pokemonData.sprites.other["official-artwork"].front_default}`}
            alt={pokemonData.name}
            width={300}
            height={300}
          />
        </li>
        <li className="pokename">
          NAME: #{pokemonData.id} -{" "}
          {pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)}
        </li>
        <li className="pokedata">HEIGHT: {pokemonData.height}m.</li>
        <li className="pokedata">WEIGHT: {pokemonData.weight}Kg.</li>
        <li className="pokedata">TYPES:</li>
        <ul className="poketypes">
          <li className="pokedata">{pokemonData.types[0].type.name}</li>
          <li className="pokedata">{pokemonData.types[1].type.name}</li>
        </ul>
      </ul>
    </>
  );
}

export async function getServerSideProps({ params: { id } }) {
  const pokemonInfoApi = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const response = await fetch(pokemonInfoApi);
  const pokemonData = await response.json();

  return { props: { pokemonData } };
}
