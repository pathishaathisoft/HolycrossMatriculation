import { useState } from 'react'
import { X } from 'lucide-react'
import Button from '../common/Button.jsx'

function AnnouncementPoster({ poster }) {
  return (
    <div className="relative mx-auto w-full max-w-[460px] overflow-hidden rounded-[1.5rem] bg-[color:var(--color-navy-950)] shadow-[0_18px_40px_rgba(8,26,58,0.22)] sm:rounded-[2rem]">
      <div className="relative aspect-[4/5] bg-[color:var(--color-sand-50)]">
        <img
          src={poster.image}
          alt={poster.alt || poster.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(8,26,58,0.08)_0%,_rgba(8,26,58,0.16)_46%,_rgba(8,26,58,0.88)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--color-gold-300)]">
            {poster.eyebrow}
          </p>
          <h3 className="mt-2 font-serif text-2xl font-bold leading-tight sm:text-3xl">
            {poster.title}
          </h3>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {(poster.stats || []).slice(0, 4).map((stat) => (
              <div key={stat.label} className="rounded-[0.8rem] bg-white/14 px-3 py-2 backdrop-blur-sm">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/72">
                  {stat.label}
                </p>
                <p className="mt-1 text-base font-bold">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function AnnouncementModal({ announcement }) {
  const [isOpen, setIsOpen] = useState(announcement?.active)

  if (!announcement?.active || !isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-[rgba(7,17,38,0.72)] p-3 backdrop-blur-sm sm:items-center sm:p-4">
      <div className="relative my-auto max-h-[94vh] w-full max-w-5xl overflow-hidden rounded-[1.5rem] bg-white shadow-[0_30px_80px_rgba(7,17,38,0.45)] sm:rounded-[2rem]">
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--color-navy-950)] text-white sm:right-4 sm:top-4 sm:h-11 sm:w-11"
          aria-label="Close announcement"
        >
          <X className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>

        <div className="grid max-h-[94vh] overflow-y-auto lg:grid-cols-[0.95fr_1.05fr] lg:overflow-hidden">
          <div className="p-3 sm:p-4 md:p-6">
            <AnnouncementPoster
              poster={{
                eyebrow: announcement.poster?.eyebrow || announcement.eyebrow,
                title: announcement.poster?.title || announcement.title,
                image: announcement.poster?.image || announcement.image,
                alt: announcement.poster?.alt || announcement.title,
                ribbon: announcement.poster?.ribbon || 'Celebration',
                score: announcement.poster?.score || 'Achievement',
                caption: announcement.poster?.caption || 'Template Notice Poster',
                highlight: announcement.poster?.highlight || 'Reusable Layout',
                stats: announcement.poster?.stats || [
                  { label: 'Rank', value: 'Top' },
                  { label: 'Batch', value: '2024-25' },
                ],
              }}
            />
          </div>

          <div className="flex flex-col justify-center px-5 py-8 sm:px-8 sm:py-10 md:px-10 lg:px-12">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[color:var(--color-gold-500)]">
              {announcement.eyebrow}
            </p>
            <h2 className="mt-4 font-serif text-2xl font-bold leading-tight text-[color:var(--color-navy-950)] sm:text-3xl md:text-4xl">
              {announcement.title}
            </h2>
            <div className="gold-divider mt-5" />
            <p className="mt-5 text-base leading-7 text-[color:var(--color-ink-700)] sm:mt-6 sm:text-lg sm:leading-8">
              {announcement.subtitle}
            </p>
            <p className="mt-4 text-sm leading-7 text-[color:var(--color-ink-700)] sm:text-base sm:leading-8">
              {announcement.body}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Button href={announcement.cta.href}>{announcement.cta.label}</Button>
              <Button as="button" type="button" variant="outline" onClick={() => setIsOpen(false)}>
                Close
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnnouncementModal
