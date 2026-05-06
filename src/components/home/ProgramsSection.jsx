import { useMemo, useState } from 'react'
import {
  ArrowRight,
  Calculator,
  Palette,
  School,
  Swords,
  Sparkles,
  FlaskConical,
} from 'lucide-react'
import Container from '../common/Container.jsx'
import SectionTitle from '../common/SectionTitle.jsx'
import Button from '../common/Button.jsx'

const iconMap = {
  science: FlaskConical,
  sports: Swords,
  palette: Palette,
  calculator: Calculator,
  school: School,
}

function ProgramCard({ program }) {
  const Icon = iconMap[program.icon] ?? School

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-[color:var(--color-line)] bg-white shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1 hover:border-[color:var(--color-gold-300)] hover:shadow-[0_20px_50px_rgba(7,17,38,0.12)]">
      <div className="relative aspect-[16/10] overflow-hidden bg-[color:var(--color-sand-50)]">
        <img
          src={program.image}
          alt={program.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--color-navy-950)] shadow-sm">
          <Icon className="h-3.5 w-3.5 text-[color:var(--color-gold-500)]" />
          {program.category}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-serif text-2xl font-bold text-[color:var(--color-navy-950)]">
          {program.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-[color:var(--color-ink-700)] sm:text-base">
          {program.description}
        </p>
        <div className="mt-5">
          <Button as="a" href={program.cta.href} className="w-full sm:w-auto">
            {program.cta.label}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </article>
  )
}

function ProgramsSection({ section }) {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredPrograms = useMemo(() => {
    if (activeCategory === 'All') return section.programs
    return section.programs.filter((program) => program.category === activeCategory)
  }, [activeCategory, section.programs])

  return (
    <section
      id="programs"
      className="relative overflow-hidden py-16 lg:py-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(240,191,76,0.12)_0,_transparent_32%),linear-gradient(180deg,_#fbfbfb_0%,_#f4f6fb_100%)]" />
      <Container className="relative">
        <SectionTitle
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
          align="center"
        />

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {section.categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={[
                'rounded-full border px-4 py-2 text-sm font-semibold transition',
                activeCategory === category
                  ? 'border-[color:var(--color-gold-500)] bg-[color:var(--color-gold-500)] text-[color:var(--color-navy-950)] shadow-[0_10px_20px_rgba(240,191,76,0.22)]'
                  : 'border-[color:var(--color-line)] bg-white text-[color:var(--color-navy-900)] hover:border-[color:var(--color-gold-300)] hover:text-[color:var(--color-gold-500)]',
              ].join(' ')}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
          <article className="group overflow-hidden rounded-[2rem] border border-[color:var(--color-line)] bg-white shadow-[var(--shadow-card)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(7,17,38,0.12)]">
            <div className="grid h-full gap-0 md:grid-cols-[0.92fr_1.08fr]">
              <div className="relative min-h-[280px] overflow-hidden bg-[color:var(--color-navy-950)] md:min-h-full">
                <img
                  src={section.featured.image}
                  alt={section.featured.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(8,20,46,0.08),_rgba(8,20,46,0.7))]" />
                <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--color-navy-950)]">
                  <Sparkles className="h-3.5 w-3.5 text-[color:var(--color-gold-500)]" />
                  {section.featured.badge}
                </div>
              </div>

              <div className="flex h-full flex-col justify-between p-6 sm:p-8 lg:p-10">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[color:var(--color-gold-500)]">
                    {section.featured.category}
                  </p>
                  <h3 className="mt-3 font-serif text-3xl font-bold leading-tight text-[color:var(--color-navy-950)] sm:text-4xl">
                    {section.featured.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-base leading-8 text-[color:var(--color-ink-700)] sm:text-lg">
                    {section.featured.description}
                  </p>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {section.featured.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-sand-50)] px-4 py-3 text-center"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--color-gold-500)]">
                        {stat.label}
                      </p>
                      <p className="mt-1 font-serif text-lg font-bold text-[color:var(--color-navy-950)]">
                        {stat.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Button href={section.featured.cta.href}>{section.featured.cta.label}</Button>
                  <Button as="a" href="#contact" variant="outline">
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </article>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {filteredPrograms.length > 0 ? (
              filteredPrograms.map((program) => (
                <ProgramCard key={program.title} program={program} />
              ))
            ) : (
              <div className="col-span-full rounded-[1.75rem] border border-dashed border-[color:var(--color-line)] bg-white/85 px-6 py-12 text-center shadow-[var(--shadow-soft)]">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[color:var(--color-gold-500)]">
                  No Results
                </p>
                <h3 className="mt-3 font-serif text-2xl font-bold text-[color:var(--color-navy-950)]">
                  No programs match this filter
                </h3>
                <p className="mt-3 text-sm leading-7 text-[color:var(--color-ink-700)]">
                  Try switching back to <span className="font-semibold">All</span> or choose another category.
                </p>
                <div className="mt-6">
                  <Button as="button" type="button" onClick={() => setActiveCategory('All')}>
                    Show All Programs
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-[2rem] border border-[color:var(--color-line)] bg-[linear-gradient(135deg,_#0f1f42_0%,_#173d72_60%,_#f0bf4c_160%)] px-6 py-7 text-white shadow-[var(--shadow-card)] sm:px-8 sm:py-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--color-gold-300)]">
                Admissions Open
              </p>
              <h3 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">
                {section.cta.title}
              </h3>
              <p className="mt-4 text-base leading-8 text-white/85">
                {section.cta.description}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              {section.cta.actions.map((action) => (
                <Button
                  key={action.label}
                  as="a"
                  href={action.href}
                  variant={action.variant === 'outline' ? 'outline' : 'secondary'}
                  className={
                    action.variant === 'outline'
                      ? 'border-white/25 bg-white/10 text-white hover:border-[color:var(--color-gold-300)] hover:text-[color:var(--color-gold-300)]'
                      : 'bg-[linear-gradient(135deg,_var(--color-gold-500),_var(--color-gold-300))] text-[color:var(--color-navy-950)]'
                  }
                >
                  {action.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ProgramsSection
