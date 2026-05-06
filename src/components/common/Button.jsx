function Button({
  as = 'a',
  href = '#',
  children,
  variant = 'primary',
  className = '',
  ...props
}) {
  const Component = as

  const baseClasses =
    'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-[0.12em] uppercase transition duration-200'

  const variantClasses = {
    primary:
      'bg-[linear-gradient(135deg,_var(--color-gold-500),_var(--color-gold-300))] text-[color:var(--color-navy-950)] hover:brightness-105',
    secondary:
      'border border-white/25 bg-white/10 text-white hover:border-[color:var(--color-gold-300)] hover:text-[color:var(--color-gold-300)]',
    outline:
      'border border-[color:var(--color-line)] bg-white text-[color:var(--color-navy-900)] hover:border-[color:var(--color-gold-500)] hover:text-[color:var(--color-navy-950)]',
    dark:
      'bg-[color:var(--color-navy-950)] text-white hover:bg-[color:var(--color-navy-900)]',
  }

  return (
    <Component
      href={Component === 'a' ? href : undefined}
      className={`${baseClasses} ${variantClasses[variant] ?? variantClasses.primary} ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}

export default Button
