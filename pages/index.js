import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Navbar from "../components/Navbar";



export default function Home({  }) {
  return (
    <>
      <Head>
        <title>Eccomerce fake</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <h1 className={styles.titulo}>Seja bem vindo!</h1>
      </main>
    </>
  );
}
