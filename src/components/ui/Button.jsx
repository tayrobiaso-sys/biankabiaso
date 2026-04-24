const variants = {
  primary: `
    bg-biaso-dark text-biaso-white
    hover:bg-biaso-dark2
    disabled:opacity-30
  `,
  gold: `
    bg-biaso-gold text-biaso-dark
    hover:bg-biaso-gold2
    disabled:opacity-30
  `,
  ghost: `
    border border-biaso-border text-biaso-muted
    hover:border-biaso-border-hover hover:text-biaso-black
  `,
  text: 'text-biaso-muted hover:text-biaso-black',
}

export function Button({
  children,
  variant = 'primary',
  disabled,
  onClick,
  fullWidth = true,
  className = '',
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`
        py-4 px-5 text-[13px] font-medium tracking-wide
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