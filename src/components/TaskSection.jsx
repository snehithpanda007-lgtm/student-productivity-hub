import { useState } from "react";
import TaskCard from "./TaskCard";

export default function TaskSection({
  tasks,
  addTask,
  toggleTask,
  deleteTask,
}) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("College");
  const [filter, setFilter] = useState("All");
  const [CatFilter, setCatFilter] = useState("All")

  const filteredTasks = tasks.filter((task) => {
    // Status filter
    const statusMatch =
      filter === "All"
        ? true
        : filter === "Completed"
        ? task.completed
        : !task.completed;

    // Category filter
    const categoryMatch =
      CatFilter === "All"
        ? true
        : task.category === CatFilter;

    return statusMatch && categoryMatch;
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    addTask(title, category);

    setTitle("");
  };

  return (
    <section className="space-y-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-4"
      >
        <div className="flex flex-col md:flex-row gap-3">
          <input
            type="text"
            placeholder="Enter task..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 rounded flex-1"
          />

          <select
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
            className="border p-2 rounded"
          >
            <option>College</option>
            <option>Coding</option>
            <option>Personal</option>
          </select>

          <button
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Add Task
          </button>
        </div>
      </form>

      <div className="flex gap-3">
        <button
          onClick={() => setFilter("All")}
          className="px-3 py-1 bg-gray-200 rounded"
        >
          All
        </button>

        <button
          onClick={() => setFilter("Completed")}
          className="px-3 py-1 bg-green-200 rounded"
        >
          Completed
        </button>

        <button
          onClick={() => setFilter("Pending")}
          className="px-3 py-1 bg-yellow-200 rounded"
        >
          Pending
        </button>

        <select
          value={CatFilter}
          onChange={(e) => setCatFilter(e.target.value)}
          className="px-3 py-1 bg-red-200 rounded"
        >
          <option value="All">All</option>
          <option value="College">College</option>
          <option value="Coding">Coding</option>
          <option value="Personal">Personal</option>
        </select>   
      </div>

      {filteredTasks.length === 0 ? (
        <p className="text-center text-gray-500">
          No tasks found.
        </p>
      ) : (
        <div className="space-y-3">
          {filteredTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              toggleTask={toggleTask}
              deleteTask={deleteTask}
            />
          ))}
        </div>
      )}
    </section>
  );
}