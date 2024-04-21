import React from "react";
import { Link } from "react-router-dom";

const Catalogo = () => (
  <main className="principal">
    <h2>Catálogo de livros</h2>
    <ul>
      <li>
      <Link href="/Programacao" >Livro 1</Link>
      </li>
      <li>
      <Link href="/Design" >Livro 2</Link>
      </li>
    </ul>
  </main>
);

export default Catalogo;
