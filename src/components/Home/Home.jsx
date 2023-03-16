import { useState } from "react";
import Form from "../Form/Form.jsx";
import List from "../List/List.jsx";
import { useLocalStorage } from "../../useLocalStorage.js";
import lightIcon from "../../assets/images/icon-moon.svg";
import darkIcon from "../../assets/images/icon-sun.svg";
import darkBackground from "../../assets/images/bg-desktop-dark.jpg";
import lightBackground from "../../assets/images/bg-desktop-light.jpg";
import "./Home.css";

const Home = () => {
  let initialTodos = [{
      id: 0,
      description: "Complete online JavaScript course",
      state: true,
    },
    {
      id: 1,
      description: "Jog around the park 3x",
      state: false,
    },
    {
      id: 2,
      description: "10 minutes meditation",
      state: false,
    },
    {
      id: 3,
      description: "Read for 1 hour",
      state: false,
    },
    {
      id: 4,
      description: "Pick up groceries",
      state: false,
    },
    {
      id: 5,
      description: "Complete Todo App on Frontend Mentor",
      state: false,
    }
  ]
  const [list, setList] = useLocalStorage("list", initialTodos)
  const [darkMode, setDarkMode] = useState(false);

  function handleCreate(todo){
    setList([...list, todo]);
  }
  function onClickMode(){
    setDarkMode(!darkMode);
    console.log(!darkMode);
  }

  return(
    <>
      <img 
        className="background" 
        src={darkMode === true ? darkBackground : lightBackground} 
        alt="background"
      />
      <div className={darkMode === true ? "dark-mode app-container" : "light-mode app-container"}>
        <div className="app-elements">
          <div className="title">
            <h1>T O D O</h1>
            <img 
              className="mode-icon" 
              src={darkMode === true ? darkIcon : lightIcon} 
              alt="mode icon"
              onClick={onClickMode}/>
          </div>
          <Form darkMode={darkMode} handleCreate={handleCreate}/>
          <List darkMode={darkMode} list={list} setList={setList}/>
        </div>
      </div>
    </>
  )
}

export default Home;