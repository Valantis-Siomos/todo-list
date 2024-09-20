import { useState } from "react";

function GivenTask({AddNewTask}) {
  const [task, setTask] = useState("");

  function handleClick() {
    AddNewTask(task);
    setTask("");
  }

  return (
    <div className="input-div">
      <input
        className="input-place"
        type="text"
        placeholder="What is your task?"
        onChange={(e) => setTask(e.target.value)}
        value={task}
      />
      <button className="add-button" onClick={handleClick}>Add Task</button>
      {/* <button>delete</button> */}
    </div>
  );
}

export default GivenTask;
