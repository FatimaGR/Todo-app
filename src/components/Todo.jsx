import { useState } from "react";

const Todo = (props) => {
  const { todo, onChangeState, removeTodo } = props;
  const [state, setState] = useState(todo.state);

  function handleChecked(){
    setState(!state)
    onChangeState(todo.id, !state)
  }
  function onClickRemove(){
    removeTodo(todo.id)
  }
  
	return (
    <div>
      <input 
        type="checkbox"
        value={state}
        checked={state}
        onChange={handleChecked}
      />
      {todo.description}
      <button onClick={onClickRemove}>x</button>
    </div>
  );
};

export default Todo;