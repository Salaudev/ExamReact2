import React, { useContext, useEffect } from "react";
import ItemWrapper from "./ItemWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faUserInjured,
  faCircleNotch,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

export default function Item({ item, completeTask, deleteTask }) {
  console.log(item);
  const { title, completed, id } = { ...item };

  return (
    <ItemWrapper>
      <button onClick={completeTask}>
        <FontAwesomeIcon
          className="icons"
          icon={completed ? faCircleCheck : faCircleNotch}
        />
      </button>
      {completed ? <del>{title}</del> : <input readOnly={true} value={title} />}
      <button className="reject" onClick={deleteTask}>
        <FontAwesomeIcon className="icons" icon={faCircleXmark} />
      </button>
    </ItemWrapper>
  );
}
