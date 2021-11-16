import Link from "next/link";

function Header() {
  return (
    <>
      <header className="header">
        <div className="image-title" />
        <h1>Pokemon 2.0 - La Venganza!</h1>
        <ul>
          <li>
            <Link className="link-home" href="/home">
              Home
            </Link>
          </li>
          <li>
            <Link className="link-home" href="/pokemon">
              Pokemon
            </Link>
          </li>
          <li>
            <Link className="link-home" href="/pokemonssr">
              PokemonSSR
            </Link>
          </li>
          <li>
            <Link className="link-home" href="/pokemonssg">
              PokemonSSG
            </Link>
          </li>
          <li>
            <Link className="link-home" href="/pokemonisr">
              PokemonISR
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Header;
