import "./App.css";
import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [category, setCategory] = useState("Coding");
  const [filter, setFilter] = useState("All");

  const handleAddTask = (e) => {
    e.preventDefault();

    if (!task.trim()) return;

    const newTask = {
      id: Date.now(),
      text: task,
      category,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTask("");
  };

  const handleToggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      )
    );
  };

  const handleDeleteTask = (id) => {
    setTasks(
      tasks.filter(
        (task) => task.id !== id
      )
    );
  };

  const filteredTasks =
    filter === "All"
      ? tasks
      : tasks.filter(
          (task) =>
            task.category === filter
        );

  return (
    <div className="container">
      <h1>Student Productivity Hub</h1>

      <form onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Enter task..."
          value={task}
          onChange={(e) =>
            setTask(e.target.value)
          }
        />

        <select
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
        >
          <option value="Coding">
            Coding
          </option>
          <option value="College">
            College
          </option>
          <option value="Personal">
            Personal
          </option>
        </select>

        <button type="submit">
          Add Task
        </button>
      </form>

      <hr />

      <h3>Filter by Category</h3>

      <button
        onClick={() => setFilter("All")}
      >
        All
      </button>

      <button
        onClick={() =>
          setFilter("Coding")
        }
      >
        Coding
      </button>

      <button
        onClick={() =>
          setFilter("College")
        }
      >
        College
      </button>

      <button
        onClick={() =>
          setFilter("Personal")
        }
      >
        Personal
      </button>

      <hr />

      <h2>Tasks</h2>

      {filteredTasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        <ul>
          {filteredTasks.map((item) => (
            <li
              key={item.id}
              style={{
                marginBottom: "15px",
              }}
            >
              <span
                onClick={() =>
                  handleToggleComplete(
                    item.id
                  )
                }
                style={{
                  textDecoration:
                    item.completed
                      ? "line-through"
                      : "none",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                {item.text}
              </span>

              <p>
                Category:{" "}
                {item.category}
              </p>

              <p>
                Status:{" "}
                {item.completed
                  ? "Completed"
                  : "Pending"}
              </p>

              <button
                onClick={() =>
                  handleToggleComplete(
                    item.id
                  )
                }
              >
                {item.completed
                  ? "Mark Pending"
                  : "Mark Complete"}
              </button>

              <button
                onClick={() =>
                  handleDeleteTask(
                    item.id
                  )
                }
                style={{
                  marginLeft: "10px",
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;