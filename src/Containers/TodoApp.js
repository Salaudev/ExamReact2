import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Item from "../Components/Item/Item";
import TasksContext from "../Contexts/Contexts";
import "../CSS/TodoApp.css";
import Footer from "./Footer";

export default function TodoApp() {
  const { task, setTask } = useContext(TasksContext);
  const [value, setValue] = useState("");

  const completeTask = (index) => {
    console.log("Task Completed");

    const t = [...task];
    t[index].completed = !task[index].completed;
    console.log(task[index].completed);
    setTask(t);
  };

  console.log(task);

  const deleteTask = (index) => {
    console.log("task deleted");
    const t = [...task];
    t.splice(index, 1);
    setTask(t);
  };

  const addTask = () => {
    if (value == "") return;
    const t = [...task];
    const maxId = t.length;

    t.push({ id: maxId + 1, title: value, completed: false });

    setTask(t);
    setValue("");
  };

  const removeAll = () => {
    const t = [];
    task.map((obj, id) => {
      if (!obj.completed) t.push(obj);
    });
    setTask(t);
  };

  return (
    <>
      <div className="todo-app-box">
        <h1>ToDo</h1>
        <div className="input-block">
          <button>
            <FontAwesomeIcon
              icon={faPlus}
              className="icons"
              onClick={addTask}
            />
          </button>
          <input
            type="text"
            className="main-input"
            placeholder="Enter Task"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        {task.map((item, i) => (
          <Item
            key={i}
            item={item}
            deleteTask={() => deleteTask()}
            completeTask={() => completeTask(i)}
          />
        ))}
        {task && <Footer removeAll={() => removeAll()} />}
      </div>
    </>
  );
}
