import { useState } from "react";
import Todo from "./Todo.jsx";

const List = (props) => {
  const { list, setList } = props;
  const [filteredList, setFilteredList] = useState(list);
  
  let listActives = list.filter(todo => todo.state === false);
  let listCompleteds = list.filter(todo => todo.state === true);
  
  function handleAll() {
    setFilteredList(list);
  };
  function handleActive() {
    setFilteredList(listActives);
  };
  function handleCompleted() {
    setFilteredList(listCompleteds);
  };

  function onChangeState(id, state){
    const updateList = list.map(todo => ({
      ...todo,
      state: todo.id === id ? state : todo.state
    }));
    setList(updateList);
  }

  return(
    <div>
      {filteredList.map((todo) => {
        return(
          <Todo key={todo.id} todo={todo} onChangeState={onChangeState}/>
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
        clear completed
      </div>
    </div>
  );
};

export default List;