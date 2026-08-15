import { Link } from "react-router";
import Button from "../my/components/Button";
import { TaskCard } from "../my/components/TaskCard";
import {
  deleteTask,
  fetchTasks,
  updateTask,
} from "../service/TaskService";
import type Task from "../types/Task";
import { useEffect, useState } from "react";
import DeleteTaskModal from "./task/DeleteTaskModal";
import CheckTaskModal from "./task/CheckTaskModal";

function Home() {
  const [taskToDelete, setTaskToDelete] = useState<Task | null>(null);
  const [taskToCheck, setTaskToCheck] = useState<Task | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetchTasks().then((tasks) => setTasks(tasks));
  }, []);

  const handleConfirmDelete = () => {
    if (taskToDelete) {
      deleteTask(taskToDelete.id).then(() => {
        setTasks((prevTasks) =>
          prevTasks.filter((task) => task.id !== taskToDelete.id),
        );
        setTaskToDelete(null);
      });
    }
  };

  const handleConfirmCheck = () => {
    if (taskToCheck) {
      taskToCheck.checked = !taskToCheck.checked;
      updateTask(taskToCheck, taskToCheck.id).then((taskUpdated) => {
        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task.id === taskUpdated.id ? taskUpdated : task,
          ),
        );
        setTaskToCheck(null);
      });
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
