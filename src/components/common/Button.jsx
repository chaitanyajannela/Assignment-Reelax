const variants = {
  primary:
    'bg-primary text-white font-semibold hover:opacity-95',
  outline:
    'border border-primary-muted text-primary font-bold bg-white hover:bg-primary/5',
  ghost:
    'border border-border text-heading font-bold bg-white hover:bg-gray-50',
  pill:
    'bg-primary-bg border border-primary-border-light text-primary font-bold rounded-pill hover:bg-primary/10',
}

export default function Button({
  children,
  variant = 'primary',
  className = '',
  type = 'button',
  ...props
}) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center gap-2 rounded-input transition-opacity ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
