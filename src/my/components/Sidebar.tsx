type SidebarProps = {
    isOpen: boolean,
    onClose: () => void
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Overlay escuro/desfocado para o mobile (clicar nele fecha o menu) */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Container da Sidebar */}
      <aside 
        className={`
          /* Base (Mobile): Fixa, desliza da esquerda, fica por cima de tudo */
          fixed top-0 left-0 h-full z-50 w-64 p-5 flex flex-col gap-6 
          transition-transform duration-300 ease-in-out
          bg-white/20 backdrop-blur-xl border-r border-white/40 shadow-2xl rounded-r-3xl
          
          /* Desktop (md:): Volta a ser um item normal no layout e perde os arredondamentos da direita */
          md:relative md:translate-x-0 md:flex md:w-64 md:h-auto md:min-h-[80vh]
          md:bg-white/15 md:backdrop-blur-md md:border md:border-white/40 md:rounded-3xl md:shadow-lg
          
          /* Lógica de abrir/fechar no mobile */
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Botão de Fechar apenas no Mobile */}
        <button 
          onClick={onClose}
          className="md:hidden absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full border border-white/60 bg-glossy shadow-glossy text-white font-bold"
        >
          ✕
        </button>

        <div className="flex flex-col items-center gap-3 pb-4 border-b border-white/30 mt-4 md:mt-0">
          <div className="w-20 h-20 rounded-full border-2 border-white/60 shadow-glossy bg-gradient-to-b from-cyan-300 to-blue-500 flex items-center justify-center">
            {/* Logo 3D */}
            <span className="text-white font-bold text-xl drop-shadow-md">
              MyDS
            </span>
          </div>
          <h2 className="text-white font-semibold text-lg text-shadow-glossy">
            My Day Step-By-Step
          </h2>
        </div>

        <nav className="flex flex-col gap-3">
          <button className="w-full flex items-center gap-3 px-4 py-2 rounded-xl border border-white/60 bg-glossy shadow-glossy text-white font-medium hover:brightness-110 transition-all text-shadow-glossy">
            <span>📅</span> Hoje
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-2 rounded-xl border border-white/30 bg-white/10 hover:bg-white/20 transition-all text-white font-medium drop-shadow-md">
            <span>📁</span> Projetos
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-2 rounded-xl border border-white/30 bg-white/10 hover:bg-white/20 transition-all text-white font-medium drop-shadow-md">
            <span>⚙️</span> Ajustes
          </button>
        </nav>
      </aside>
    </>
  );
}