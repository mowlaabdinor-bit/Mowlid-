'use client'

import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { FaLinkedin, FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const t = useTranslations('footer')
  const locale = useLocale()

  // Social links
  const LINKEDIN_URL = 'https://www.linkedin.com/in/mowlid-abdinor-1460a3369'
  const INSTAGRAM_URL = 'https://www.instagram.com/xaaji_mola/'
  const WHATSAPP_NUMBER = '905013305908'
  const EMAIL_ADDRESS = 'mowlaabdinor@gmail.com'

  const socialLinks = [
    { icon: FaLinkedin, href: LINKEDIN_URL, label: 'LinkedIn' },
    { icon: FaInstagram, href: INSTAGRAM_URL, label: 'Instagram' },
    { icon: FaWhatsapp, href: `https://wa.me/${WHATSAPP_NUMBER}`, label: 'WhatsApp' },
    { icon: FaEnvelope, href: `mailto:${EMAIL_ADDRESS}`, label: 'Email' },
  ]

  return (
    <footer className="bg-white dark:bg-dark-800 border-t border-gray-200 dark:border-dark-700 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center font-bold text-white text-xl">
                M
              </div>
              <span className="font-display font-bold text-xl text-gray-900 dark:text-white">
                Mowla Tech
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {t('description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}`} className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/services`} className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">
                  {t('services')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/about`} className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4">{t('contact')}</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('mailto') ? undefined : '_blank'}
                    rel={social.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                    className="w-10 h-10 bg-gray-100 dark:bg-dark-700 hover:bg-primary-500 dark:hover:bg-primary-500 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-white transition-all border border-gray-200 dark:border-dark-600"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-dark-700 text-center text-gray-500 dark:text-gray-400 text-sm">
          <p>&copy; {currentYear} Mowla Tech. {t('rights')}</p>
        </div>
      </div>
    </footer>
  )
}
