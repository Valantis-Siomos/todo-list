
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


function TaskItem({taskObject, deleteTask, statusToggle }) {

    function handleDelete(taskId){
        deleteTask(taskId);
    }

    
    function handleToggle(taskId) {
        statusToggle(taskId);
    }

    return ( 
        <div className='tasks-div'>
            <input type="checkbox" onChange={() => handleToggle(taskObject.id)} />
            <span className={taskObject.status ===true ? "DONE" :""}>{taskObject.taskName}</span>
            <button className='delete-button' onClick={()=>handleDelete(taskObject.id)}><FontAwesomeIcon icon={faTrash} /></button>
        </div>
     );
}

export default TaskItem;