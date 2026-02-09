'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaInstagram, FaCheckCircle } from 'react-icons/fa'
import Aurora from './Aurora'
import MagicBento, { ParticleCard } from './MagicBento'

export default function ContactPage() {
  const t = useTranslations('contact')
  const locale = useLocale()
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  // Your contact info
  const WHATSAPP_NUMBER = '905013305908' // WhatsApp number with country code
  const EMAIL_ADDRESS = 'mowlaabdinor@gmail.com' // Email address

  const handleWhatsApp = () => {
    const message = `Merhaba Mowlid!

İsim: ${formState.name}
Email: ${formState.email}

Mesaj:
${formState.message}`

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
    setSubmitStatus('success')
  }

  const handleEmail = () => {
    const subject = `Yeni İletişim: ${formState.name}`
    const body = `İsim: ${formState.name}
Email: ${formState.email}

Mesaj:
${formState.message}`

    const mailtoUrl = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoUrl
    setSubmitStatus('success')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form validation only, actual sending is done by buttons
  }

  // Contact links
  const LINKEDIN_URL = 'https://www.linkedin.com/in/mowlid-abdinor-1460a3369'
  const INSTAGRAM_URL = 'https://www.instagram.com/xaaji_mola/'

  return (
    <div className="min-h-screen pt-28 bg-gray-100 dark:bg-[#050505] transition-colors duration-300 relative overflow-hidden">
      {/* Aurora Background */}
      <div className="absolute inset-0 z-0 opacity-80 dark:opacity-80 pointer-events-none">
        <Aurora
          colorStops={["#00ff9d", "#7000ff", "#3b82f6"]}
          blend={0.7}
          amplitude={1.2}
          speed={0.4}
        />
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-gray-100/30 to-gray-100 dark:via-black/20 dark:to-[#050505] pointer-events-none" />

      {/* Content Wrapper */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl mb-6 text-gray-900 dark:text-white">
                {t('title')}
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                {t('subtitle')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Contact Info (Bento Grid) */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                  {/* Email Card */}
                  <a
                    href={`mailto:${EMAIL_ADDRESS}`}
                    className="group relative bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm border border-gray-200 dark:border-dark-700 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/20 hover:border-purple-500/30 cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <FaEnvelope className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-1">Email</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 break-all">{EMAIL_ADDRESS}</p>
                  </a>

                  {/* WhatsApp Card */}
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm border border-gray-200 dark:border-dark-700 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-green-500/20 hover:border-green-500/30 cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <FaWhatsapp className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-1">WhatsApp</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">+90 501 330 5908</p>
                  </a>

                  {/* LinkedIn Card */}
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm border border-gray-200 dark:border-dark-700 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/20 hover:border-blue-500/30 cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <FaLinkedin className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-1">LinkedIn</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">@mowlid-abdinor</p>
                  </a>

                  {/* Instagram Card */}
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm border border-gray-200 dark:border-dark-700 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-500/20 hover:border-pink-500/30 cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <FaInstagram className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-1">Instagram</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">@xaaji_mola</p>
                  </a>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="theme-glow-contact h-full"
              >
                <ParticleCard
                  className="bg-white/80 dark:bg-[#020005] backdrop-blur-sm border border-[rgba(60,20,80,0.8)] rounded-2xl p-8 h-full"
                  glowColor="var(--page-glow)"
                  enableBorderGlow
                  particleCount={0}
                >
                  <h3 className="font-display font-bold text-2xl mb-6 text-gray-900 dark:text-white">
                    {t('form.title')}
                  </h3>

                  {submitStatus === 'success' ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-12 text-center"
                    >
                      <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                        <FaCheckCircle className="w-8 h-8 text-green-500" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t('form.success.title')}</h4>
                      <p className="text-gray-600 dark:text-gray-400">{t('form.success.message')}</p>
                      <button
                        onClick={() => setSubmitStatus('idle')}
                        className="mt-6 px-6 py-2 bg-gray-100 dark:bg-dark-700 text-gray-900 dark:text-white rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors"
                      >
                        {t('form.success.button')}
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          {t('form.name.label')}
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-dark-600 bg-gray-50 dark:bg-dark-900/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                          placeholder={t('form.name.placeholder')}
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          {t('form.email.label')}
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-dark-600 bg-gray-50 dark:bg-dark-900/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                          placeholder={t('form.email.placeholder')}
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          {t('form.message.label')}
                        </label>
                        <textarea
                          id="message"
                          required
                          rows={4}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-dark-600 bg-gray-50 dark:bg-dark-900/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none resize-none"
                          placeholder={t('form.message.placeholder')}
                          value={formState.message}
                          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        />
                      </div>

                      {/* Send via buttons */}
                      <div className="space-y-3">
                        <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-2">
                          {locale === 'so' ? 'U dir' : 'Send via'}:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <button
                            type="button"
                            onClick={handleWhatsApp}
                            disabled={!formState.name || !formState.email || !formState.message}
                            className="flex items-center justify-center gap-2 py-3 sm:py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-bold text-base sm:text-lg hover:shadow-lg hover:shadow-green-500/25 transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                          >
                            <FaWhatsapp className="w-6 h-6" />
                            WhatsApp
                          </button>
                          <button
                            type="button"
                            onClick={handleEmail}
                            disabled={!formState.name || !formState.email || !formState.message}
                            className="flex items-center justify-center gap-2 py-3 sm:py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-xl font-bold text-base sm:text-lg hover:shadow-lg hover:shadow-primary-500/25 transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                          >
                            <FaEnvelope className="w-5 h-5" />
                            Email
                          </button>
                        </div>
                      </div>
                    </form>
                  )}
                </ParticleCard>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
