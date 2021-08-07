import React from "react";

const TabelaFooter = (props) => (
  <tfoot>
    <tr>
      <td colSpan="4">Existem {props.qdeLivros} livros na sua estante.</td>
    </tr>
  </tfoot>
);

export default TabelaFooter;

