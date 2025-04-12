import { useRef, useState } from 'react';
import './App.css';
import TodoEditor from './component/TodoEditor';
import TodoList from './component/TodoList';
import Header from './Header';

const mockTodo = [
  {
    id: 0,
    isDone: true,
    content: "React 공부하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래 넣기",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    createdDate: new Date().getTime(),
  },
]

function App() {

  const isRef = useRef(3);
  const [todo, setTodo] = useState(mockTodo);
  const onCreate = (content) => {
    const newItem = {
      id: isRef.current,
      content, 
      isDone: false,
      createdDate: new Date().getTime(),
    };
    setTodo([newItem, ...todo]);
    isRef.current += 1;
  };
  const onUpdate = (targetId) => {
    setTodo(
      todo.map(
        (it) => {
          if (it.id === targetId) {
            return {
              ...it, 
              isDone: !it.isDone,
            };
          } else {
            return it;
          }
        }
      )
    )
  };
  const onDelete = (targetId) => {
    setTodo(todo.filter((it) => it.id !== targetId));
  };

  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList 
        todo={todo} 
        onUpdate={onUpdate} 
        onDelete={onDelete} 
      />
    </div>
  );
}

export default App;
