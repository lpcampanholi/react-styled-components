import styled from "styled-components";

const FigureEstilizado = styled.figure`
  background-image: ${props => `url(${props.$backgroundImage})`};
  background-size: cover;
  background-repeat: no-repeat;
  flex-grow: 1;
  display: flex;
  align-items: center;
  min-height: 15em;
  max-width: 100%;
  margin: 0;
  border-radius: 1em;
`;

const TituloEstilizado = styled.h1`
  font-weight: 400;
  font-size: 1.8em;
  color: white;
  max-width: 7em;
  padding: 0 1.8em;
`;

const Banner = ({ texto, backgroundImage }) => (
  <FigureEstilizado $backgroundImage = {backgroundImage}>
    <TituloEstilizado>{texto}</TituloEstilizado>
  </FigureEstilizado>
);

export default Banner;
