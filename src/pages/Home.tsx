import Button from "../my/components/Button";
import { TaskCard } from "../my/components/TaskCard";
import { mockTasks } from "../service/TaskService";
import type Task from "../types/Task";

function Home() {
  const tasks: Task[] = mockTasks();
  return (
    <>
      <header className="flex justify-between items-center bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl p-4 shadow-sm">
        <h1 className="text-white text-2xl font-bold text-shadow-glossy">
          Tarefas de Hoje
        </h1>
        <Button>+ Nova Tarefa</Button>
      </header>

      {/* Lista de Tarefas */}
      <div className="flex flex-col gap-4">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            description={task.description}
            hour={task.hour}
            checked={task.checked}
            title={task.title}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
