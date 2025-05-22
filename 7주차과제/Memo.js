// src/components/Memo.js
import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  padding: 0.5rem;
  font-size: 1rem;
  resize: none;
`;

const Button = styled.button`
  padding: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  background: #228be6;
  color: white;
  border: none;
  border-radius: 4px;

  &:hover {
    background: #339af0;
  }

  &:active {
    background: #1c7ed6;
  }
`;
const DeleteButton = styled.button`
  padding: 0.5rem;
  font-size: 0.875rem;
  font-weight: bold;
  cursor: pointer;
  background: #fa5252;
  color: white;
  border: none;
  border-radius: 4px;

  &:hover {
    background: #ff6b6b;
  }

  &:active {
    background: #f03e3e;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Item = styled.div`
  border: 1px solid #ced4da;
  border-radius: 8px;
  padding: 0.75rem;
  background: #f8f9fa;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
`;

const NoteHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

function Memo() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleAddNote = e => {
    e.preventDefault();
    if (!title || !content) return;
    setNotes([...notes, { title, content }]);
    setTitle('');
    setContent('');
  };

  const handleDeleteNote = index => {
    const nextNotes = [...notes];
    nextNotes.splice(index, 1);
    setNotes(nextNotes);
  };

  return (
    <>
      <Form onSubmit={handleAddNote}>
        <h1><b>메모장</b></h1>
        <Input
          placeholder="제목을 입력하세요"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <TextArea
          placeholder="내용을 입력하세요"
          rows="4"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <Button type="submit">추가</Button>
      </Form>
      <List>
        {notes.map((note, index) => (
          <Item key={index}>
            <NoteHeader>
              <strong>{note.title}</strong>
              <DeleteButton onClick={() => handleDeleteNote(index)}>삭제</DeleteButton>
            </NoteHeader>
            <div>{note.content}</div>
          </Item>
        ))}
      </List>
    </>
  );
}

export default Memo;
