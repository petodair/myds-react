function Header({setIsSidebarOpen}:{setIsSidebarOpen:()=>void}) {
  return (
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
        onClick={setIsSidebarOpen}
        className="w-10 h-10 flex items-center justify-center rounded-xl border border-white/60 bg-glossy shadow-glossy text-white text-xl active:scale-95 transition-transform"
      >
        ☰
      </button>
    </header>
  );
}

export default Header;
