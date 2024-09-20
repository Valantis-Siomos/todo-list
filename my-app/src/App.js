import { useState } from "react";
import GivenTask from "./components/GivenTask";
import TaskList from "./components/TaskList";


function App() {
    const [taskArr, setTaskArr] = useState([]);

    

    const AddNewTask = (task) => {;
    let newTas = {
      taskName: task,
      status:false,
      id: Date.now(),
  
      
    };
    setTaskArr([...taskArr, newTas]);
    };

    const deleteTask=(id) => {
        setTaskArr(
        taskArr.filter((task)=>{
            return task.id !==id;
        })
        
        );
    };


    function statusToggle(id) {
        setTaskArr(
        taskArr.map((taskObject) => {
            if(id === taskObject.id){
                return{
                    ...taskObject,
                    status:!taskObject.status
                };
            }else{
                return taskObject;
            }
        })
        
        );
        // console.log(taskArr)
    }


    return (
        <div>
            <GivenTask  AddNewTask={AddNewTask} />
            <TaskList taskArr={taskArr} deleteTask={deleteTask} statusToggle={statusToggle}/>
            
        </div>
    );
}

export default App;
