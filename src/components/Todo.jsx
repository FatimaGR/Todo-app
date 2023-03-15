const Todo = (props) => {
  const { name, state } = props;
	return (
    <div>
      <p>{name}</p>
      <p>{state}</p>
    </div>
  );
};

export default Todo;