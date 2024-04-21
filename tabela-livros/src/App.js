import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topo from "./components/Topo";
import Home from "./components/Home";
import Frontend from "./components/Frontend";
import Programacao from "./components/Programacao";
import Design from "./components/Design";
import Catalogo from "./components/Catalogo";
import NotFound from "./components/NotFound";
import Rodape from "./components/Rodape";
import Livro from "./components/Livro";
import axios from "axios";
import "./index.css";

class App extends Component {
  state = {
    livros: [],
  };

  async componentDidMount() {
    try {
      const { data: livros } = await axios.get("/api/todosOsLivros.json");
      this.setState({ livros });
      console.log(livros);
    } catch (error) {
      console.log(error);
      document
        .querySelectorAll(".principal")[0]
        .insertAdjacentHTML(
          "beforeend",
          "<p class='erro'>Mensagem de erro</p>"
        );
    }
  }
  render() {
    return (
      <Router>
        <Topo />
        <Routes>
          <Route end path="/" element={<Home livros={this.state.livros}/>} />
          <Route end path="/frontend" element={ <Frontend livros={this.state.livros}/>} />
          <Route end path="/programacao" element={ <Programacao livros={this.state.livros}/>} />
          <Route end path="/design" element={ <Design livros={this.state.livros}/>} />
          <Route end path="/catalogo" element={<Catalogo livros={this.state.livros}/>} />
          <Route path="/livro" element={<Livro livros={this.state.livros}/>}>
            <Route path=":livroSlug" element={<Livro livros={this.state.livros}/>} />
          </Route>
          
          <Route component={NotFound} />
        </Routes>
        <Rodape />
      </Router>
    );
  }
}

export default App;
