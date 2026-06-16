import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TaskSection from "./components/TaskSection";
import Footer from "./components/Footer";
import TaskCard from "./components/TaskCard";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TaskSection />
      <Footer />
    <div>
      <h1>Task Manager</h1>

      <TaskCard
        title="Learn React"
        status="In Progress"
        priority="High"
      />

      <TaskCard
        title="Build Portfolio"
        status="Pending"
        priority="Medium"
      />

      <TaskCard
        title="Practice JSX"
        status="Completed"
        priority="Low"
      />
    </div>
    </>
  );
}

export default App;