import { useState } from 'react'
import { ChevronDown, Menu, Search, X } from 'lucide-react'

function Navbar({ links = [], cta }) {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  const sectionFallbacks = {
    '#home': '#home',
    '#about': '#introduction',
    '#overview': '#introduction',
    '#leadership': '#highlights',
    '#academics': '#programs',
    '#departments': '#programs',
    '#programs': '#programs',
    '#admissions': '#contact',
    '#how-to-apply': '#contact',
    '#scholarships': '#contact',
    '#administration': '#stats',
    '#activities': '#events',
    '#facilities': '#highlights',
    '#committees': '#footer',
    '#feedback': '#contact',
    '#contact': '#contact',
    '#help-desk': '#contact',
    '#gallery': '#events',
    '#search': '#contact',
    '#prospectus': '#contact',
    '#apply': '#contact',
  }

  const handleNavigate = (href) => {
    if (!href) return

    if (href.startsWith('#')) {
      const targetSelector = document.querySelector(href)
        ? href
        : sectionFallbacks[href] || href
      const target = document.querySelector(targetSelector)

      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        window.history.pushState(null, '', targetSelector)
        return
      }

      window.history.pushState(null, '', targetSelector)
      return
    }

    window.location.assign(href)
  }

  const handleLinkClick = (event, href) => {
    if (href?.startsWith('#')) {
      event.preventDefault()
      handleNavigate(href)
      setIsOpen(false)
      setOpenDropdown(null)
    }
  }

  return (
    <nav className="sticky top-0 z-30 border-b border-[color:var(--color-navy-800)] bg-[color:var(--color-navy-900)] text-white shadow-lg shadow-[rgba(8,26,58,0.16)]">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-4 lg:px-8">
        <div className="hidden items-center gap-1 lg:flex lg:flex-wrap">
          {links.map((link) => (
            <div key={link.label} className="relative">
              <a
                href={link.href}
                onClick={(event) => {
                  if (link.children?.length) {
                    event.preventDefault()
                    setOpenDropdown((current) => (current === link.label ? null : link.label))
                    return
                  }
                  handleLinkClick(event, link.href)
                }}
                onMouseEnter={() => link.children?.length && setOpenDropdown(link.label)}
                className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white/90 transition hover:bg-white/10 hover:text-[color:var(--color-gold-300)] xl:px-4 xl:text-sm"
              >
                <span>{link.label}</span>
                {link.children?.length ? <ChevronDown className="h-4 w-4" /> : null}
              </a>

              {link.children?.length && openDropdown === link.label ? (
                <div
                  onMouseLeave={() => setOpenDropdown(null)}
                  className="absolute left-0 top-full z-40 mt-2 min-w-56 overflow-hidden rounded-2xl border border-white/10 bg-[color:var(--color-navy-950)] p-2 shadow-2xl"
                >
                  {link.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      onClick={(event) => handleLinkClick(event, child.href)}
                      className="flex items-center rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white/85 transition hover:bg-white/10 hover:text-[color:var(--color-gold-300)]"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <a
          href={cta.href}
          onClick={(event) => handleLinkClick(event, cta.href)}
          className="hidden rounded-full bg-[linear-gradient(135deg,_var(--color-gold-500),_var(--color-gold-300))] px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[color:var(--color-navy-950)] transition hover:brightness-105 lg:inline-flex xl:px-5 xl:text-sm xl:tracking-[0.16em]"
        >
          {cta.label}
        </a>

        <div className="flex w-full items-center justify-between gap-3 lg:hidden">
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] sm:text-sm"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            Menu
          </button>

          <a
            href={cta.href}
            onClick={(event) => handleLinkClick(event, cta.href)}
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white sm:text-sm"
          >
            <Search className="h-4 w-4" />
            {cta.label}
          </a>
        </div>
      </div>

      {isOpen ? (
        <div className="border-t border-white/10 bg-[color:var(--color-navy-950)] lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">
            {links.map((link) => (
              <div key={link.label} className="border-b border-white/8 py-2 last:border-b-0">
                <button
                  type="button"
                  onClick={() => {
                    if (link.children?.length) {
                      setOpenDropdown((current) => (current === link.label ? null : link.label))
                      return
                    }
                    handleNavigate(link.href)
                    setIsOpen(false)
                    setOpenDropdown(null)
                  }}
                  className="flex w-full items-center justify-between py-1 text-left text-xs font-semibold uppercase tracking-[0.12em] text-white/90 sm:text-sm sm:tracking-[0.14em]"
                >
                  <span>{link.label}</span>
                  {link.children?.length ? <ChevronDown className="h-4 w-4" /> : null}
                </button>

                {link.children?.length && openDropdown === link.label ? (
                  <div className="mt-2 space-y-2 pl-3">
                    {link.children.map((child) => (
                      <button
                        key={child.label}
                        type="button"
                        onClick={() => {
                          handleNavigate(child.href)
                          setIsOpen(false)
                          setOpenDropdown(null)
                        }}
                        className="block w-full rounded-xl border border-white/10 px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-[0.12em] text-white/80 transition hover:border-[color:var(--color-gold-300)] hover:text-[color:var(--color-gold-300)] sm:text-xs"
                      >
                        {child.label}
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </nav>
  )
}

export default Navbar
