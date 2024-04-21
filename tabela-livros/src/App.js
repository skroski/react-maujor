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
import "./index.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Topo />
        <Routes>
          <Route end path="/" element={<Home/>} />
          <Route end path="/frontend" element={ <Frontend />} />
          <Route end path="/programacao" element={ <Programacao />} />
          <Route end path="/design" element={ <Design />} />
          <Route end path="/catalogo" action={(props) => <Catalogo />} />
          <Route component={NotFound} />
        </Routes>
        <Rodape />
      </Router>
    );
  }
}

export default App;
