import styled from "styled-components";
import BotaoIcone from "../BotaoIcone";

const Footer = styled.footer`
  background-color: #04244f;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  margin-top: 1em;
`;

const ContainerIcones = styled.div`
  display: flex;
  gap: 10px;
`;

const Texto = styled.span`
  color:#d9d9d9;
`;


const Rodape = () => {
  return (
    <Footer>
      <ContainerIcones>
        <BotaoIcone>
          <img src="/icones/facebook.png" alt="Ícone do facebook" />
        </BotaoIcone>
        <BotaoIcone>
          <img src="/icones/twitter.png" alt="Ícone do Twitter" />
        </BotaoIcone>
        <BotaoIcone>
          <img src="/icones/instagram.png" alt="Ícone do Instagram" />
        </BotaoIcone>
      </ContainerIcones>
      <Texto>Desenvolvido por lpcampanholi.</Texto>
    </Footer>
  );
};

export default Rodape;
