import styled from "styled-components";
import Pesquisa from "../Pesquisa";

const HeaderEstilizado = styled.header`
  padding: 1em 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    max-width: 212px;
  }
`;

const Cabecalho = () => {
  return (
    <HeaderEstilizado>
      <img src="imagens/logo.png" alt="Logo Space App" />
      <Pesquisa />
    </HeaderEstilizado>
  );
};

export default Cabecalho;
