import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
  {
    
   id: 1,
   title: "Estudar Programação",
   description: "Estudar programação para se tornar um desenvolvedor full stack.",
   isCompleted: false,
  },
  {
    id: 2,
    title: "Estudar Inglês",
    description: "Estudar inglês para se tornar fluente.",
    isCompleted: false,
  }, 
  {
    id: 3,
    title: "Estudar Espanhol",
    description: "Estudar espanhol para se tornar fluente.",
    isCompleted: false,

  },
]);

function onTaskClick(taskId){
  const newTasks = tasks.map((task) => {
    // Verifica se o id da tarefa é igual ao id da tarefa clicada
    if(task.id === taskId){
      return {...task, isCompleted: !task.isCompleted};
    }
    // Retorna a tarefa sem alterações
    return task;
  });
}
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-red-500 font-bold text-center">
          Gerenciador de Tarefas

        </h1>
        <AddTask />
        <Tasks tasks={tasks}/>
      </div>
    </div>

  );
}

export default App;