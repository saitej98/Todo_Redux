import React, { useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { TodoContext } from "./Context/TodoContext";
import todoReducer from "./Context/reducer";
import TodoForm from "./Components/TodoForm";
import Todos from "./Components/Todos";

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      <h1 classname="heading">Todo Application</h1>
      <div className="flex">
        <div>
          <TodoForm />
        </div>
        <div className="list">
          <Todos />
        </div>
      </div>
    </TodoContext.Provider>
  );
};

export default App;
