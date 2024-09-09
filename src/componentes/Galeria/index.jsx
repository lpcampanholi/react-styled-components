import styled from "styled-components";
import Titulo from "../Titulo";
import Populares from "./Populares";
import Imagem from "./Imagem";

const Container = styled.div`
  display: flex;
`;

const SecaoFluida = styled.section`
  flex-grow: 1;
`;

const ImagensContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1em;
`;

const Galeria = ({ fotos = [], aoSelecionado, aoAlternarFavorito }) => {
  return (
    <Container>
      <SecaoFluida>
        <Titulo>Navegue pela galeria</Titulo>
        <ImagensContainer>
          {fotos.map(foto =>
          <Imagem
            key={foto.id}
            foto={foto}
            aoZoomSolicitado={aoSelecionado}
            aoAlternarFavorito={aoAlternarFavorito}
          />)}
        </ImagensContainer>
      </SecaoFluida>
      <Populares />
    </Container>
  );
};

export default Galeria;
