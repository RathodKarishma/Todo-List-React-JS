import React from "react";
import { useState } from "react";
import "./Todo.css";
 
const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const [todoName, setTodoName] = useState("");

  const addHandler = (e) => {
    if (todoName !== "") {
      setTodos([...todos, { id: todos.length + 1, name: todoName, completed: false },
      ]);
      setTodoName("");
    }
  };

  const completeTodo = (id) => {
    let ans = [...todos].map((res) => {
      if (id == res.id) {
        return { ...res, completed: !res.completed };
      }
      return res;
    });
    setTodos(ans);
  };
  const deleteHandler = (todoId) => {
    setTodos(todos.filter((t) => t.id !== todoId));
  };

  return (
    <div className="container">
      <h1>TODO APP</h1>
      <br />
      <div className="card " style={{ backgroundColor: "black" }}>
        <h1 style={{ color: "plum" }}>To-Do List</h1>
        <input
          className="input"
          placeholder="Enter Here"
          name="todoname"
          onChange={(e) => setTodoName(e.target.value)}
          value={todoName}
        />
        <br />
        <button
          type="button"
          className="btn"
          style={{ backgroundColor: "plum" }}
          onClick={addHandler}
        >
          Add
        </button>
      </div>
      <br />
      <ul>
        {todos.map((todo) => {
          return (
            <div id="map" style={{ backgroundColor: "black", rowGap: "5%" }}>
              <li key={todo.id}>
                <span onClick={() => completeTodo(todo.id)}>
                  {todo.completed ? (
                    <strike>{todo.name}</strike>
                  ) : (
                    <>{todo.name}</>
                  )}
                </span>{" "}
                &nbsp;
                <button
                  className="btn"
                  style={{ backgroundColor: "plum" }}
                  onClick={() => deleteHandler(todo.id)}
                >
                  Delete
                </button>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;

/*const TodoApp1= () => {
  const [obj, setObj] = useState({
    firstname: "",
    lastname: "",
  });

  const changeHandlerFirstname = (e) => {
    setObj({ ...obj, firstname: e.target.value });
  };

  const changeHandlerLastname = (e) => {
    setObj({ ...obj, lastname: e.target.value });
  };
  console.log(obj);
  return (
    <div>
      <form>
        <div>
          Firstname=
          <input
            name="firstname"
            value={obj.firstname}
            onChange={changeHandlerFirstname}
          />
        </div>

        <div>
          Lastname=
          <input
            name="lastname"
            value={obj.lastname}
            onChange={changeHandlerLastname}
          />
        </div>
      </form>
    </div>
  );
};

export default TodoApp1;*/
