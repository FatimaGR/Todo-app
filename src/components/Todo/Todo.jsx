import { useState } from "react";
import iconDelete from "../../assets/images/icon-cross.svg";
import "./Todo.css";

const Todo = (props) => {
  const { todo, onChangeState, removeTodo, darkMode } = props;
  const [state, setState] = useState(todo.state);

  function handleChecked(){
    setState(!state)
    onChangeState(todo.id, !state)
  }
  function onClickRemove(){
    removeTodo(todo.id)
  }
  
	return (
    <li className={darkMode === true ? "todo-container dark-border" : "todo-container light-border"}>
      <div className="data">
        <div className={state === true ? "completed" : "active"}>
          <input
            className="check"
            type="checkbox"
            value={state}
            checked={state}
            onChange={handleChecked}
          />
        </div>
        <p className={state === true ? "completed-title" : "active-title"}>{todo.description}</p>
      </div>
      <img className="delete-btn" src={iconDelete} alt="delete button" onClick={onClickRemove}/>
    </li>
  );
};

export default Todo;