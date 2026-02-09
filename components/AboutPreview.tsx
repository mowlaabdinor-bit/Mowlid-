'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { FaArrowRight } from 'react-icons/fa'

export default function AboutPreview() {
  const t = useTranslations('about')
  const locale = useLocale()

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-dark-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-6 text-gray-900 dark:text-white">
              {t('story.title')}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg mb-4">
              {t('story.p1')}
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {t('story.p3')}
            </p>
            <Link
              href={`/${locale}/about`}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 text-gray-900 dark:text-white rounded-lg font-medium hover:border-primary-500 dark:hover:border-primary-500 transition-all"
            >
              <span>{t('story.more')}</span>
              <FaArrowRight />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-white dark:bg-dark-800 rounded-2xl p-8 border border-gray-200 dark:border-dark-700">
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center font-bold text-white">
                    1
                  </div>
                  <div>
                    <h3 className="text-gray-900 dark:text-white font-semibold mb-1">{t('journey.student.title')}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{t('journey.student.description')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center font-bold text-white">
                    2
                  </div>
                  <div>
                    <h3 className="text-gray-900 dark:text-white font-semibold mb-1">{t('journey.projects.title')}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{t('journey.projects.description')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center font-bold text-white">
                    3
                  </div>
                  <div>
                    <h3 className="text-gray-900 dark:text-white font-semibold mb-1">{t('journey.company.title')}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{t('journey.company.description')}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
