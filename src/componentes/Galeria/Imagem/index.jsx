import styled from "styled-components";
import BotaoIcone from "../../BotaoIcone";

const Figure = styled.figure`
  width: ${props => props.$expandida? `45vw` : `22em`};
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin: 0;
`;

const Img = styled.img`
  max-width: 100%;
  border-radius: 1em 1em 0 0;
`;

const Legenda = styled.figcaption`
color: white;
background-color: #001634;
border-radius: 0 0 1em 1em;
padding: 1em;
box-shadow: 1.95px 1.95px 2.6px rgba(0, 0, 0, 0.15);
box-sizing: border-box;
`;

const Rodape = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Titulo = styled.h3`
  margin: 0;
  font-size: 1em;
`;

const Descricao = styled.h4`
  flex-grow: 1;
  margin: 0;
  font-size: 1em;
  font-weight: 400;
`;

const Imagem = ({ foto, expandida = false, aoZoomSolicitado, aoAlternarFavorito }) => {

  const iconeFavorito = foto.favorita ? "/icones/favorito-ativo.png" : "/icones/favorito.png";

  return (
    <Figure id={`foto-${foto.id}`} $expandida={expandida}>
      <Img src={foto.path} alt={foto.titulo} />
      <Legenda>
        <Titulo>{foto.titulo}</Titulo>
          <Rodape>
            <Descricao>{foto.fonte}</Descricao>
            <BotaoIcone onClick={() => aoAlternarFavorito(foto)}>
              <img src={iconeFavorito} alt="ícone de favorito-ativo" />
            </BotaoIcone>
             {!expandida &&
              <BotaoIcone
                aria-hidden={expandida}
                onClick={() => aoZoomSolicitado(foto)}>
                  <img src="/icones/expandir.png" alt="ícone de expandir" />
              </BotaoIcone>}
          </Rodape>
      </Legenda>
    </Figure>
  );
};

export default Imagem;
