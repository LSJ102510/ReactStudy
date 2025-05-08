import React from 'react';

function Todo({ todoeliment, onchange, onRemove, onToggle }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        marginBottom: '8px' 
      }}
    >
      <span
        style={{
          color: todoeliment.active ? 'green' : 'black',
        }}
      >
        {todoeliment.todoinput}
      </span>
      <button onClick={() => onToggle(todoeliment.id)}>완료</button>
      <button onClick={() => onRemove(todoeliment.id)}>삭제</button>
    </div>
  );
}

function Todolist({ todolist, onRemove, onToggle }) {
  return (
    <div>
      {todolist.map(todoeliment => (
        <Todo
          todoeliment={todoeliment}
          key={todoeliment.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default Todolist;
