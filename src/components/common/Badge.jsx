export default function Badge({ children, className = '' }) {
  return (
    <span
      className={`text-[12px] font-bold uppercase tracking-[1.2px] leading-4 text-primary ${className}`}
    >
      {children}
    </span>
  )
}
