import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (!task.trim()) return;

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text: task,
        completed: false,
      },
    ]);

    setTask("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id
          ? { ...t, completed: !t.completed }
          : t
      )
    );
  };

  return (
    <div>
      <h1>Task List</h1>

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />

      <button onClick={addTask}>
        Add Task
      </button>

      <ul>
        {tasks.map((t) => (
          <li
            key={t.id}
            onClick={() => toggleTask(t.id)}
            style={{
              cursor: "pointer",
              textDecoration: t.completed
                ? "line-through"
                : "none",
            }}
          >
            {t.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;