import { useState } from "react";
import Todo from "../Todo/Todo.jsx";
import "./List.css";

const List = (props) => {
  const { list, setList, darkMode } = props;
  const [filteredList, setFilteredList] = useState(list);

  let listActives = list.filter(todo => todo.state === false);
  let listCompleteds = list.filter(todo => todo.state === true);
  
  // filters functions
  function handleAll() {
    setFilteredList(list);
  };
  function handleActive() {
    setFilteredList(listActives);
  };
  function handleCompleted() {
    setFilteredList(listCompleteds);
  };

  // functions
  function onChangeState(id, state){
    const updateList = list.map(todo => ({
      ...todo,
      state: todo.id === id ? state : todo.state
    }));
    setList(updateList);
  }
  function onClickRemoveTodos(){
    const updateList = list.filter(todo => todo.state === false);
    setList(updateList);
  }
  function removeTodo(id){
    const updateList = list.filter(todo => todo.id !== id);
    setList(updateList);
  }
  
  let filterStyle = "";
  darkMode === true ? filterStyle = "dark-filter " : filterStyle = "light-filter"

  return(
    <div className={darkMode === true ? "container dark-mode" : "container light-mode"}>
      {filteredList.map((todo) => {
        return(
          <Todo 
            key={todo.id} 
            todo={todo} 
            onChangeState={onChangeState}
            removeTodo={removeTodo}
          />
        )
      })}
      <div className="menu">
        {listActives.length} items left
        <div className="filters">
          <label className={filterStyle} for="all">All
            <input className="radio-btn" type="radio" id="all" onChange={handleAll} name="filter" />
          </label>
          <label className={filterStyle} for="active">Active
            <input className="radio-btn" type="radio" id="active" onChange={handleActive} name="filter"/>
          </label>
          <label className={filterStyle} for="completed">Completed
            <input className="radio-btn" type="radio" id="completed" onChange={handleCompleted} name="filter"/>
          </label>
        </div>
        <button onClick={onClickRemoveTodos}>clear completed</button>
      </div>
    </div>
  );
};

export default List;