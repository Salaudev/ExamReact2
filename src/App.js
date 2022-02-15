import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Active from "./Containers/Active";
import Completed from "./Containers/Completed";
import TasksContext from "./Contexts/Contexts";
import TodoApp from "./Containers/TodoApp";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [task, setTask] = useState([
    { id: 1, title: "task-01", completed: false },
    { id: 2, title: "task-02", completed: false },
    { id: 3, title: "task-03", completed: false },
  ]);

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

  return (
    <TasksContext.Provider value={{ task, setTask }}>
      <div className="App">
        <div className="back-block">
          <div className="top">
            <img src="https://avatars.mds.yandex.net/i?id=ea82e13809a3e358d1983588ada87039-5494799-images-thumbs&n=13" />
          </div>
        </div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TodoApp />}></Route>
            <Route
              path="/active"
              element={
                <Active
                  completeTask={completeTask}
                  task={task}
                  deleteTask={deleteTask}
                />
              }
            ></Route>
            <Route
              path="/completed"
              element={
                <Completed
                  completeTask={completeTask}
                  task={task}
                  deleteTask={deleteTask}
                />
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </TasksContext.Provider>
  );
}

export default App;
