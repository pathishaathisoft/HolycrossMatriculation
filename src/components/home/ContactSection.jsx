import { useState } from 'react'
import Container from '../common/Container.jsx'
import mainCoverImage from '../../assets/project-photos/main-cover.png'
import { Mail, MapPin, Phone } from 'lucide-react'

const GOOGLE_SCRIPT_URL =
  import.meta.env.VITE_GOOGLE_SCRIPT_URL || 'PASTE_YOUR_GOOGLE_SCRIPT_URL_HERE'

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [statusMessage, setStatusMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const sanitizeValue = (value) => value.trim()
  const sanitizeEmail = (value) => value.trim().replace(/\s+/g, '')
  const sanitizePhone = (value) => value.trim().replace(/\s+/g, '')

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setStatusMessage('')
    setErrorMessage('')

    const fullName = sanitizeValue(formData.name)
    const email = sanitizeEmail(formData.email)
    const phone = sanitizePhone(formData.phone)
    const message = sanitizeValue(formData.message)

    if (!fullName || !email || !phone || !message) {
      setErrorMessage('Please fill in your name, email, phone number, and message.')
      setIsSubmitting(false)
      return
    }

    if (!email.includes('@') || email.startsWith('@') || email.endsWith('@')) {
      setErrorMessage('Please enter a valid email address.')
      setIsSubmitting(false)
      return
    }

    if (!GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_URL === 'PASTE_YOUR_GOOGLE_SCRIPT_URL_HERE') {
      setErrorMessage('Google Apps Script URL is not configured.')
      setIsSubmitting(false)
      return
    }

    const payload = {
      name: fullName,
      email,
      phone,
      message,
    }

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        body: new URLSearchParams(payload).toString(),
      })

      const responseText = await response.text()
      let data = {}

      try {
        data = responseText ? JSON.parse(responseText) : {}
      } catch {
        data = {}
      }

      console.log('Google Sheets contact response:', data)

      if (!response.ok || data?.success === false) {
        throw new Error(data?.message || 'Unable to send message right now. Please try again.')
      }

      setStatusMessage(data?.message || 'Contact request submitted successfully.')
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      })
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Unable to send message right now. Please try again.',
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="bg-[color:var(--color-surface)] py-16 lg:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--color-gold-500)]">
            Contact
          </p>
          <h2 className="mt-4 font-serif text-3xl font-bold text-[color:var(--color-navy-950)] sm:text-4xl lg:text-5xl">
            Contact Us
          </h2>
          <p className="mt-4 text-base leading-7 text-[color:var(--color-ink-700)] sm:text-lg">
            Send us your requirement to understand your need and serve you better
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          <div className="overflow-hidden rounded-[2rem] border border-[color:var(--color-line)] bg-white shadow-[var(--shadow-card)]">
            <form onSubmit={handleSubmit} className="space-y-5 p-6 sm:p-8 lg:p-10">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-[color:var(--color-navy-900)]">
                    Your Name
                  </span>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-sand-50)] px-4 py-3 text-base outline-none transition focus:border-[color:var(--color-gold-500)] focus:bg-white"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-[color:var(--color-navy-900)]">
                    Your Email
                  </span>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-sand-50)] px-4 py-3 text-base outline-none transition focus:border-[color:var(--color-gold-500)] focus:bg-white"
                  />
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-[color:var(--color-navy-900)]">
                    Phone Number
                  </span>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-sand-50)] px-4 py-3 text-base outline-none transition focus:border-[color:var(--color-gold-500)] focus:bg-white"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-[color:var(--color-navy-900)]">
                    Subject
                  </span>
                  <input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter subject"
                    className="w-full rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-sand-50)] px-4 py-3 text-base outline-none transition focus:border-[color:var(--color-gold-500)] focus:bg-white"
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-[color:var(--color-navy-900)]">
                  Your Message
                </span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Write your message here"
                  className="w-full rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-sand-50)] px-4 py-3 text-base outline-none transition focus:border-[color:var(--color-gold-500)] focus:bg-white"
                />
              </label>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center rounded-full bg-[linear-gradient(135deg,_var(--color-gold-500),_var(--color-gold-300))] px-6 py-3.5 text-sm font-bold uppercase tracking-[0.18em] text-[color:var(--color-navy-950)] transition hover:brightness-105 sm:w-auto"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Now'}
              </button>

              {statusMessage ? (
                <p className="text-sm font-medium text-[color:var(--color-navy-900)]">
                  {statusMessage}
                </p>
              ) : null}

              {errorMessage ? (
                <p className="text-sm font-medium text-red-600">{errorMessage}</p>
              ) : null}
            </form>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[color:var(--color-line)] bg-[color:var(--color-navy-950)] shadow-[var(--shadow-card)]">
            <div className="relative h-full min-h-[320px]">
              <img
                src={mainCoverImage}
                alt="Contact banner"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(8,20,46,0.18),_rgba(8,20,46,0.74))]" />
              <div className="relative flex h-full flex-col justify-end p-6 sm:p-8 lg:p-10">
                <div className="max-w-md rounded-[1.6rem] border border-white/12 bg-[rgba(7,17,38,0.72)] p-5 text-white backdrop-blur-sm sm:p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--color-gold-300)]">
                    Reach Us
                  </p>
                  <h3 className="mt-3 font-serif text-2xl font-bold sm:text-3xl">
                    We are here to help you
                  </h3>
                  <div className="mt-5 space-y-3 text-sm leading-7 text-white/85 sm:text-base">
                    <div className="flex gap-3">
                      <MapPin className="mt-1 h-5 w-5 text-[color:var(--color-gold-300)]" />
                      <span>KVS Street, Alangudi, Pudukkottai - 622201</span>
                    </div>
                    <div className="flex gap-3">
                      <Phone className="mt-1 h-5 w-5 text-[color:var(--color-gold-300)]" />
                      <span>+9443636251</span>
                    </div>
                    <div className="flex gap-3">
                      <Mail className="mt-1 h-5 w-5 text-[color:var(--color-gold-300)]" />
                      <span>holycross@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ContactSection
