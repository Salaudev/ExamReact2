import React from "react";
import Item from "../Components/Item/Item";
import Footer from "./Footer";

export default function Completed({ task, deleteTask, completeTask }) {
  const CompletedTasks = task.filter((obj) => obj.completed);
  console.log(CompletedTasks);
  return (
    <div className="todo-app-box">
      <h1>ToDo</h1>
      {CompletedTasks.map((item, i) => {
        return (
          <div className="shadow bg-light">
            <Item
              key={i}
              item={item}
              deleteTask={() => deleteTask()}
              completeTask={() => completeTask(i)}
            />
          </div>
        );
      })}
      {CompletedTasks.length > 0 ? <Footer /> : <></>}
    </div>
  );
}
