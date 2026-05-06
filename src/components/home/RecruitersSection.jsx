import { useState } from 'react'
import Container from '../common/Container.jsx'
import SectionTitle from '../common/SectionTitle.jsx'

function RecruitersSection({ section }) {
  const [activePhotoId, setActivePhotoId] = useState(section.photos[0]?.id)

  const activePhoto =
    section.photos.find((photo) => photo.id === activePhotoId) ?? section.photos[0]

  return (
    <section className="relative overflow-hidden py-16 lg:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(240,191,76,0.12)_0,_transparent_28%),linear-gradient(180deg,_#fbfbfb_0%,_#f6f2ea_100%)]" />
      <Container className="relative">
        <SectionTitle
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
          align="center"
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <article className="overflow-hidden rounded-[2rem] border border-[color:var(--color-line)] bg-white shadow-[var(--shadow-card)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(7,17,38,0.12)]">
            <div className="aspect-[4/5] w-full overflow-hidden bg-[color:var(--color-sand-50)] sm:aspect-[5/4] lg:aspect-[4/4.8]">
              <img
                src={activePhoto.image}
                alt={activePhoto.title}
                className="h-full w-full object-cover object-center transition duration-500 hover:scale-105"
              />
            </div>

            <div className="px-6 py-6 sm:px-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[color:var(--color-gold-500)]">
                Main Display
              </p>
              <h3 className="mt-3 font-serif text-3xl font-bold text-[color:var(--color-navy-950)]">
                {activePhoto.title}
              </h3>
              <p className="mt-4 text-base leading-8 text-[color:var(--color-ink-700)]">
                {activePhoto.description}
              </p>
            </div>
          </article>

          <div className="rounded-[2rem] border border-[color:var(--color-line)] bg-white/95 p-5 shadow-[var(--shadow-soft)] sm:p-6">
            <h3 className="font-serif text-2xl font-bold text-[color:var(--color-navy-950)]">
              Gallery Photos
            </h3>
            <div className="gold-divider mt-4" />

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {section.photos.map((photo, index) => (
                <button
                  key={photo.id}
                  type="button"
                  onClick={() => setActivePhotoId(photo.id)}
                  className={[
                    'group overflow-hidden rounded-[1.5rem] border text-left transition duration-300 hover:-translate-y-0.5',
                    activePhoto.id === photo.id
                      ? 'border-[color:var(--color-gold-500)] bg-[rgba(199,154,43,0.08)] shadow-[var(--shadow-soft)]'
                      : 'border-[color:var(--color-line)] bg-[color:var(--color-surface)] hover:border-[color:var(--color-gold-300)] hover:shadow-[0_16px_30px_rgba(7,17,38,0.08)]',
                  ].join(' ')}
                >
                  <div className="grid min-h-36 grid-cols-[120px_1fr]">
                    <div className="overflow-hidden bg-[color:var(--color-sand-50)]">
                      <img
                        src={photo.image}
                        alt={photo.title}
                        className="h-full w-full object-cover object-center transition duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-col justify-center px-4 py-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--color-gold-500)]">
                        {index === 0 ? 'Primary Image' : `Gallery Image ${index}`}
                      </p>
                      <p className="mt-2 text-lg font-bold text-[color:var(--color-navy-900)]">
                        {photo.title}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-[color:var(--color-ink-700)]">
                        {photo.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default RecruitersSection
