'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { FaCode, FaMobileAlt, FaWrench, FaBullhorn, FaArrowRight } from 'react-icons/fa'

export default function ServicesPreview() {
  const t = useTranslations('services')
  const locale = useLocale()

  const services = [
    {
      icon: FaCode,
      title: t('web.title'),
      description: t('web.description'),
      color: 'from-primary-500 to-accent-500',
    },
    {
      icon: FaMobileAlt,
      title: t('mobile.title'),
      description: t('mobile.description'),
      color: 'from-accent-500 to-secondary-500',
    },
    {
      icon: FaWrench,
      title: t('maintenance.title'),
      description: t('maintenance.description'),
      color: 'from-secondary-500 to-primary-500',
    },
    {
      icon: FaBullhorn,
      title: t('marketing.title'),
      description: t('marketing.description'),
      color: 'from-primary-500 to-accent-500',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-dark-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-4 text-gray-900 dark:text-white">
            {t('title')}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon
            const glowColors = [
              'hover:shadow-blue-500/30',
              'hover:shadow-purple-500/30',
              'hover:shadow-cyan-500/30',
              'hover:shadow-pink-500/30'
            ]
            const borderColors = [
              'hover:border-blue-500/50',
              'hover:border-purple-500/50',
              'hover:border-cyan-500/50',
              'hover:border-pink-500/50'
            ]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`relative bg-white dark:bg-dark-800 border-2 border-gray-200 dark:border-dark-600 rounded-2xl p-8 ${borderColors[index]} transition-all duration-300 group hover:shadow-2xl ${glowColors[index]} overflow-hidden`}
              >
                {/* Animated gradient background on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color}`}></div>
                </div>

                {/* Icon with pulse animation */}
                <motion.div
                  className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className="w-8 h-8 text-white" />
                  {/* Glow ring */}
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300`}></div>
                </motion.div>

                <h3 className="relative text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300">{service.title}</h3>
                <p className="relative text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link
            href={`/${locale}/services`}
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all"
          >
            <span>{t('viewAll')}</span>
            <FaArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
