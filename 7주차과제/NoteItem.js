import React from 'react';
import styled from 'styled-components';

const NoteBox = styled.div`
  border: 1px solid #dee2e6;
  padding: 1rem;
  border-radius: 8px;
  background: #f8f9fa;
  position: relative;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  color: #212529;
`;

const Content = styled.p`
  margin: 0;
  color: #495057;
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: #fa5252;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  cursor: pointer;

  &:hover {
    background: #c92a2a;
  }
`;

function NoteItem({ note, onDelete }) {
  return (
    <NoteBox>
      <DeleteButton onClick={onDelete}>삭제</DeleteButton>
      <Title>{note.title}</Title>
      <Content>{note.content}</Content>
    </NoteBox>
  );
}

export default NoteItem;
