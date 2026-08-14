import Button from "./Button";

type TaskCardProps = {
  title: string;
  checked: boolean;
  description: string;
  hour: string;
  setTaskToDelete: () => void;
  setTaskToCheck: () => void;
};

export function TaskCard({
  title,
  checked,
  description,
  hour,
  setTaskToDelete,
  setTaskToCheck,
}: TaskCardProps) {
  return (
    <article
      className="w-full p-5 bg-white/15 backdrop-blur-md border border-white/40 rounded-2xl shadow-lg flex 
    flex-col gap-3 hover:bg-white/20 transition-colors cursor-pointer"
    >
      <div className="flex justify-between items-start">
        <h3 className="text-white font-bold text-xl text-shadow-glossy">
          {title}
        </h3>

        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold text-white 
            ${checked ? "bg-linear-to-b from-emerald-400 to-emerald-600" : "bg-glossy"}
           border border-white/60 shadow-glossy drop-shadow-md`}
        >
          {checked ? "Conluído" : "Em progresso"}
        </span>
      </div>

      {/* Corpo da Tarefa */}
      <p className="text-blue-50/90 text-sm leading-relaxed drop-shadow-sm">
        {description}
      </p>

      <hr className="border-white/20 my-1" />

      {/* Rodapé do Card */}
      <div className="flex justify-between items-center">
        <span className="text-white/80 text-sm font-medium drop-shadow-sm flex items-center gap-2">
          <span>🕒</span> {hour}
        </span>

        <div className="space-x-3">
          <Button onClick={setTaskToCheck}>
            {checked ? "Desconcluír" : "Concluír"}
          </Button>
          <Button onClick={setTaskToDelete}>Excluir</Button>
        </div>
      </div>
    </article>
  );
}
