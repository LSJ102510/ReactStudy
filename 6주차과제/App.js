import React, { useRef, useState } from 'react';
import Todolist from './Todolist';
import CreateTodoList from './CreateTodoList';

function App() {
  const [inputs, setInputs] = useState({
    todoinput: '',
  });
  const { todoinput} = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };
  const [todolist, setTodolist] = useState([
    {
      id: 1,
      todoinput: 'cpp 공부하기',
      active: true
    },
    {
      id: 2,
      todoinput: '데이터베이스 공부하기',
      active: false
    },
    {
      id: 3,
      todoinput: '수치해석 과제하기',
      active: false
    }
  ]);

  const nextId = useRef(4);
  const onCreate = () => {
    const todoeliment = {
      id: nextId.current,
      todoinput,
    };
    setTodolist(todolist.concat(todoeliment));

    setInputs({
      todoinput: '',
    });
    nextId.current += 1;
  };

  const onRemove = id => {
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id 가 id 인 것을 제거함
    setTodolist(todolist.filter(todoeliment => todoeliment.id !== id));
  };
  const onToggle = id => {
    setTodolist(
      todolist.map(todoeliment =>
        todoeliment.id === id ? { ...todoeliment, active: !todoeliment.active } : todoeliment
      )
    );
  };
  return (
    <>
      <CreateTodoList
        todoinput={todoinput}
        onChange={onChange}
        onCreate={onCreate}
      />
      <Todolist todolist={todolist} onRemove={onRemove} onToggle={onToggle} />
    </>
  );
}

export default App;
