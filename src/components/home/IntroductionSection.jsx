import Container from '../common/Container.jsx'
import SectionTitle from '../common/SectionTitle.jsx'

function IntroductionSection({ section }) {
  return (
    <Container className="py-16 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
        <div className="overflow-hidden rounded-[2rem] shadow-[var(--shadow-card)]">
          <img src={section.image} alt={section.title} className="h-full w-full object-cover" />
        </div>

        <div>
          <SectionTitle eyebrow={section.eyebrow} title={section.title} />
          <div className="mt-6 space-y-6 text-base leading-8 text-[color:var(--color-ink-700)] sm:text-lg">
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
}

export default IntroductionSection
