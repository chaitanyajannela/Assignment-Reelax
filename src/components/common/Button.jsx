const variantStyles = {
  primary: {
    base: 'bg-primary text-white font-semibold hover:brightness-105 active:brightness-95',
    ring: 'focus-visible:ring-primary',
  },
  upgrade: {
    base: 'bg-upgrade text-white font-bold hover:brightness-105 active:brightness-95',
    ring: 'focus-visible:ring-upgrade',
  },
  campaign: {
    base: 'bg-campaign text-white font-bold hover:brightness-105 active:brightness-95',
    ring: 'focus-visible:ring-campaign',
  },
  outline: {
    base: 'border border-primary-muted bg-white font-bold text-primary hover:bg-primary/5 active:bg-primary/10',
    ring: 'focus-visible:ring-primary',
  },
  ghost: {
    base: 'border border-border bg-white font-bold text-heading hover:bg-gray-50 active:bg-gray-100',
    ring: 'focus-visible:ring-gray-400',
  },
  pill: {
    base: 'rounded-pill border border-primary-border-light bg-primary-bg font-bold text-primary hover:bg-primary/10 active:bg-primary/15',
    ring: 'focus-visible:ring-primary',
  },
}

export default function Button({
  children,
  variant = 'primary',
  className = '',
  type = 'button',
  ...props
}) {
  const styles = variantStyles[variant] ?? variantStyles.primary

  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center gap-2 rounded-nav transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 ${styles.base} ${styles.ring} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
