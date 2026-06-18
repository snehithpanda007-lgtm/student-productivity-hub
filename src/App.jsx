import "./App.css";
import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (e) => {
    e.preventDefault();

    if (!task.trim()) return;

    const newTask = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTask("");
  };

  const handleToggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const handleDeleteTask = (id) => {
    setTasks(
      tasks.filter((task) => task.id !== id)
    );
  };

  return (
    <div>
      <h1>Todo App</h1>

      <form onSubmit={handleAddTask}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task"
        />

        <button type="submit">
          Add Task
        </button>
      </form>

      <ul>
        {tasks.map((item) => (
          <li key={item.id}>
            <span
              onClick={() =>
                handleToggleComplete(item.id)
              }
              style={{
                textDecoration: item.completed
                  ? "line-through"
                  : "none",
                cursor: "pointer",
                marginRight: "10px",
              }}
            >
              {item.text}
            </span>

            <button
              onClick={() =>
                handleDeleteTask(item.id)
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;