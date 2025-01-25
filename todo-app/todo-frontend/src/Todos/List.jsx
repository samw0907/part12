import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  const onClickDelete = (todo) => () => {
    deleteTodo(todo);
  };

  const onClickComplete = (todo) => () => {
    completeTodo(todo);
  };

  return (
    <>
      {todos.map((todo) => (
        <div key={todo._id} style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '70%', margin: 'auto' }}>
          <Todo todo={todo} />
          {todo.done ? (
            <span>
              <button onClick={onClickDelete(todo)}>Delete</button>
            </span>
          ) : (
            <span>
              <button onClick={onClickDelete(todo)}>Delete</button>
              <button onClick={onClickComplete(todo)}>Set as done</button>
            </span>
          )}
        </div>
      )).reduce((acc, cur) => [...acc, <hr key={Math.random()} />, cur], [])}
    </>
  );
};

export default TodoList;
