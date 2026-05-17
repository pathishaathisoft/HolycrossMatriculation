import { useEffect, useState } from 'react'
import Container from '../common/Container.jsx'
import { AlertCircle, CheckCircle2, LoaderCircle, Mail, MapPin, Phone } from 'lucide-react'
import { mediaAssets } from '../../data/mediaAssets.js'
import { submitWebsiteContact } from '../../services/websiteContactService.js'

const initialFormData = {
  fullName: '',
  email: '',
  phoneNumber: '',
  subject: '',
  message: '',
}

const initialErrors = {
  fullName: '',
  email: '',
  phoneNumber: '',
  subject: '',
  message: '',
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function ContactSection() {
  const [formData, setFormData] = useState(initialFormData)
  const [errors, setErrors] = useState(initialErrors)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [statusMessage, setStatusMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [toastMessage, setToastMessage] = useState('')

  useEffect(() => {
    if (!toastMessage) {
      return undefined
    }

    const timeoutId = window.setTimeout(() => {
      setToastMessage('')
    }, 4000)

    return () => window.clearTimeout(timeoutId)
  }, [toastMessage])

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))

    setErrors((current) => ({ ...current, [name]: '' }))

    if (statusMessage) {
      setStatusMessage('')
    }

    if (errorMessage) {
      setErrorMessage('')
    }
  }

  const validateForm = () => {
    const trimmedData = {
      fullName: formData.fullName.trim(),
      email: formData.email.trim().replace(/\s+/g, ''),
      phoneNumber: formData.phoneNumber.trim().replace(/\s+/g, ''),
      subject: formData.subject.trim(),
      message: formData.message.trim(),
    }

    const nextErrors = { ...initialErrors }

    if (!trimmedData.fullName) {
      nextErrors.fullName = 'Full name is required.'
    }

    if (!trimmedData.email) {
      nextErrors.email = 'Email is required.'
    } else if (!emailPattern.test(trimmedData.email)) {
      nextErrors.email = 'Enter a valid email address.'
    }

    if (!trimmedData.phoneNumber) {
      nextErrors.phoneNumber = 'Phone number is required.'
    }

    if (!trimmedData.subject) {
      nextErrors.subject = 'Subject is required.'
    }

    if (!trimmedData.message) {
      nextErrors.message = 'Message is required.'
    }

    const isValid = !Object.values(nextErrors).some(Boolean)

    return {
      trimmedData,
      nextErrors,
      isValid,
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatusMessage('')
    setErrorMessage('')

    const { trimmedData, nextErrors, isValid } = validateForm()

    setErrors(nextErrors)

    if (!isValid) {
      return
    }

    setIsSubmitting(true)

    try {
      const response = await submitWebsiteContact(trimmedData)

      console.log('Contact form API response:', response)

      setStatusMessage(response.message || 'Contact request submitted successfully.')
      setToastMessage(response.message || 'Contact request submitted successfully.')
      setFormData(initialFormData)
      setErrors(initialErrors)
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
        {toastMessage ? (
          <div className="fixed right-4 top-4 z-[85] max-w-sm rounded-2xl border border-emerald-200 bg-white px-4 py-3 text-sm font-semibold text-emerald-700 shadow-[var(--shadow-soft)]">
            {toastMessage}
          </div>
        ) : null}

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
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter your name"
                    aria-invalid={Boolean(errors.fullName)}
                    className={`w-full rounded-2xl border bg-[color:var(--color-sand-50)] px-4 py-3 text-base outline-none transition focus:border-[color:var(--color-gold-500)] focus:bg-white ${
                      errors.fullName ? 'border-red-500 bg-red-50' : 'border-[color:var(--color-line)]'
                    }`}
                  />
                  {errors.fullName ? (
                    <span className="mt-2 block text-sm font-medium text-red-600">
                      {errors.fullName}
                    </span>
                  ) : null}
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
                    aria-invalid={Boolean(errors.email)}
                    className={`w-full rounded-2xl border bg-[color:var(--color-sand-50)] px-4 py-3 text-base outline-none transition focus:border-[color:var(--color-gold-500)] focus:bg-white ${
                      errors.email ? 'border-red-500 bg-red-50' : 'border-[color:var(--color-line)]'
                    }`}
                  />
                  {errors.email ? (
                    <span className="mt-2 block text-sm font-medium text-red-600">
                      {errors.email}
                    </span>
                  ) : null}
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-[color:var(--color-navy-900)]">
                    Phone Number
                  </span>
                  <input
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    type="tel"
                    placeholder="Enter your phone number"
                    aria-invalid={Boolean(errors.phoneNumber)}
                    className={`w-full rounded-2xl border bg-[color:var(--color-sand-50)] px-4 py-3 text-base outline-none transition focus:border-[color:var(--color-gold-500)] focus:bg-white ${
                      errors.phoneNumber
                        ? 'border-red-500 bg-red-50'
                        : 'border-[color:var(--color-line)]'
                    }`}
                  />
                  {errors.phoneNumber ? (
                    <span className="mt-2 block text-sm font-medium text-red-600">
                      {errors.phoneNumber}
                    </span>
                  ) : null}
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
                    aria-invalid={Boolean(errors.subject)}
                    className={`w-full rounded-2xl border bg-[color:var(--color-sand-50)] px-4 py-3 text-base outline-none transition focus:border-[color:var(--color-gold-500)] focus:bg-white ${
                      errors.subject ? 'border-red-500 bg-red-50' : 'border-[color:var(--color-line)]'
                    }`}
                  />
                  {errors.subject ? (
                    <span className="mt-2 block text-sm font-medium text-red-600">
                      {errors.subject}
                    </span>
                  ) : null}
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
                  aria-invalid={Boolean(errors.message)}
                  className={`w-full rounded-2xl border bg-[color:var(--color-sand-50)] px-4 py-3 text-base outline-none transition focus:border-[color:var(--color-gold-500)] focus:bg-white ${
                    errors.message ? 'border-red-500 bg-red-50' : 'border-[color:var(--color-line)]'
                  }`}
                />
                {errors.message ? (
                  <span className="mt-2 block text-sm font-medium text-red-600">
                    {errors.message}
                  </span>
                ) : null}
              </label>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,_var(--color-gold-500),_var(--color-gold-300))] px-6 py-3.5 text-sm font-bold uppercase tracking-[0.18em] text-[color:var(--color-navy-950)] transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-75 sm:w-auto"
              >
                {isSubmitting ? (
                  <>
                    <LoaderCircle className="h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Submit Now'
                )}
              </button>

              {statusMessage ? (
                <div className="flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                  <span>{statusMessage}</span>
                </div>
              ) : null}

              {errorMessage ? (
                <div className="flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                  <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              ) : null}
            </form>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[color:var(--color-line)] bg-[color:var(--color-navy-950)] shadow-[var(--shadow-card)]">
            <div className="relative h-full min-h-[320px]">
              <img
                src={mediaAssets.campus.front}
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
