import {
  BadgeCheck,
  BookOpen,
  CalendarDays,
  ClipboardList,
  GraduationCap,
  UserRound,
} from 'lucide-react'
import Button from '../common/Button.jsx'
import Container from '../common/Container.jsx'

const quickLinkIcons = {
  badge: BadgeCheck,
  book: BookOpen,
  calendar: CalendarDays,
  clipboard: ClipboardList,
  graduation: GraduationCap,
  user: UserRound,
}

function NewsInfoSection({ section, onStaffLoginClick }) {
  return (
    <Container className="py-16 lg:py-20">
      <div className="grid gap-5 rounded-[2rem] border border-[color:var(--color-line)] bg-white p-5 shadow-[var(--shadow-soft)] lg:grid-cols-[0.9fr_1.55fr_0.9fr] lg:p-6">
        <div className="rounded-[1.5rem] border border-[color:var(--color-line)] bg-[color:var(--color-sand-50)]">
          <div className="rounded-t-[1.5rem] bg-[color:var(--color-navy-950)] px-6 py-5">
            <h3 className="text-2xl font-bold text-white">Latest News</h3>
          </div>
          <div className="space-y-4 p-6">
            {section.latestNews.map((item) => (
              <article key={item.title} className="rounded-2xl border border-[color:var(--color-line)] bg-white p-4">
                <div className="inline-flex rounded-full bg-[rgba(199,154,43,0.12)] px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--color-gold-500)]">
                  {item.tag}
                </div>
                <p className="mt-3 text-lg font-semibold leading-7 text-[color:var(--color-navy-900)]">
                  {item.title}
                </p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--color-ink-700)]">
                  {item.date}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[1.5rem] border border-[color:var(--color-line)] bg-white p-6 sm:p-8">
          <div className="absolute inset-0 flex items-center justify-center text-[clamp(3rem,8vw,8rem)] font-bold tracking-[0.25em] text-[rgba(13,39,87,0.05)]">
            {section.visionMission.watermark}
          </div>
          <div className="relative">
            <h3 className="font-serif text-3xl font-bold text-[color:var(--color-navy-950)] sm:text-4xl">
              {section.visionMission.heading}
            </h3>
            <div className="gold-divider mt-4" />

            <div className="mt-8 space-y-8">
              <div>
                <h4 className="text-2xl font-bold text-[color:var(--color-navy-900)]">Vision</h4>
                <ul className="mt-4 space-y-4">
                  {section.visionMission.vision.map((item) => (
                    <li key={item} className="flex gap-3 text-base leading-8 text-[color:var(--color-ink-700)]">
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[color:var(--color-gold-500)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-2xl font-bold text-[color:var(--color-navy-900)]">Mission</h4>
                <ul className="mt-4 space-y-4">
                  {section.visionMission.mission.map((item) => (
                    <li key={item} className="flex gap-3 text-base leading-8 text-[color:var(--color-ink-700)]">
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[color:var(--color-gold-500)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[1.5rem] border border-[color:var(--color-line)] bg-[color:var(--color-sand-50)]">
          <div className="rounded-t-[1.5rem] bg-[color:var(--color-navy-950)] px-6 py-5">
            <h3 className="text-2xl font-bold text-white">Online Registration</h3>
          </div>
          <div className="space-y-4 p-6">
            {section.quickLinks.map((link) => {
              const Icon = quickLinkIcons[link.icon] ?? UserRound
              const isStaffLoginLink = link.href === '#staff-login'

              return (
                <Button
                  key={link.label}
                  as={isStaffLoginLink ? 'button' : 'a'}
                  href={isStaffLoginLink ? undefined : link.href}
                  type={isStaffLoginLink ? 'button' : undefined}
                  onClick={isStaffLoginLink ? onStaffLoginClick : undefined}
                  variant="dark"
                  className="w-full justify-center gap-2 rounded-xl px-4 py-4 text-sm tracking-[0.14em]"
                >
                  <Icon className="h-4 w-4" />
                  {link.label}
                </Button>
              )
            })}
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {section.noticeColumns.map((column) => (
          <div key={column.title} className="rounded-[1.75rem] border border-[color:var(--color-line)] bg-white shadow-[var(--shadow-soft)]">
            <div className="rounded-t-[1.75rem] bg-[color:var(--color-navy-950)] px-6 py-6">
              <h3 className="text-center text-2xl font-bold text-white">{column.title}</h3>
            </div>
            <div className="flex min-h-[240px] flex-col justify-between p-6">
              <div className="space-y-5">
                {column.items.map((item) => (
                  <div key={item} className="flex gap-3 text-base leading-7 text-[color:var(--color-ink-700)]">
                    <span className="mt-1.5 h-3 w-3 rounded-full bg-[color:var(--color-gold-500)]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <a
                href="#all-notices"
                className="mt-8 text-base font-semibold text-[color:var(--color-navy-900)] transition hover:text-[color:var(--color-gold-500)]"
              >
                View all
              </a>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default NewsInfoSection
