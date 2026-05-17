function MainHeader({ brand, schoolLevelCards = [] }) {
  return (
    <header className="relative overflow-hidden border-b border-[color:var(--color-line)] bg-white">
      <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,_var(--color-gold-500),_var(--color-gold-300),_var(--color-gold-500))]" />
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-6 sm:px-6 sm:py-8 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-8 lg:px-8">
        <div className="mx-auto flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-[6px] border-[color:var(--color-gold-300)] bg-[radial-gradient(circle_at_top,_#ffffff,_#dce8f7)] shadow-[var(--shadow-card)] sm:h-28 sm:w-28 lg:mx-0">
          <img
            src={brand.logo}
            alt={brand?.name ? `${brand.name} logo` : "Institution logo"}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="space-y-2 text-center lg:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[color:var(--color-gold-500)] sm:text-sm sm:tracking-[0.3em]">
            {brand.preTitle}
          </p>
          <div>
            <h2 className="font-serif text-2xl font-bold leading-tight text-[color:var(--color-navy-950)] sm:text-3xl lg:text-4xl">
              {brand.name}
            </h2>
            <p className="mt-2 text-sm leading-6 text-[color:var(--color-ink-700)] sm:mt-3 sm:text-base sm:leading-7 lg:text-lg">
              {brand.description}
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2.5 lg:justify-start">
            {brand.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[color:var(--color-sand-50)] px-3 py-1.5 text-xs font-semibold text-[color:var(--color-navy-900)] sm:px-4 sm:py-2 sm:text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:gap-3 sm:grid-cols-4 lg:grid-cols-2">
          {schoolLevelCards.map((badge) => (
            <div
              key={badge.label}
              className={`group flex min-h-18 min-w-20 flex-col items-center justify-center rounded-2xl border px-2.5 py-3 text-center shadow-sm transition duration-300 sm:min-h-20 sm:min-w-24 sm:px-3 sm:py-4 ${
                badge.isActive
                  ? 'border-[color:var(--color-gold-500)] bg-white shadow-[0_14px_24px_rgba(13,39,87,0.14)] ring-1 ring-[rgba(199,154,43,0.18)]'
                  : 'border-[color:var(--color-line)] bg-[color:var(--color-sand-50)] hover:-translate-y-1 hover:border-[color:var(--color-gold-300)] hover:bg-white hover:shadow-[0_14px_24px_rgba(13,39,87,0.14)]'
              }`}
            >
              <span
                className={`font-serif font-bold leading-tight sm:text-lg ${
                  badge.shortLabel.length > 8 ? 'text-sm sm:text-base' : 'text-base'
                } ${badge.isActive ? 'text-[color:var(--color-gold-500)]' : 'text-[color:var(--color-navy-900)] group-hover:text-[color:var(--color-gold-500)]'}`}
              >
                {badge.shortLabel}
              </span>
              <span
                className={`mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] sm:text-[11px] sm:tracking-[0.22em] ${
                  badge.isActive
                    ? 'text-[color:var(--color-navy-900)]'
                    : 'text-[color:var(--color-ink-700)] group-hover:text-[color:var(--color-navy-900)]'
                }`}
              >
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}

export default MainHeader
