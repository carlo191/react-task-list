import "./App.css";
import tasks from "./data/tasks.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // Filtriamo i task in base allo stato

  const otherTasks = tasks.filter(
    (task) => task.state === "backlog" || task.state === "in_progress"
  );
  const completedTasks = tasks.filter((task) => task.state === "completed");

  return (
    <>
      <h1 className="p-3 ">Task manger</h1>

      <h2 className="ms-4 mb-4 mt-2"> Current Tasks (4)</h2>

      {otherTasks.map((task, index) => (
        <li className="ms-4" key={index}>
          <strong>{task.title}</strong>
          <button className="ms-2">backlog</button>
          <br /> Priority: {task.priority}
          <br />
          Est time: {task.estimatedTime}
        </li>
      ))}

      <hr />
      <h2 className="ms-4 mb-4 mt-2"> Current Tasks (6)</h2>

      {completedTasks.map((task, index) => (
        <li className="ms-4" key={index}>
          <strong>{task.title}</strong>
          <button id="completed-botton" className=" ms-2 ">completed</button>
          <br /> Priority: {task.priority}
          <br />
          Est time: {task.estimatedTime}
        </li>
      ))}
    </>
  );
}

export default App;
