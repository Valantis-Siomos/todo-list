import TaskItem from "./TaskItem";

function TaskList({ taskArr, deleteTask, statusToggle}) {
  return (
    <div>
      {taskArr.map((task) => (
        <TaskItem key={task.id} taskObject={task} deleteTask={deleteTask} statusToggle={statusToggle}/>
        
      ))}
    </div>
  );
}

export default TaskList;
