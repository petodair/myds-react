import { useState } from "react";
import Button from "../../my/components/Button";
import Input from "../../my/components/Input";
import { saveTask } from "../../service/TaskService";
import type Task from "../../types/Task";

function TaskForm() {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [hour, setHour] = useState<string>("");

  function handleSubmitForm(event: React.SubmitEvent) {
    event.preventDefault();
    const payload: Omit<Task, "id" | "checked" | "daysOfWeek"> = {
      title: title,
      description: description,
      hour: hour,
    };
    saveTask(payload).then(() => {
      setTitle("");
      setDescription("");
      setHour("");
    });
  }

  function handleTitleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  function handleDescriptionChange(event: React.ChangeEvent<HTMLInputElement>) {
    setDescription(event.target.value);
  }

  function handleHourChange(event: React.ChangeEvent<HTMLInputElement>) {
    setHour(event.target.value);
  }

  return (
    <div
      className="w-full bg-white/10 backdrop-blur-md 
    border border-white/30 rounded-2xl p-6 shadow-sm"
    >
      <div className="max-w-xl mx-auto space-y-4 mb-6">
        <h1 className="text-2xl text-white font-semibold text-center">
          Adicionar tarefa
        </h1>
        <form className="space-y-4" onSubmit={handleSubmitForm}>
          <Input
            onChange={handleTitleChange}
            value={title}
            label="Nome"
            id="title"
            type="text"
          />
          <Input
            onChange={handleDescriptionChange}
            value={description}
            label="Descrição"
            id="description"
            type="text"
          />
          <Input
            onChange={handleHourChange}
            value={hour}
            label="Horário"
            id="hour"
            type="text"
          />
          <Button>Adicionar</Button>
        </form>
      </div>
    </div>
  );
}

export default TaskForm;
