const Todo = ({ todo }) => {
    return (
      <div>
        <input type="checkbox" checked={todo.done} readOnly />
        <span>{todo.text}</span>
      </div>
    );
  };
  
  export default Todo;
  