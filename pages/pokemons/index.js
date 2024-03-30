import Navbar from "@/components/Navbar";
import styles from "@/styles/pokemons.module.css";
import Link from "next/link";
export async function getStaticProps() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon");
  const json = await res.json();
  return {
    props: { json },
  };
}
export default function Index({ json }) {
  return (
    <div>
      <Navbar />
      <h1 className={styles.title}>PokeAPI</h1>
    <ul>
      {json&&json.results.map((pokemon,i)=>(
       <Link href ={`pokemons/${i}`}>
          <li key = {i}>
            {pokemon.name}
          </li>
       </Link>
      ))}
    </ul>
    </div>
  );
}

