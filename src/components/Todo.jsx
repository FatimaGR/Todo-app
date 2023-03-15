import { useState } from "react";

const Todo = (props) => {
  const { todo, onChangeState } = props;
  const [state, setState] = useState(todo.state);

  function handleChecked(){
    setState(!state)
    onChangeState(todo.id, !state)
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
    </div>
  );
};

export default Todo;