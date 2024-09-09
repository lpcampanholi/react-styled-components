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

const ItemNavegacao = ({ children, iconeAtivo, iconeInativo, ativo = false, aoClicar}) => {
  return (
    <ItemListaEstilizado $ativo={ativo} onClick={aoClicar}>
      <img src={ativo ? iconeAtivo : iconeInativo} alt="icone" />
      <a href="#">{children}</a>
    </ItemListaEstilizado>
  );
};

export default ItemNavegacao;
