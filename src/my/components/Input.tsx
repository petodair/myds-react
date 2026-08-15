type InputProps = {
  label: string;
  id: string;
  type: React.HTMLInputTypeAttribute | undefined;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
};

function Input({ label, id, type, onChange, value }: InputProps) {
  return (
    <div className="flex flex-col space-y-1">
      <label htmlFor={id} className="text-white font-semibold">
        {label}:
      </label>
      <input
        id={id}
        type={type}
        className="border border-white/30 hover:border-white outline-none focus:border-white
        rounded-xl text-white caret-white"
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default Input;
