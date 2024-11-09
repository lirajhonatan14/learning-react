import { ChevronRightIcon, DeleteIcon, RemoveFormattingIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks({tasks, onTaskClick, onDeleteTaskClick}) {
    const navigate = useNavigate();

    function onSeeDetailsClick(tasks){
        const query = new URLSearchParams();
        query.set("title", tasks.title);
        query.set("description", tasks.description);
        navigate('/tasks?${query.toString()}');
    }
    return (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            {tasks.map((task) => (
                <li key={task.id} className="flex gap-2">
                    <button 
                    onClick={() => onTaskClick(task.id)} 
                    className={`bg-slate-400 text-left w-full text-white p-2 rounded-md ${task.isCompleted ? "line-through" : ""}`}
                    
                    >
                        {task.title}
                         
                    </button>
                    
                    <button 
                    onClick={() => onSeeDetailsClick(task)}
                    className="bg-slate-400 p-2 rounded-md text-white"> 
                        <ChevronRightIcon />
                    </button>
                    <button 
                    onClick={() => onDeleteTaskClick(task.id)}
                    className="bg-slate-400 p-2 rounded-md text-white"> 
                        <TrashIcon />
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default Tasks;
