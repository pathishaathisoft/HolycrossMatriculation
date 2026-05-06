import { Mail, MapPin, Phone } from 'lucide-react'
import Container from '../common/Container.jsx'

function LinkColumn({ title, items = [] }) {
  return (
    <div>
      <h3 className="text-3xl font-bold text-white">{title}</h3>
      <div className="mt-6 space-y-3">
        {items.map((item) => (
          <a
            key={item}
            href="#contact"
            className="block rounded-xl border border-white/14 bg-white/6 px-4 py-3 text-base text-white/85 transition hover:border-[color:var(--color-gold-300)] hover:text-[color:var(--color-gold-300)]"
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  )
}

function SiteFooter({ footer }) {
  return (
    <footer id="footer" className="relative mt-8 overflow-hidden pt-16">
      <div className="absolute inset-0">
        <img src={footer.background} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[rgba(7,18,40,0.76)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(7,18,40,0.42)_0%,_rgba(7,18,40,0.72)_45%,_rgba(7,18,40,0.86)_100%)]" />
      </div>

      <Container className="relative pb-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.8fr_0.8fr_1fr]">
          <div>
            <div className="flex h-28 w-28 items-center justify-center rounded-full border-[6px] border-[color:var(--color-gold-300)] bg-white/10 backdrop-blur-sm">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[color:var(--color-navy-900)] font-serif text-3xl font-bold text-[color:var(--color-gold-300)]">
                IC
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-3xl font-bold text-white">Contact Us</h3>
              <div className="mt-5 space-y-3 text-base leading-8 text-white/85">
                <p className="font-semibold text-white">{footer.contact.name}</p>
                <div className="flex gap-3">
                  <MapPin className="mt-1 h-5 w-5 text-[color:var(--color-gold-300)]" />
                  <span>{footer.contact.address}</span>
                </div>
                <div className="flex gap-3">
                  <Phone className="mt-1 h-5 w-5 text-[color:var(--color-gold-300)]" />
                  <span>{footer.contact.phone}</span>
                </div>
                <div className="flex gap-3">
                  <Mail className="mt-1 h-5 w-5 text-[color:var(--color-gold-300)]" />
                  <span>{footer.contact.email}</span>
                </div>
              </div>
            </div>
          </div>

          <LinkColumn title="Quick Links" items={footer.quickLinks} />
          <LinkColumn title="Useful Links" items={footer.usefulLinks} />

          <div>
            <h3 className="text-3xl font-bold text-white">{footer.map.title}</h3>
            <div className="mt-6 overflow-hidden rounded-[1.75rem] border border-white/14 bg-white/10 p-4 backdrop-blur-sm">
              <div className="overflow-hidden rounded-[1.25rem] border border-white/10 bg-[linear-gradient(135deg,_rgba(255,255,255,0.12),_rgba(255,255,255,0.05))]">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-[1.25rem]">
                  <iframe
                    title={footer.map.title}
                    src="https://www.google.com/maps?q=Holy%20Cross%20Matriculation%20Higher%20Secondary%20School%20Alangudi&output=embed"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-full w-full border-0"
                  />
                </div>
                <div className="px-4 py-3 text-center">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-gold-300)]">
                    {footer.map.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/80">{footer.map.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/12 pt-6 text-sm text-white/80 lg:flex-row lg:items-center lg:justify-between">
          <p>{footer.bottomText.copyright}</p>
          <p>{footer.bottomText.credit}</p>
        </div>
      </Container>
    </footer>
  )
}

export default SiteFooter
