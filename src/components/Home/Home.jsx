import { useState } from "react";
import Form from "../Form/Form.jsx";
import List from "../List/List.jsx";
import "./Home.css";

const Home = () => {
  const [list, setList] = useState([
    {
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
      description: "Complete Todo Aoo on Frontend Mentor",
      state: false,
    },
  ]);
  const [darkMode, setDarkMode] = useState(false);

  function handleCreate(todo){
    setList([...list, todo]);
  }
  function onClickMode(){
    setDarkMode(!darkMode);
    console.log(!darkMode);
  }

  const darkIcon = "src/assets/images/icon-moon.svg";
  const lightIcon = "src/assets/images/icon-sun.svg";
  const darkBackground = "src/assets/images/bg-desktop-dark.jpg";
  const lightBackground = "src/assets/images/bg-desktop-light.jpg";

  return(
    <>
      <img className="background" src={darkMode === true ? darkBackground : lightBackground}/>
      <div className={darkMode === true ? "dark-mode app-container" : "light-mode app-container"}>
        <div className="app-elements">
          <div className="title">
            <h1>TODO</h1>
            <img className="mode-icon" src={darkMode === true ? darkIcon : lightIcon} onClick={onClickMode}/>
          </div>
          <Form darkMode={darkMode} handleCreate={handleCreate}/>
          <List darkMode={darkMode} list={list} setList={setList}/>
        </div>
      </div>
    </>
  )
}

export default Home;