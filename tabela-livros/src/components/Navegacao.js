import React from "react";
import { NavLink } from "react-router-dom";


const Navegacao = () => (
  <ul>
    <li>
      <NavLink end to="/"
      style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}
      className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")}
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink end to="/frontend"
       style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}
      >
        Frontend
      </NavLink>
    </li>
    <li>
      <NavLink end  to="/programacao"
       style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}
      >
        Programacao
      </NavLink>
    </li>
    <li>
      <NavLink end to="/design"
       style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}
      >
        Design
      </NavLink>
    </li>
    <li>
      <NavLink end to="/catalogo"
       style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}
      >
        Catalogo
      </NavLink>
    </li>
  </ul>
);

export default Navegacao;
