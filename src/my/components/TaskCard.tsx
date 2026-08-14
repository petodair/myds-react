import Button from "./Button";

type TaskCardProps = {
  title: string;
  checked: boolean;
  description: string;
  hour: string;
};

export function TaskCard({ title, checked, description, hour }: TaskCardProps) {
  return (
    <article
      className="w-full p-5 bg-white/15 backdrop-blur-md border border-white/40 rounded-2xl shadow-lg flex 
    flex-col gap-3 hover:bg-white/20 transition-colors cursor-pointer"
    >
      {/* Cabeçalho do Card */}
      <div className="flex justify-between items-start">
        <h3 className="text-white font-bold text-xl text-shadow-glossy">
          {title}
        </h3>

        {/* Tag de Status Glossy */}
        <span className="px-3 py-1 rounded-full text-xs font-semibold text-white bg-glossy border border-white/60 shadow-glossy drop-shadow-md">
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
          <Button>{checked ? "Desconcluír" : "Concluír"}</Button>
          <Button>Excluir</Button>
        </div>
      </div>
    </article>
  );
}
