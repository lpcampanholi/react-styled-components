import styled from "styled-components";
import { normalizeText } from "../../utils/utils";

const Container = styled.div`
  display: inline-block;
  position: relative;
`;

const CampoTexto = styled.input`
    width: 30em;
    height: 3em;
    padding: 0.2em 0.8em;
    font-weight: 400;
    color: #D9D9D9;
    background: transparent;
    border: 1px solid;
    border-color: #C98CF1;
    border-radius: 0.5em;
    box-sizing: border-box;
    &::placeholder {
      color: #D9D9D9;
    }
`;

const IconeLupa = styled.img`
  position: absolute;
  top: 12px;
  right: 10px;
`;

const Pesquisa = ({ aoAtualizarPesquisa }) => {
  return (
    <Container>
      <CampoTexto type="text" name="pesquisa" id="pesquisa" placeholder="O que você procura?" onChange={(e) => aoAtualizarPesquisa(normalizeText(e.target.value))} />
      <IconeLupa src="icones/lupa.png" alt="ícone de lupa" />
    </Container>
  )
};

export default Pesquisa;
