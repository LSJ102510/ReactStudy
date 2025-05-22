import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  padding: 0.5rem;
  font-size: 1rem;
`;

const Button = styled.button`
  background:rgb(72, 157, 232);
  color: white;
  padding: 0.5rem;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 4px;
  
  &:hover {
    background: #1864ab;
  }
`;

function NoteForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!title || !content) return;
    onAdd({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <Form onSubmit={handleSubmit}>
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
  );
}

export default NoteForm;
