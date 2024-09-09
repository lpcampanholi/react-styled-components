import styled from "styled-components";
import ItemNavegacao from "../ItemNavegacao";
import { useState } from "react";

const ListaEstilizada = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 212px;
`;

const BarraLateral = () => {
  const [pagina, setPagina] = useState("Home");

  return (
    <aside>
      <nav>
        <ListaEstilizada>
          <ItemNavegacao
            iconeAtivo="/icones/home-ativo.png"
            iconeInativo="icones/home-inativo.png"
            ativo={pagina === "Home"}
            aoClicar={() => setPagina("Home")}
          >Home</ItemNavegacao>
          <ItemNavegacao
            iconeAtivo="/icones/mais-vistas-ativo.png"
            iconeInativo="icones/mais-vistas-inativo.png"
            ativo={pagina === "Mais vistas"}
            aoClicar={() => setPagina("Mais vistas")}
          >Mais vistas</ItemNavegacao>
          <ItemNavegacao
            iconeAtivo="/icones/mais-curtidas-ativo.png"
            iconeInativo="icones/mais-curtidas-inativo.png"
            ativo={pagina === "Mais curtidas"}
            aoClicar={() => setPagina("Mais curtidas")}
          >Mais curtidas</ItemNavegacao>
          <ItemNavegacao
            iconeAtivo="/icones/novas-ativo.png"
            iconeInativo="icones/novas-inativo.png"
            ativo={pagina === "Novas"}
            aoClicar={() => setPagina("Novas")}
          >Novas</ItemNavegacao>
          <ItemNavegacao
            iconeAtivo="/icones/surpreenda-me-ativo.png"
            iconeInativo="icones/surpreenda-me-inativo.png"
            ativo={pagina === "Surpreenda-me"}
            aoClicar={() => setPagina("Surpreenda-me")}
          >Surpreenda-me</ItemNavegacao>
        </ListaEstilizada>
      </nav>
    </aside>
  );
};
  
export default BarraLateral;
