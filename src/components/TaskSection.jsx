import { useState, useEffect } from "react";
import TaskCard from "./TaskCard";

function TaskSection() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks =
      localStorage.getItem("tasks");

    return savedTasks
      ? JSON.parse(savedTasks)
      : [];
  });

  const [title, setTitle] =
    useState("");

  const [category, setCategory] =
    useState("College");

  const [filter, setFilter] =
    useState("All");

  useEffect(() => {
    localStorage.setItem(
      "tasks",
      JSON.stringify(tasks)
    );
  }, [tasks]);

  const addTask = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    const newTask = {
      id: Date.now(),
      title,
      category,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTitle("");
  };

  const deleteTask = (id) => {
    setTasks(
      tasks.filter(
        (task) => task.id !== id
      )
    );
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed:
                !task.completed,
            }
          : task
      )
    );
  };

  const filteredTasks =
    tasks.filter((task) => {
      if (filter === "Completed")
        return task.completed;

      if (filter === "Pending")
        return !task.completed;

      return true;
    });

  return (
    <div
      style={{
        width: "80%",
        margin: "auto",
      }}
    >
      <h2>Task Manager</h2>

      <form onSubmit={addTask}>
        <input
          type="text"
          placeholder="Enter task"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />

        <select
          value={category}
          onChange={(e) =>
            setCategory(
              e.target.value
            )
          }
        >
          <option>
            College
          </option>
          <option>
            Coding
          </option>
          <option>
            Personal
          </option>
        </select>

        <button type="submit">
          Add Task
        </button>
      </form>

      <br />

      <div>
        <button
          onClick={() =>
            setFilter("All")
          }
        >
          All
        </button>

        <button
          onClick={() =>
            setFilter(
              "Completed"
            )
          }
        >
          Completed
        </button>

        <button
          onClick={() =>
            setFilter(
              "Pending"
            )
          }
        >
          Pending
        </button>
      </div>

      <br />

      {filteredTasks.length ===
      0 ? (
        <p>No tasks found.</p>
      ) : (
        filteredTasks.map(
          (task) => (
            <TaskCard
              key={task.id}
              task={task}
              onDelete={
                deleteTask
              }
              onToggle={
                toggleTask
              }
            />
          )
        )
      )}
    </div>
  );
}

export default TaskSection;