import Container from '../common/Container.jsx'
import SectionTitle from '../common/SectionTitle.jsx'

function EventsGallery({ section }) {
  return (
    <Container className="py-16 lg:py-20">
      <SectionTitle title={section.title} align="center" />
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {section.items.map((item) => (
          <article
            key={item.title}
            className="group relative min-h-[320px] overflow-hidden rounded-[1.5rem] border border-white/20 bg-[color:var(--color-navy-950)] shadow-[var(--shadow-soft)] sm:min-h-[360px] lg:min-h-[420px]"
          >
            <img
              src={item.image}
              alt={item.alt || item.title}
              className="absolute inset-0 h-full w-full object-cover transition duration-500 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(8,26,58,0.18)_0%,_rgba(8,26,58,0.5)_48%,_rgba(8,26,58,0.88)_100%)] transition duration-300 group-hover:bg-[linear-gradient(180deg,_rgba(8,26,58,0.1)_0%,_rgba(8,26,58,0.46)_48%,_rgba(8,26,58,0.92)_100%)]" />
            <div className="relative flex h-full min-h-[320px] flex-col justify-end p-5 text-white sm:min-h-[360px] sm:p-6 lg:min-h-[420px]">
              <div className="h-1 w-14 rounded-full bg-[color:var(--color-gold-300)]" />
              <h3 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl">{item.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </Container>
  )
}

export default EventsGallery
