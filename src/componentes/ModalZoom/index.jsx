import styled from "styled-components";
import Imagem from "../Galeria/Imagem";
import BotaoIcone from "../BotaoIcone";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Dialog = styled.dialog`
  position: relative;
  max-width: 70%;
  background: transparent;
  border: none;
  padding: 0;
  z-index: 2;
  form {
    button {
      position: absolute;
      top: 20px;
      right: 20px;
    }
  }
`;

const ModalZoom = ({ foto, aoFechar, aoAlternarFavorito }) => {
  return (
    <>
      {foto && <>
        <Overlay>
          <Dialog open={!!foto} onClose={aoFechar}>
            <Imagem
              foto={foto}
              expandida={true}
              aoAlternarFavorito={aoAlternarFavorito}
              />
            <form method="dialog">
              <BotaoIcone type="submit">
                <img src="/icones/close.png" alt="Ícone de fechar" />
              </BotaoIcone>
            </form>
          </Dialog>
        </Overlay>
      </>}

    </>
  );
};

export default ModalZoom;
