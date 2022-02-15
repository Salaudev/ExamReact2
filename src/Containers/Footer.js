import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";

export default function Footer({ removeAll = () => {} }) {
  const location = useLocation();

  const { pathname } = location;
  const active = pathname.split("/");
  return (
    <footer className="todo-app-box">
      <div className="actions ">
        <ul>
          <Link to="/" className={`${active.slice(-1) == "" ? "active" : ""}`}>
            <li className="active">All</li>
          </Link>
          <Link
            className={`${active.slice(-1) == "active" ? "active" : ""}`}
            to="/active"
          >
            <li>Active</li>
          </Link>
          <Link
            to="/completed"
            className={` ${active.slice(-1) == "completed" ? "active" : ""}`}
          >
            <li>Completed</li>
          </Link>
          <li className="ms-4" onClick={removeAll}>
            Clear completed
          </li>
        </ul>
      </div>
    </footer>
  );
}
