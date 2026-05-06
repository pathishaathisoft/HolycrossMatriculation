import {
  BadgeCheck,
  BookCopy,
  BookOpen,
  BriefcaseBusiness,
  CalendarDays,
  ClipboardList,
  FlaskConical,
  GraduationCap,
  Landmark,
  Library,
  LineChart,
  Monitor,
  ShieldCheck,
  UserRound,
  Users,
} from 'lucide-react'

const iconMap = {
  badge: BadgeCheck,
  'book-open': BookOpen,
  books: BookCopy,
  briefcase: BriefcaseBusiness,
  calendar: CalendarDays,
  chart: LineChart,
  clipboard: ClipboardList,
  flask: FlaskConical,
  graduation: GraduationCap,
  landmark: Landmark,
  library: Library,
  monitor: Monitor,
  teacher: ShieldCheck,
  user: UserRound,
  users: Users,
}

function IconCard({
  title,
  description,
  icon = 'badge',
  featured = false,
  className = '',
  light = false,
}) {
  const Icon = iconMap[icon] ?? BadgeCheck

  return (
    <article
      className={[
        'rounded-[1.75rem] border p-6 shadow-[var(--shadow-soft)] transition duration-200 hover:-translate-y-1',
        featured
          ? 'border-white/12 bg-[linear-gradient(140deg,_rgba(64,92,136,0.95),_rgba(11,33,72,0.94))] text-white'
          : light
            ? 'border-white/12 bg-white/10 text-white backdrop-blur-sm'
            : 'border-[color:var(--color-line)] bg-white text-[color:var(--color-ink-900)]',
        className,
      ].join(' ')}
    >
      <div
        className={[
          'flex h-16 w-16 items-center justify-center rounded-2xl border',
          featured || light
            ? 'border-[color:var(--color-gold-300)] bg-white/6 text-[color:var(--color-gold-300)]'
            : 'border-[color:var(--color-line)] bg-[color:var(--color-sand-50)] text-[color:var(--color-navy-800)]',
        ].join(' ')}
      >
        <Icon className="h-8 w-8" />
      </div>

      <h3 className="mt-5 text-2xl font-bold">{title}</h3>
      <p className={featured || light ? 'mt-3 text-base leading-8 text-white/78' : 'mt-3 text-base leading-8 text-[color:var(--color-ink-700)]'}>
        {description}
      </p>
    </article>
  )
}

export default IconCard
