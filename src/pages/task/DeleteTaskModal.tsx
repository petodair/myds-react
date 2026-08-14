import type Task from "../../types/Task";

interface DeleteTaskModalProps {
  task: Task | null;
  onClose: () => void;
  onConfirm: () => void;
}

export default function DeleteTaskModal({
  task,
  onClose,
  onConfirm,
}: DeleteTaskModalProps) {
  if (!task) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm">
      {/* Caixa do Modal */}
      <div className="bg-white/20 backdrop-blur-xl border border-white/40 shadow-2xl rounded-3xl p-6 w-full max-w-sm flex flex-col gap-4 scale-100 transition-all">
        <h2 className="text-white text-xl font-bold text-shadow-glossy flex items-center gap-2">
          <span>⚠️</span> Excluir Tarefa
        </h2>

        <p className="text-white/90 drop-shadow-sm leading-relaxed">
          Tem certeza que deseja excluir a tarefa{" "}
          <strong className="text-white">"{task.title}"</strong>? Esta ação não
          pode ser desfeita.
        </p>

        <div className="flex justify-end gap-3 mt-4">
          {/* Botão Cancelar */}
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-full border border-white/30 bg-white/10 hover:bg-white/20 transition-all text-white font-medium drop-shadow-md"
          >
            Cancelar
          </button>

          {/* Botão Excluir (Glossy Vermelho para indicar perigo) */}
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-full border border-red-300/60 bg-gradient-to-b from-red-400 to-red-600 shadow-glossy text-white font-medium hover:brightness-110 active:scale-95 transition-all text-shadow-glossy"
          >
            Sim, excluir
          </button>
        </div>
      </div>
    </div>
  );
}
