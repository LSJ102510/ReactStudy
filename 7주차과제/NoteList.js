import React from 'react';
import styled from 'styled-components';
import NoteItem from './NoteItem';

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`;

function NoteList({ notes, onDelete }) {
  return (
    <List>
      {notes.map((note, index) => (
        <NoteItem key={index} note={note} onDelete={() => onDelete(index)} />
      ))}
    </List>
  );
}

export default NoteList;
