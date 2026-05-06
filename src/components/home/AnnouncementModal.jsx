import { useState } from 'react'
import { X } from 'lucide-react'
import Button from '../common/Button.jsx'

function AnnouncementPoster({ poster }) {
  return (
    <div className="relative mx-auto flex w-full max-w-[420px] justify-center overflow-hidden rounded-[1.6rem] bg-[linear-gradient(180deg,_#f7ebc3,_#b77c29)] p-3 sm:max-w-[460px] sm:rounded-[2rem] sm:p-4 md:p-6">
      <div className="relative w-full overflow-hidden rounded-[1.4rem] border-[3px] border-[rgba(138,29,29,0.22)] bg-[#f8eed0] shadow-[0_18px_40px_rgba(138,29,29,0.14)]">
        <div className="absolute inset-x-4 top-4 h-10 rounded-full bg-[#2f348f] sm:inset-x-6 sm:top-6 sm:h-12" />
        <div className="relative px-4 pb-4 pt-4 sm:px-5 sm:pt-5 md:px-6 md:pt-6">
          <div className="mx-auto flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:items-start sm:gap-4 sm:text-left">
            <div className="h-10 w-10 shrink-0 rounded-full border-2 border-white/80 bg-[color:var(--color-gold-300)] shadow-[0_0_0_4px_rgba(146,33,33,0.95)] sm:h-12 sm:w-12" />
            <div className="flex-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#fff4c7]">
                {poster.eyebrow}
              </p>
              <h3 className="mt-2 font-serif text-xl font-bold leading-tight text-[#9d1d1d] sm:mt-3 sm:text-2xl md:text-[2rem]">
                {poster.title}
              </h3>
            </div>
          </div>

          <div className="mt-4 rounded-[1.2rem] border-[3px] border-[#1c6ca8] bg-[rgba(255,255,255,0.45)] p-3 sm:mt-5 sm:rounded-[1.4rem] sm:p-4">
            <div className="grid gap-4 sm:grid-cols-[0.85fr_1.15fr]">
              <div className="overflow-hidden rounded-[1.1rem] border-[3px] border-[#1c6ca8] bg-white shadow-[0_8px_18px_rgba(0,0,0,0.12)]">
                <img
                  src={poster.image}
                  alt={poster.alt || poster.title}
                  className="h-72 w-full object-cover sm:h-full"
                />
              </div>

              <div className="flex flex-col justify-between gap-3">
                <div className="rounded-[1.1rem] bg-[#0f8a4b] px-4 py-3 text-center text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f5f18a]">
                    {poster.ribbon}
                  </p>
                  <p className="mt-1 font-serif text-lg font-bold leading-tight sm:text-xl">
                    {poster.score}
                  </p>
                </div>

                <div className="rounded-[1.1rem] bg-[#fff2a8] px-4 py-3 text-center text-[#8a1d1d] shadow-[inset_0_0_0_1px_rgba(138,29,29,0.14)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em]">
                    {poster.caption}
                  </p>
                  <p className="mt-1 font-serif text-base font-bold sm:text-lg">{poster.highlight}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2 sm:mt-4 sm:gap-3">
            {(poster.stats || []).map((stat) => (
              <div
                key={stat.label}
                className="rounded-[1rem] bg-white/70 px-2 py-2 text-center shadow-[0_6px_14px_rgba(0,0,0,0.08)] sm:px-3"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#a44a10]">
                  {stat.label}
                </p>
                <p className="mt-1 font-serif text-base font-bold text-[#7e1515] sm:text-lg">
                  {stat.value}
                </p>
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
