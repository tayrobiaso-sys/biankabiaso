import { useState } from 'react'

// Formata WhatsApp: (00) 00000-0000
function maskPhone(value) {
  const digits = value.replace(/\D/g, '').slice(0, 11)
  if (digits.length <= 2)  return `(${digits}`
  if (digits.length <= 7)  return `(${digits.slice(0,2)}) ${digits.slice(2)}`
  if (digits.length <= 11) return `(${digits.slice(0,2)}) ${digits.slice(2,7)}-${digits.slice(7)}`
  return value
}

// Capitaliza nome
function maskName(value) {
  return value
    .replace(/[^a-zA-ZÀ-ÿ\s]/g, '')
    .replace(/\b\w/g, c => c.toUpperCase())
}

// Email: lowercase e sem espaço
function maskEmail(value) {
  return value.replace(/\s/g, '').toLowerCase()
}

// Validação
function getValidator(type) {
  if (type === 'tel') {
    return v => v.replace(/\D/g, '').length === 11
  }

  if (type === 'email') {
    return v => /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(v)
  }

  if (type === 'text') {
    return v => {
      const parts = v.trim().split(' ').filter(Boolean)
      return parts.length >= 2 && v.trim().length >= 4
    }
  }

  return () => true
}

export function FieldInput({
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
}) {
  const [touched, setTouched] = useState(false)

  function handleChange(e) {
    let v = e.target.value

    if (type === 'tel')   v = maskPhone(v)
    if (type === 'text')  v = maskName(v)
    if (type === 'email') v = maskEmail(v)

    const isValid = getValidator(type)(v)

    onChange(v, isValid)
  }

  function handleBlur() {
    setTouched(true)
  }

  const isValid   = getValidator(type)(value)
  const showError = touched && value.length > 0 && !isValid

  const errorMsg = {
    tel:   'Informe um WhatsApp válido com DDD — (00) 00000-0000',
    email: 'Informe um e-mail válido',
    text:  'Informe nome e sobrenome',
  }[type] || ''

  return (
    <div className="flex flex-col gap-2">
      <label className="text-[11px] uppercase tracking-widest text-biaso-muted">
        {label}
      </label>

      <input
        type={type === 'tel' ? 'tel' : type}
        inputMode={type === 'tel' ? 'numeric' : undefined}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={placeholder}
        className={`
          w-full py-3 px-0 text-[15px] text-biaso-black
          border-b bg-transparent
          placeholder:text-biaso-border
          transition-colors duration-150
          outline-none
          ${
            showError
              ? 'border-red-400'
              : isValid && value.length > 0
                ? 'border-biaso-gold'
                : 'border-biaso-border focus:border-biaso-gold'
          }
        `}
      />

      {showError && (
        <p className="text-[11px] text-red-400 leading-relaxed">
          {errorMsg}
        </p>
      )}
    </div>
  )
}