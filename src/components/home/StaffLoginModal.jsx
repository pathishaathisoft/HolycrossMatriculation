import { useEffect, useState } from 'react'
import {
  AlertCircle,
  CheckCircle2,
  LoaderCircle,
  Mail,
  MessageSquareText,
  Phone,
  UserRound,
  X,
} from 'lucide-react'
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

function StaffLoginModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState(initialFormData)
  const [errors, setErrors] = useState(initialErrors)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState({ type: 'idle', message: '' })
  const [toastMessage, setToastMessage] = useState('')

  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    const originalOverflow = document.body.style.overflow

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  useEffect(() => {
    if (!toastMessage) {
      return undefined
    }

    const timeoutId = window.setTimeout(() => {
      setToastMessage('')
    }, 4000)

    return () => window.clearTimeout(timeoutId)
  }, [toastMessage])

  if (!isOpen) {
    return null
  }

  const updateField = (name, value) => {
    setFormData((current) => ({
      ...current,
      [name]: value,
    }))

    setErrors((current) => ({
      ...current,
      [name]: '',
    }))

    if (status.type !== 'idle') {
      setStatus({ type: 'idle', message: '' })
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

    const hasErrors = Object.values(nextErrors).some(Boolean)

    return {
      trimmedData,
      nextErrors,
      isValid: !hasErrors,
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const { trimmedData, nextErrors, isValid } = validateForm()

    setErrors(nextErrors)
    setStatus({ type: 'idle', message: '' })

    if (!isValid) {
      return
    }

    setIsSubmitting(true)

    try {
      const response = await submitWebsiteContact(trimmedData)

      console.log('Staff login API response:', response)

      setFormData(initialFormData)
      setErrors(initialErrors)
      setStatus({
        type: 'success',
        message: response.message || 'Contact request submitted successfully.',
      })
      setToastMessage(response.message || 'Contact request submitted successfully.')
    } catch (error) {
      setStatus({
        type: 'error',
        message:
          error instanceof Error
            ? error.message
            : 'Unable to submit your request right now. Please try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClassName =
    'w-full rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-sand-50)] px-4 py-3 text-base text-[color:var(--color-navy-950)] outline-none transition focus:border-[color:var(--color-gold-500)] focus:bg-white'

  const fieldMeta = [
    {
      name: 'fullName',
      label: 'Full Name',
      placeholder: 'Enter your full name',
      type: 'text',
      icon: UserRound,
    },
    {
      name: 'email',
      label: 'Email',
      placeholder: 'Enter your email address',
      type: 'email',
      icon: Mail,
    },
    {
      name: 'phoneNumber',
      label: 'Phone Number',
      placeholder: 'Enter your phone number',
      type: 'tel',
      icon: Phone,
    },
    {
      name: 'subject',
      label: 'Subject',
      placeholder: 'Enter subject',
      type: 'text',
      icon: MessageSquareText,
    },
  ]

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center px-4 py-6 sm:px-6">
      <button
        type="button"
        onClick={onClose}
        className="absolute inset-0 bg-[rgba(8,20,46,0.76)] backdrop-blur-sm"
        aria-label="Close staff login form"
      />

      {toastMessage ? (
        <div className="pointer-events-none absolute right-4 top-4 z-[85] max-w-sm rounded-2xl border border-emerald-200 bg-white px-4 py-3 text-sm font-semibold text-emerald-700 shadow-[var(--shadow-soft)]">
          {toastMessage}
        </div>
      ) : null}

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="staff-login-title"
        className="relative z-[90] w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/20 bg-white shadow-[0_28px_80px_rgba(8,20,46,0.28)]"
      >
        <div className="grid max-h-[90vh] overflow-y-auto lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative hidden min-h-full lg:block">
            <img
              src={mediaAssets.campus.dusk}
              alt="School campus"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(8,20,46,0.12),_rgba(8,20,46,0.82))]" />
            <div className="relative flex h-full flex-col justify-end p-8 text-white">
              <div className="max-w-md rounded-[1.8rem] border border-white/12 bg-[rgba(7,17,38,0.56)] p-6 backdrop-blur-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--color-gold-300)]">
                  Staff Login
                </p>
                <h2 className="mt-4 font-serif text-4xl font-bold leading-tight">
                  Connect with the school administration team.
                </h2>
                <p className="mt-4 text-base leading-7 text-white/84">
                  Share your details and message. We will receive your request through the
                  integrated website contact API.
                </p>
              </div>
            </div>
          </div>

          <div className="relative p-6 sm:p-8 lg:p-10">
            <button
              type="button"
              onClick={onClose}
              className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--color-line)] bg-white text-[color:var(--color-navy-900)] transition hover:border-[color:var(--color-gold-500)] hover:text-[color:var(--color-gold-500)]"
              aria-label="Close staff login form"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="pr-14">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--color-gold-500)]">
                Staff Login
              </p>
              <h2
                id="staff-login-title"
                className="mt-3 font-serif text-3xl font-bold text-[color:var(--color-navy-950)] sm:text-4xl"
              >
                Submit your staff enquiry
              </h2>
              <p className="mt-3 text-base leading-7 text-[color:var(--color-ink-700)]">
                Fill in the required details below. Your request will be sent directly from this
                local project integration.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                {fieldMeta.map((field) => {
                  const Icon = field.icon

                  return (
                    <label key={field.name} className="block">
                      <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-[color:var(--color-navy-900)]">
                        <Icon className="h-4 w-4 text-[color:var(--color-gold-500)]" />
                        {field.label}
                      </span>
                      <input
                        name={field.name}
                        value={formData[field.name]}
                        onChange={(event) => updateField(field.name, event.target.value)}
                        type={field.type}
                        placeholder={field.placeholder}
                        className={`${inputClassName} ${
                          errors[field.name] ? 'border-red-500 bg-red-50' : ''
                        }`}
                        aria-invalid={Boolean(errors[field.name])}
                      />
                      {errors[field.name] ? (
                        <span className="mt-2 block text-sm font-medium text-red-600">
                          {errors[field.name]}
                        </span>
                      ) : null}
                    </label>
                  )
                })}
              </div>

              <label className="block">
                <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-[color:var(--color-navy-900)]">
                  <MessageSquareText className="h-4 w-4 text-[color:var(--color-gold-500)]" />
                  Message
                </span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={(event) => updateField('message', event.target.value)}
                  rows={6}
                  placeholder="Write your message here"
                  className={`${inputClassName} resize-none ${
                    errors.message ? 'border-red-500 bg-red-50' : ''
                  }`}
                  aria-invalid={Boolean(errors.message)}
                />
                {errors.message ? (
                  <span className="mt-2 block text-sm font-medium text-red-600">
                    {errors.message}
                  </span>
                ) : null}
              </label>

              {status.message ? (
                <div
                  className={`flex items-start gap-3 rounded-2xl px-4 py-3 text-sm font-medium ${
                    status.type === 'success'
                      ? 'border border-emerald-200 bg-emerald-50 text-emerald-700'
                      : 'border border-red-200 bg-red-50 text-red-700'
                  }`}
                >
                  {status.type === 'success' ? (
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                  ) : (
                    <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
                  )}
                  <span>{status.message}</span>
                </div>
              ) : null}

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,_var(--color-gold-500),_var(--color-gold-300))] px-6 py-3.5 text-sm font-bold uppercase tracking-[0.18em] text-[color:var(--color-navy-950)] transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-75"
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

                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex items-center justify-center rounded-full border border-[color:var(--color-line)] px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--color-navy-900)] transition hover:border-[color:var(--color-gold-500)] hover:text-[color:var(--color-gold-500)]"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StaffLoginModal
