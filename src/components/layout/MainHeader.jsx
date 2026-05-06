import photoFour from '../../assets/project-photos/photo-4 (2).jpeg'

function MainHeader({ brand, accreditationBadges = [] }) {
  return (
    <header className="relative overflow-hidden border-b border-[color:var(--color-line)] bg-white">
      <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,_var(--color-gold-500),_var(--color-gold-300),_var(--color-gold-500))]" />
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-6 sm:px-6 sm:py-8 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-8 lg:px-8">
        <div className="mx-auto flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-[6px] border-[color:var(--color-gold-300)] bg-[radial-gradient(circle_at_top,_#ffffff,_#dce8f7)] shadow-[var(--shadow-card)] sm:h-28 sm:w-28 lg:mx-0">
          <img
            src={photoFour}
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
          {accreditationBadges.map((badge) => (
            <div
              key={badge.label}
              className="flex min-h-18 min-w-20 flex-col items-center justify-center rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-sand-50)] px-2.5 py-3 text-center shadow-sm sm:min-h-20 sm:min-w-24 sm:px-3 sm:py-4"
            >
              <span className="font-serif text-base font-bold text-[color:var(--color-navy-900)] sm:text-lg">
                {badge.shortLabel}
              </span>
              <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[color:var(--color-ink-700)] sm:text-[11px] sm:tracking-[0.22em]">
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
