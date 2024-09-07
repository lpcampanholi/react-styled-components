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
`;

const Dialog = styled.dialog`
  position: absolute;
  top: 290px;
  background: transparent;
  border: none;
  padding: 0;
  form {
    button {
      position: relative;
      top: 10px;
      right: 10px;
    }
  }
`;

const ModalZoom = ({ foto, aoFechar }) => {
  return (
    <>
      {foto && <>
        <Overlay />
        <Dialog open={!!foto} onClose={aoFechar}>
          <Imagem foto={foto} expandida={true} />
          <form method="dialog">
            <BotaoIcone type="submit">
              <img src="/icones/close.png" alt="Ícone de fechar" />
            </BotaoIcone>
          </form>
        </Dialog>
      </>}
    </>
  );
};

export default ModalZoom;
