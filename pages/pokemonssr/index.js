import Image from "next/image";
import Link from "next/link";

export default function PokemonSSR({ pokemonList }) {
  return (
    <>
      <ul className="pokemon-list">
        {pokemonList.map((pokemon) => (
          <li key={pokemon.name} className="pokemon-file">
            <Link href={`/pokemonssr/${pokemon.id}`} passHref>
              <div className="pokecontainer">
                <div className="pokemon-image">
                  <Image
                    src={`${pokemon.sprites.other["official-artwork"].front_default}`}
                    alt={pokemon.name}
                    width={300}
                    height={300}
                  />
                </div>
                <div className="pokename-container">
                  <p className="pokename">
                    #{pokemon.id} - {pokemon.name}
                  </p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getServerSideProps() {
  const myApi = "https://napokemon.herokuapp.com/pokemon";

  const response = await fetch(myApi);
  const pokemonList = await response.json();

  return { props: { pokemonList } };
}
