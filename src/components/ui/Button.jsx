const variants = {
  primary: `bg-biaso-black text-biaso-white text-[11px] tracking-[.1em] uppercase
  hover:opacity-80 disabled:opacity-30`,
  ghost:   `border border-biaso-border text-biaso-muted
    hover:border-biaso-border-hover hover:text-biaso-black`,
  text:    'text-biaso-muted hover:text-biaso-black',
}

export function Button({
  children, variant = 'primary',
  disabled, onClick, fullWidth = true, className = ''
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        py-3.5 px-5 text-sm font-medium tracking-wide
        transition-all duration-150
        disabled:cursor-not-allowed
        ${fullWidth ? 'w-full' : ''}
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  )
}