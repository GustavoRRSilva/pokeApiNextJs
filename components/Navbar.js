import Link from "next/link";
import styles from "@/styles/navBar.module.css"
import {json} from "@/pages/index.js"
export default function navbar({json}) {
  <script src="	https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  console.log(json)
  return (
    
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Poke API</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse " id="navbarNav" >
        <ul class="navbar-nav">
          <Link href="/">
          <li class="nav-item">
            <h3 class="nav-link active" aria-current="page" href="#">Home</h3>
          </li>
          </Link>
         <Link href = "/pokemons">
         <li class="nav-item">
            <h3 class="nav-link" href="#">Pokemons</h3>
          </li>
         </Link>
        </ul>
      </div>
    </div>
  </nav>
  );
}
