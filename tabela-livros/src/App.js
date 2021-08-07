import React, { Component } from "react";

import TabelaHead from "./components/TabelaHead";
import TabelaFooter from "./components/TabelaFooter";
import TabelaBody from "./components/TabelaBody";
class App extends Component {

  state = {
    livros: []
  }
  componentDidMount(){
    fetch("/api/livros.json")
    .then(response => response.json())
    .then(livros => this.setState({livros}))
    .catch(function(error){
      console.log("Erro na Requisição")
    })
    
  }
  render() {
    return (
      <table className="tabela">
        <TabelaHead />
        <TabelaFooter qdeLivros = {this.state.livros.length} />
        <TabelaBody livros={this.state.livros} />
      </table>
    );
  }
}

export default App;