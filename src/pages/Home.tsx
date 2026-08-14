import { Link } from "react-router";
import Button from "../my/components/Button";
import { TaskCard } from "../my/components/TaskCard";
import { mockTasks } from "../service/TaskService";
import type Task from "../types/Task";
import { useState } from "react";
import DeleteTaskModal from "./task/DeleteTaskModal";
import CheckTaskModal from "./task/CheckTaskModal";

function Home() {
  const [taskToDelete, setTaskToDelete] = useState<Task | null>(null);
  const [taskToCheck, setTaskToCheck] = useState<Task | null>(null);
  const [tasks, setTasks] = useState<Task[]>(mockTasks());

  const handleConfirmDelete = () => {
    if (taskToDelete) {
      const updatedTasks = tasks.filter((task) => task.id !== taskToDelete.id);
      setTasks(updatedTasks);
      setTaskToDelete(null);
    }
  };

  const handleConfirmCheck = () => {
    if (taskToCheck) {
      console.log(taskToCheck.id);
      const updatedTasks = tasks.map((task) =>
        task.id === taskToCheck.id ? { ...task, checked: !task.checked } : task,
      );
      setTasks(updatedTasks);
      setTaskToCheck(null);
    }
  };

  return (
    <>
      <header className="flex justify-between items-center bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl p-4 shadow-sm">
        <h1 className="text-white text-2xl font-bold text-shadow-glossy">
          Tarefas de Hoje
        </h1>
        <Link to="/adicionar-tarefa">
          <Button>+ Nova Tarefa</Button>
        </Link>
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
            setTaskToDelete={() => {
              (setTaskToDelete(task), setTaskToCheck(null));
            }}
            setTaskToCheck={() => {
              (setTaskToDelete(null), setTaskToCheck(task));
            }}
          />
        ))}
      </div>

      <DeleteTaskModal
        task={taskToDelete}
        onClose={() => setTaskToDelete(null)}
        onConfirm={handleConfirmDelete}
      />

      <CheckTaskModal
        task={taskToCheck}
        onClose={() => setTaskToCheck(null)}
        onConfirm={handleConfirmCheck}
      />
    </>
  );
}

export default Home;
