import "./App.css";
import tasks from "./data/tasks.jsx";

function App() {
  // Filtriamo i task in base allo stato

  const otherTasks = tasks.filter(
    (task) => task.state === "backlog" || task.state === "in_progress"
  );
  const completedTasks = tasks.filter((task) => task.state === "completed");

  return (
    <>
      <h1>ciao</h1>

      <h2> Task</h2>
      <ul>
        {otherTasks.map((task, index) => (
          <li key={index}>
            {task.title} - Priorità: {task.priority}, Tempo Stimato:{" "}
            {task.estimatedTime} ore
          </li>
        ))}
      </ul>
      <hr />
      <ul>
        {completedTasks.map((task, index) => (
          <li key={index}>Stato: {task.state}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
