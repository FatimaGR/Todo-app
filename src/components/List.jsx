import Todo from "./Todo.jsx";

const List = (props) => {
  const { list, setList } = props;
  const listafiltrada = "lista normal";
  const filterAll = () => {
    listafiltrada = "lista normal";
  };
  return(
    <div>
      list funcionando
      <Todo 
        name={"name"}
        state={"false"}
      />
      <p>{listafiltrada}</p>
      <div>
        number of items
        <div>
          <input type="checkbox" id="all"/> <label for="all">all</label>
          <input type="checkbox" id="active"/> <label for="active">active</label>
          <input type="checkbox" id="completed"/> <label for="completed">completed</label>
        </div>
        clear completed
      </div>
    </div>
  );
};

export default List;