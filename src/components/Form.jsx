import { useState } from "react";

const Form = (props) => {
  const { handleCreate } = props;
  const [description, setDescription] = useState("");
  const [state, setState] = useState(false);

  function handleChecked(){
    setState(!state)
  }
  function handleSubmit(e){
    e.preventDefault();
    handleCreate({
      id: (new Date().getTime()),
      description,
      state, 
    });
    setDescription("");
  };
  
	return(
    <form onSubmit={handleSubmit}>
      <input 
        type="checkbox"
        name="state"
        value={state}
        checked={state}
        onChange={handleChecked}
      />
      <input 
        type="text"
        name="description"
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder="currently typing"
      />
    </form>
  );
};

export default Form;