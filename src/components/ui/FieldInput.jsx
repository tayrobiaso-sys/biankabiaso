export function FieldInput({ label, type = 'text', value, onChange, placeholder }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[11px] uppercase tracking-widest text-biaso-muted">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full py-3 px-0 text-sm text-biaso-black border-b border-biaso-border bg-transparent placeholder:text-biaso-border focus:border-biaso-black transition-colors duration-150" />
    </div>
  )
}
// Input com border-bottom apenas — mais elegante que box completo