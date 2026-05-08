import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Button from '../common/Button.jsx'
import Container from '../common/Container.jsx'

function HeroSlider({ slides = [] }) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (!slides.length) return undefined

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length)
    }, 6000)

    return () => window.clearInterval(timer)
  }, [slides.length])

  if (!slides.length) return null

  const activeSlide = slides[activeIndex]

  const goTo = (index) => setActiveIndex(index)
  const goPrev = () => setActiveIndex((current) => (current - 1 + slides.length) % slides.length)
  const goNext = () => setActiveIndex((current) => (current + 1) % slides.length)

  return (
    <section id="home" className="relative overflow-hidden bg-[color:var(--color-navy-950)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(217,180,91,0.22),_transparent_32%)]" />
      <Container className="relative py-6 sm:py-8 lg:py-10">
        <div className="grid overflow-hidden rounded-[2rem] bg-[color:var(--color-navy-950)] shadow-[var(--shadow-card)] lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col justify-center px-6 py-10 sm:px-8 lg:px-12 lg:py-14">
            <p className="text-sm font-semibold uppercase tracking-[0.34em] text-[color:var(--color-gold-300)]">
              {activeSlide.eyebrow}
            </p>
            <h1 className="mt-4 max-w-3xl font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[3.7rem]">
              {activeSlide.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
              {activeSlide.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={activeSlide.primaryAction.href}>{activeSlide.primaryAction.label}</Button>
              <Button href={activeSlide.secondaryAction.href} variant="secondary">
                {activeSlide.secondaryAction.label}
              </Button>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {activeSlide.stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/6 px-4 py-4">
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-white/65">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[360px] overflow-hidden lg:min-h-full">
            {slides.map((slide, index) => (
              <img
                key={slide.id}
                src={slide.image}
                alt={slide.title}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
                  index === activeIndex ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(8,26,58,0.05),_rgba(8,26,58,0.5))]" />

            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between gap-4">
              <div className="flex gap-2">
                {slides.map((slide, index) => (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => goTo(index)}
                    className={`h-3 rounded-full transition ${index === activeIndex ? 'w-10 bg-[color:var(--color-gold-300)]' : 'w-3 bg-white/45'}`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={goPrev}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-[rgba(8,26,58,0.4)] text-white transition hover:border-[color:var(--color-gold-300)]"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-[rgba(8,26,58,0.4)] text-white transition hover:border-[color:var(--color-gold-300)]"
                  aria-label="Next slide"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HeroSlider
