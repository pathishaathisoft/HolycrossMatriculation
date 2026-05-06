import { BadgeCheck, BookOpen, ShieldCheck, Users } from 'lucide-react'
import Container from '../common/Container.jsx'

const iconMap = {
  badge: BadgeCheck,
  'book-open': BookOpen,
  teacher: ShieldCheck,
  users: Users,
}

function StatsSection({ section }) {
  return (
    <section className="relative py-18 lg:py-24">
      <div className="absolute inset-0">
        <img src={section.background} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[rgba(8,26,58,0.72)]" />
      </div>

      <Container className="relative">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {section.stats.map((stat) => {
            const Icon = iconMap[stat.icon] ?? BadgeCheck

            return (
              <div
                key={stat.label}
                className="rounded-[1.75rem] border border-white/15 bg-white/6 px-6 py-8 text-center text-white backdrop-blur-sm"
              >
                <div className="mx-auto flex h-18 w-18 items-center justify-center rounded-full border border-[color:var(--color-gold-300)] text-[color:var(--color-gold-300)]">
                  <Icon className="h-8 w-8" />
                </div>
                <p className="mt-5 text-5xl font-bold">{stat.value}</p>
                <p className="mt-3 text-base font-semibold uppercase tracking-[0.18em] text-white/80">
                  {stat.label}
                </p>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default StatsSection
