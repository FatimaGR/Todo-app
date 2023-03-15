import { useState } from "react";
import Form from "./Form.jsx";
import List from "./List.jsx";
import Menu from "./Todo.jsx";

const Home = () => {
  const [list, setList] = useState([]);

  const handleCreate = (todo) => {
    setList([...list, todo]);
  }
  return(
    <div>
      <div>
        <p>TODO </p>
        <p>sun</p>
      </div>
      <Form handleCreate={handleCreate}/>
      <List list={list} setList={setList}/>
    </div>
  )
}

export default Home;