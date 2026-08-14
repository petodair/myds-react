type ButtonProps = {
  children: React.ReactNode;
  onClick?: ()=>void;
};

function Button({ children, onClick }: ButtonProps) {
  return (
    <button onClick={onClick}
      className="px-5 py-1.5 rounded-full border border-white/60 bg-glossy 
    shadow-glossy text-white font-medium hover:brightness-110 active:scale-95 
    transition-all text-shadow-glossy"
    >
      {children}
    </button>
  );
}

export default Button;
