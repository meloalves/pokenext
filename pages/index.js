import styles from "../styles/Home.module.css";

import Image from "next/image";

import Card from "../components/Card";

export async function getStaticProps() {
  
  const maxPokemons = 251;
  const api = `https://pokeapi.co/api/v2/pokemon/`;

  const res = await fetch(`${api}?limit=${maxPokemons}`);
  const data = await res.json();

  // add pokemon index
  data.results.forEach((pokemon, index) => {
    pokemon.id = index + 1;
  })

  return {
    props: {
      pokemons: data.results,
    },
  }
}

export default function Home({ pokemons }) {
  return (
    <>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>
          Poke<span>Next</span>
        </h1>
        <Image 
          src="/images/pokeball.png" 
          alt="Pokeball" 
          width={50}
          height={50}
        />
      </div>
      <div className={styles.pokemonContainer}>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  )
}
