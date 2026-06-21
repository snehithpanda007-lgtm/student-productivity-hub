import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TaskSection from "./components/TaskSection";
import Footer from "./components/Footer";

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved =
      localStorage.getItem("studentTasks");

    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "studentTasks",
      JSON.stringify(tasks)
    );
  }, [tasks]);

  const addTask = (title, category) => {
    const newTask = {
      id: Date.now(),
      title,
      category,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
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

  const deleteTask = (id) => {
    setTasks(
      tasks.filter((task) => task.id !== id)
    );
  };

  const completed = tasks.filter(
    (task) => task.completed
  ).length;

  const pending = tasks.length - completed;

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-5xl mx-auto px-4">
        <Hero />

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white shadow rounded p-4 text-center">
            <h3 className="text-xl font-bold">
              {tasks.length}
            </h3>
            <p>Total Tasks</p>
          </div>

          <div className="bg-white shadow rounded p-4 text-center">
            <h3 className="text-xl font-bold text-green-600">
              {completed}
            </h3>
            <p>Completed</p>
          </div>

          <div className="bg-white shadow rounded p-4 text-center">
            <h3 className="text-xl font-bold text-yellow-600">
              {pending}
            </h3>
            <p>Pending</p>
          </div>
        </div>

        <TaskSection
          tasks={tasks}
          addTask={addTask}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />

        <Footer />
      </div>
    </div>
  );
}

export default App;