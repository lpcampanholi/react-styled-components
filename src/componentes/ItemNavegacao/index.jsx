import { useState } from "react";
import styled from "styled-components";

const ItemListaEstilizado = styled.li`
  font-family: ${props => props.$ativo ? "GandhiSansBold" : "GandhiSansRegular"};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5em;
  margin-top: 0.5em;
  
  a {
    text-decoration: none;
    color: ${props => props.$ativo ? "#7B78E5" : "#D9D9D9"};
  }

  img {
    width: 30px;
  }
`;

const ItemNavegacao = ({ children, iconeAtivo, iconeInativo, ativo = false}) => {

  const [selecionado, setSelecionado] = useState(ativo);

  const selecionar = () => {
    setSelecionado(!selecionado);
  };

  return (
    <ItemListaEstilizado onClick={selecionar} $ativo={selecionado}>
      <img src={selecionado ? iconeAtivo : iconeInativo} alt="icone" />
      <a href="#">{children}</a>
    </ItemListaEstilizado>
  );
};

export default ItemNavegacao;
