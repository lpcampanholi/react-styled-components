import styled from "styled-components";
import Titulo from "../../Titulo";
import fotos from "./fotos-populares.json";

const SecaoPopulares = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 1em;
`;

const ColunaFotos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 13em;
  max-width: 15em;
`;

const Foto = styled.img`
  border-radius: 1em;
  width: 100%;
`;

const Botao = styled.button`
  background: transparent;
  color: #d9d9d9;
  border: 1px solid #C98CF1;
  border-radius: 0.5em;
  padding: 1.2em 0.5em;
  margin-top: 1em;
  cursor: pointer;
`;

const Populares = () => {
  return (
    <SecaoPopulares>
      <Titulo $alinhamento={"left"}>Populares</Titulo>
      <ColunaFotos>
          {fotos.slice(0, 5).map(foto => <Foto key={foto.id} src={foto.path} alt={foto.alt}/>)}
      </ColunaFotos>
      <Botao>Ver mais</Botao>
    </SecaoPopulares>
  );
};

export default Populares;
