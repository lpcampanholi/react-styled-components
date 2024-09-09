import styled from "styled-components";
import tags from "./tags.json";
import { useState } from "react";

const Container = styled.section`
  display: flex;
  align-items: center;
  gap: 2em;
  margin: 2em 0;
`;

const TagTitulo = styled.h3`
  color: #d9d9d9;
  margin: 0;
  font-weight: 400;
`;

const TagContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Tag = styled.button`
  background-color: rgba(217, 217, 217, 0.3);
  border-radius: 0.5em;
  color: #d9d9d9;
  padding: 0.5em 1em;
  cursor: pointer;
  box-sizing: border-box;
  border: 2px solid;
  border-color: ${props => props.$ativo ? `#C98CF1` : `transparent`};
  &:hover {
    border-color: #C98CF1;
  }
`;

const Tags = ({ aoSelecionarTag }) => {

  const [tagSelecionadaId, setTagSelecionadaId] = useState(0);

  const selecionar = (tagId) => {
    setTagSelecionadaId(tagId);
    aoSelecionarTag(tagId);
  };

  return (
    <Container>
      <TagTitulo>Busque por Tags:</TagTitulo>
      <TagContainer>
        {tags.map(tag => (
          <Tag
            key={tag.id}
            $ativo={tagSelecionadaId === tag.id}
            onClick={() => selecionar(tag.id)}
            >
              {tag.titulo}
          </Tag>
        ))}
      </TagContainer>
    </Container>
  );
};

export default Tags;
