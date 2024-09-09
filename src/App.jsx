import styled from "styled-components";
import EstilosGlobais from "./componentes/EstilosGlobais";
import Cabecalho from "./componentes/Cabecalho";
import BarraLateral from "./componentes/BarraLateral";
import Banner from "./componentes/Banner";
import Galeria from "./componentes/Galeria";
import fotosDaGaleria from "./fotos.json";
import { useEffect, useState } from "react";
import ModalZoom from "./componentes/ModalZoom";
import Rodape from "./componentes/Rodape";
import { normalizeText } from "./utils/utils";
import Tags from "./componentes/Galeria/Tags";

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
  max-width: 100%;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const App = () => {
  const [fotos, setFotos] = useState(fotosDaGaleria);
  const [fotosPesquisadas, setFotosPesquisadas] = useState(fotos);
  const [fotoSelecionada, setFotoSelecionada] = useState(null);
  const [textoPesquisa, setTextoPesquisa] = useState("");
  const [TagId, setTagId] = useState(0);

  const aoAlternarFavorito = (foto) => {
    if (foto.id === fotoSelecionada?.id) {
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita: !fotoSelecionada.favorita
      })
    };
    setFotos(fotos.map(fotoDaGaleria => {
      return {
        ...fotoDaGaleria,
        favorita: fotoDaGaleria.id === foto.id ? !foto.favorita : fotoDaGaleria.favorita
      };
    }))
  };

  const aoAtualizarPesquisa = (texto) => {
    setTextoPesquisa(texto);
  };

  const aoSelecionarTag = (tagId) => {
    setTagId(tagId);
  };

  useEffect(() => {
    const fotosFiltradas = fotos.filter(foto => {
      const tituloNormalizado = normalizeText(foto.titulo);
      const fonteNormalizada = normalizeText(foto.fonte);
      const correspondePesquisa = tituloNormalizado.includes(textoPesquisa) || fonteNormalizada.includes(textoPesquisa);
      const correspondeTag = TagId === 0 || foto.tagId === TagId;
      return correspondePesquisa && correspondeTag;
    });
    setFotosPesquisadas(fotosFiltradas);
  }, [textoPesquisa, TagId, fotos])

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho aoAtualizarPesquisa={aoAtualizarPesquisa} />
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
          <Banner
            texto="A galeria mais completa de fotos do espaço"
            backgroundImage="imagens/foto-destaque.png"
          />
          <Tags aoSelecionarTag={aoSelecionarTag} />
          <Galeria
            fotos={fotosPesquisadas}
            aoSelecionado={foto => setFotoSelecionada(foto)}
            aoAlternarFavorito={aoAlternarFavorito}
          />
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
      <ModalZoom
        foto={fotoSelecionada}
        aoFechar={() => setFotoSelecionada(null)}
        aoAlternarFavorito={aoAlternarFavorito}
      />
    <Rodape />
    </FundoGradiente>
  );
};

export default App;
