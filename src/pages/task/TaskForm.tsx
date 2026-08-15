import { useState } from "react";
import Button from "../../my/components/Button";
import Input from "../../my/components/Input";
import { saveTask } from "../../service/TaskService";
import type Task from "../../types/Task";
import { Link } from "react-router";
import { IMaskInput } from "react-imask";

function TaskForm() {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [hour, setHour] = useState<string>("00:00");

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

  return (
    <div
      className="w-full bg-white/10 backdrop-blur-md 
    border border-white/30 rounded-2xl p-6 shadow-sm"
    >
      <div className="max-w-xl mx-auto space-y-4 mb-2">
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
          <div className="flex flex-col space-y-1">
            <label htmlFor={hour} className="text-white font-semibold">
              Horário:
            </label>
            <IMaskInput
              className="border border-white/30 hover:border-white outline-none focus:border-white
        rounded-xl text-white caret-white"
              mask="00:00"
              lazy={false}
              placeholderChar="0"
              value={hour}
              onAccept={(value) => setHour(value)}
              id="hour"
            />
          </div>
          <Button>Adicionar</Button>
        </form>
        <Link to="/">
          <Button>Voltar</Button>
        </Link>
      </div>
    </div>
  );
}

export default TaskForm;
