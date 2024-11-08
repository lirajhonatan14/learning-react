function Tasks(props){
    return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
        {props.tasks.map((task) => {
         <li key={task.id} className="bg-slate-400 text-white p-2 rounded-md">
            <button>{task.title}</button>
            <button> Ver detalhes</button>
         </li>;
        })}
    </ul>
    );
}

export default Tasks;

