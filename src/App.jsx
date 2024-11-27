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
      <h1 className="p-3">Task Manager</h1>

      
      <h2 className="ms-4 mb-4 mt-2">Current Tasks ({otherTasks.length})</h2>

      <ul>
        {otherTasks.map((task, index) => {
          
          let buttonText = "";
          if (task.state === "backlog") {
            buttonText = "Backlog";
          } else if (task.state === "in_progress") {
            buttonText = "In Progress";
          }

          return (
            <li className="ms-4" key={index}>
              <strong>{task.title}</strong>
              <button className="ms-2">{buttonText}</button>
              <br /> Priority: {task.priority}
              <br /> Est time: {task.estimatedTime} ore
            </li>
          );
        })}
      </ul>

      <hr />

   
      <h2 className="ms-4 mb-4 mt-2">
        Completed Tasks ({completedTasks.length})
      </h2>

      <ul>
        {completedTasks.map((task, index) => {
          
          let buttonText = "Completed"; 

          return (
            <li className="ms-4" key={index}>
              <strong>{task.title}</strong>
              <button  className="ms-2">
                {buttonText}
              </button>
              <br /> Priority: {task.priority}
              <br /> Est time: {task.estimatedTime} ore
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
