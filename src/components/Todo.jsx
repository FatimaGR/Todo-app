import { useState } from "react";

const Todo = (props) => {
  const { todo } = props;
  const [state, setState] = useState(todo.state);

  function handleChecked(){
    setState(!state)
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