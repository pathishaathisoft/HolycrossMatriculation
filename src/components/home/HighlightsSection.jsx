import Container from '../common/Container.jsx'
import IconCard from '../common/IconCard.jsx'
import SectionTitle from '../common/SectionTitle.jsx'

function HighlightsSection({ section }) {
  return (
    <section className="bg-[color:var(--color-navy-950)] py-16 lg:py-20">
      <Container>
        <div className="grid overflow-hidden rounded-[2rem] bg-[color:var(--color-navy-950)] shadow-[var(--shadow-card)] lg:grid-cols-[0.92fr_1.08fr]">
          <div className="min-h-[420px] lg:min-h-full">
            <img src={section.image} alt={section.title} className="h-full w-full object-cover" />
          </div>
          <div className="px-6 py-10 sm:px-8 lg:px-12 lg:py-14">
            <SectionTitle
              title={section.title}
              description={section.description}
              light
            />

            <div className="mt-10 space-y-5">
              {section.items.map((item) => (
                <IconCard
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                  light
                  className="rounded-[1.5rem] px-5 py-5"
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HighlightsSection
