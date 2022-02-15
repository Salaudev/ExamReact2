import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Item from "../Components/Item/Item";
import Footer from "./Footer";

export default function Active({ task, deleteTask, completeTask }) {
  return (
    <div className="todo-app-box">
      <h1>ToDo</h1>
      {task.map((item, i) => {
        if (!item.completed) {
          return (
            <Item
              key={i}
              item={item}
              deleteTask={() => deleteTask()}
              completeTask={() => completeTask(i)}
            />
          );
        }
      })}
      {task && <Footer />}
    </div>
  );
}
