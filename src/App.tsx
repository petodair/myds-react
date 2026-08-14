import { useState } from "react";
import { Sidebar } from "./my/components/Sidebar";
import { TaskCard } from "./my/components/TaskCard";
import Button from "./my/components/Button";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div
      className="min-h-screen flex justify-center items-start p-4 md:p-8 bg-cover bg-center bg-fixed bg-no-repeat"
      style={{ backgroundImage: "url('/bg-1.png')" }}
    >
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-4 md:gap-8">
        {/* Header */}
        <header className="md:hidden flex justify-between items-center p-3 bg-white/15 backdrop-blur-md border border-white/40 rounded-2xl shadow-lg">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-linear-to-b from-cyan-300 to-blue-500 border border-white/60 shadow-glossy flex items-center justify-center">
              <span className="text-white font-bold text-xs">M</span>
            </div>
            <span className="text-white font-bold text-lg text-shadow-glossy">
              MyDS
            </span>
          </div>

          {/* Buttom Glossy Hamburguer */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="w-10 h-10 flex items-center justify-center rounded-xl border border-white/60 bg-glossy shadow-glossy text-white text-xl active:scale-95 transition-transform"
          >
            ☰
          </button>
        </header>

        {/* Sidebar */}
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        <main className="flex-1 flex flex-col gap-5">
          {/* Header do Feed */}
          <header className="flex justify-between items-center bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl p-4 shadow-sm">
            <h1 className="text-white text-2xl font-bold text-shadow-glossy">
              Tarefas de Hoje
            </h1>
            <Button>+ Nova Tarefa</Button>
          </header>

          {/* Lista de Tarefas */}
          <div className="flex flex-col gap-4">
            <TaskCard
              description="Verificar a nova implementação do Tailwind v4 e os componentes da sidebar."
              hour="11:30"
              checked={false}
              title="Revisar Código React"
            />
            <TaskCard
              description="Marcar reunião com a equipe sobre os próximos passos do projeto myds."
              hour="15:00"
              checked={false}
              title="Marcar reunião"
            />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
