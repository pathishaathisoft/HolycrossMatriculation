import { useEffect, useMemo, useRef, useState } from 'react'
import { BadgeCheck, BookOpen, ShieldCheck, Users } from 'lucide-react'
import Container from '../common/Container.jsx'

const iconMap = {
  badge: BadgeCheck,
  'book-open': BookOpen,
  teacher: ShieldCheck,
  users: Users,
}

function parseStatValue(value) {
  const rawValue = String(value)
  const match = rawValue.match(/^(\d+(?:\.\d+)?)(.*)$/)

  if (!match) {
    return { target: 0, suffix: rawValue }
  }

  return {
    target: Number(match[1]),
    suffix: match[2],
  }
}

function useCountUpOnVisible(sectionRef, stats) {
  const [hasStarted, setHasStarted] = useState(false)
  const [counts, setCounts] = useState(() => stats.map(() => 0))
  const parsedStats = useMemo(() => stats.map((stat) => parseStatValue(stat.value)), [stats])

  useEffect(() => {
    const target = sectionRef.current

    if (!target) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 },
    )

    observer.observe(target)

    return () => observer.disconnect()
  }, [sectionRef])

  useEffect(() => {
    if (!hasStarted) return undefined

    const duration = 1600
    const startTime = performance.now()
    let animationFrame = 0

    const animate = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const easedProgress = 1 - Math.pow(1 - progress, 3)

      setCounts(parsedStats.map(({ target }) => Math.round(target * easedProgress)))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [hasStarted, parsedStats])

  return parsedStats.map((stat, index) => `${counts[index]}${stat.suffix}`)
}

function StatsSection({ section }) {
  const sectionRef = useRef(null)
  const animatedValues = useCountUpOnVisible(sectionRef, section.stats)

  return (
    <section ref={sectionRef} className="relative py-18 lg:py-24">
      <div className="absolute inset-0">
        <img src={section.background} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[rgba(8,26,58,0.72)]" />
      </div>

      <Container className="relative">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {section.stats.map((stat, index) => {
            const Icon = iconMap[stat.icon] ?? BadgeCheck

            return (
              <div
                key={stat.label}
                className="rounded-[1.75rem] border border-white/15 bg-white/6 px-6 py-8 text-center text-white backdrop-blur-sm"
              >
                <div className="mx-auto flex h-18 w-18 items-center justify-center rounded-full border border-[color:var(--color-gold-300)] text-[color:var(--color-gold-300)]">
                  <Icon className="h-8 w-8" />
                </div>
                <p className="mt-5 text-5xl font-bold">{animatedValues[index]}</p>
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
