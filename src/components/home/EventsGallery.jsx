import Container from '../common/Container.jsx'
import SectionTitle from '../common/SectionTitle.jsx'

function EventsGallery({ section }) {
  return (
    <Container className="py-16 lg:py-20">
      <SectionTitle title={section.title} align="center" />
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {section.items.map((item) => (
          <article
            key={item.title}
            className="overflow-hidden rounded-[1.75rem] border border-[color:var(--color-line)] bg-white shadow-[var(--shadow-soft)]"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition duration-300 hover:scale-105"
              />
            </div>
            <div className="px-5 py-5">
              <h3 className="text-2xl font-bold text-[color:var(--color-navy-900)]">{item.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </Container>
  )
}

export default EventsGallery
