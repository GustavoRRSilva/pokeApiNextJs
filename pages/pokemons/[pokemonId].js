import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "@/styles/pokemonId.module.css";
export default function pokemonid() {
  const router = useRouter();
  const [pokemonData, setPokemonData] = useState();

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const pokemonId = parseInt(router.query.pokemonId) + 1;
        const link = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`;
        const res = await fetch(link);
        const json = await res.json();
        setPokemonData(json);
        console.log(json);
      } catch (error) {}
    };
    fetchPokemon();
  }, [router.query.pokemonId]);
  console.log(pokemonData);
  return (
    <div>
      <Link href="/pokemons"><h3 className={styles.h3}>Voltar</h3></Link>
      {pokemonData ? (
        <div className={styles.divCompleta}>
          <img
            src={pokemonData.sprites.front_default}
            alt={`${pokemonData.name} - back default`}
          />
          <h2>Name:{pokemonData.name}</h2>
          <p>Altura: {pokemonData.height}</p>
          <p>Peso: {pokemonData.weight}</p>
        </div>
      ) : (
        <p>Carregando </p>
      )}
    </div>
  );
}
