import Button from "../../my/components/Button";
import Input from "../../my/components/Input";

function TaskForm() {

    function handleSubmitForm(event:React.SubmitEvent){
        event.preventDefault();
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
          <Input label="Título" id="title" type="text" />
          <Input label="Descrição" id="description" type="text" />
          <Input label="Horário" id="hour" type="text" />
          <Button>Adicionar</Button>
        </form>
      </div>
    </div>
  );
}

export default TaskForm;
