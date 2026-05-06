function SectionTitle({ eyebrow, title, description, align = 'left', light = false }) {
  const isCenter = align === 'center'
  const textColor = light ? 'text-white' : 'text-[color:var(--color-navy-950)]'
  const bodyColor = light ? 'text-white/80' : 'text-[color:var(--color-ink-700)]'

  return (
    <div className={isCenter ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--color-gold-500)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`mt-3 font-serif text-3xl font-bold sm:text-4xl ${textColor}`}>{title}</h2>
      <div className={`mt-4 ${isCenter ? 'mx-auto' : ''} gold-divider`} />
      {description ? <p className={`mt-5 text-base leading-8 sm:text-lg ${bodyColor}`}>{description}</p> : null}
    </div>
  )
}

export default SectionTitle
