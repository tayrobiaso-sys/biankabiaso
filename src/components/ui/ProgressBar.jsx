// ProgressBar.jsx — fill em gold
export function ProgressBar({ value }) {
  return (
    <div className="w-full h-px bg-biaso-border">
      <div
        className="h-px bg-biaso-gold transition-all duration-500 ease-out"
        style={{ width: `${value}%` }}
      />
    </div>
  )
}