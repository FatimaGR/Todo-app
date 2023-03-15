import { useState } from "react";
import Todo from "./Todo.jsx";

const List = (props) => {
  const { list, setList } = props;
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

  return(
    <div>
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
      <div>
        {listActives.length}
        <div>
          <input type="radio" id="all" onChange={handleAll} name="filter"/>
          <label for="all">all</label>
          <input type="radio" id="active" onChange={handleActive} name="filter"/>
          <label for="active">active</label>
          <input type="radio" id="completed" onChange={handleCompleted} name="filter"/>
          <label for="completed">completed</label>
        </div>
        <button onClick={onClickRemoveTodos}>clear completed</button>
      </div>
    </div>
  );
};

export default List;