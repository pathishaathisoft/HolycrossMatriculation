import { Mail, MapPin, Phone } from 'lucide-react'

const iconMap = {
  email: Mail,
  phone: Phone,
  location: MapPin,
}

function TopBar({ contactItems = [], quickActions = [] }) {
  const sectionFallbacks = {
    '#gallery': '#events',
    '#admissions': '#contact',
    '#search': '#contact',
    '#location': '#contact',
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
        return
      }

      window.history.pushState(null, '', targetSelector)
      return
    }

    window.location.assign(href)
  }

  return (
    <div className="bg-[color:var(--color-navy-950)] text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
          {contactItems.map((item) => {
            const Icon = iconMap[item.type] ?? Mail

            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(event) => {
                  if (item.href?.startsWith('#')) {
                    event.preventDefault()
                    handleNavigate(item.href)
                  }
                }}
                className="inline-flex items-center gap-2 text-white/90 transition hover:text-[color:var(--color-gold-300)]"
              >
                <Icon className="h-4 w-4" />
                <span className="font-semibold tracking-wide">{item.label}</span>
              </a>
            )
          })}
        </div>

        <div className="flex flex-wrap items-center gap-3 text-sm">
          {quickActions.map((action) => (
            <a
              key={action.label}
              href={action.href}
              onClick={(event) => {
                if (action.href?.startsWith('#')) {
                  event.preventDefault()
                  handleNavigate(action.href)
                }
              }}
              className="inline-flex items-center rounded-full border border-white/15 px-4 py-2 font-semibold text-white/90 transition hover:border-[color:var(--color-gold-300)] hover:text-[color:var(--color-gold-300)]"
            >
              {action.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TopBar
