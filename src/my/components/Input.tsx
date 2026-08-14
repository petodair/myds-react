type InputProps = {
    label:string,
    id:string,
    type: React.HTMLInputTypeAttribute | undefined
}

function Input({label,id,type}:InputProps) {
  return (
    <div className="flex flex-col space-y-1">
      <label htmlFor={id} className="text-white font-semibold">
        {label}:
      </label>
      <input
        id={id}
        type={type}
        className="border border-white/30 rounded-2xl"
      />
    </div>
  );
}

export default Input;
