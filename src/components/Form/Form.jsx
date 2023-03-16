import { useState } from "react";
import "./Form.css";

const Form = (props) => {
  const { handleCreate, darkMode } = props;
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
    setState(false);
  };
  
	return(
    <form className={darkMode === true ? "form dark-mode" : "form light-mode"} onSubmit={handleSubmit}>
      <div className={state === true ? "completed" : "active"}>
        <input 
          className="check"
          type="checkbox"
          name="state"
          value={state}
          checked={state}
          onChange={handleChecked}
        />
      </div>
      <input
        className={darkMode === true ? "dark-input" : "light-input"}
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