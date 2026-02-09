'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { FaArrowRight, FaCode, FaMobileAlt, FaWrench, FaBullhorn } from 'react-icons/fa'
import Aurora from './Aurora'

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const t = useTranslations('hero')
  const tServices = useTranslations('servicesPreview')
  const locale = useLocale()

  useEffect(() => {
    setMounted(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const services = [
    { icon: FaCode, label: tServices('web') },
    { icon: FaMobileAlt, label: tServices('mobile') },
    { icon: FaWrench, label: tServices('maintenance') },
    { icon: FaBullhorn, label: tServices('marketing') },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-100 dark:bg-[#050505]">
      {/* Aurora Background */}
      <div className="absolute inset-0 z-0 opacity-80 dark:opacity-80 pointer-events-none">
        <Aurora
          colorStops={["#00ff9d", "#7000ff", "#3b82f6"]}
          blend={0.7}
          amplitude={1.2}
          speed={0.4}
        />
      </div>

      {/* Overlay Gradient for readability - Reduced intensity */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-gray-100/30 to-gray-100 dark:via-black/20 dark:to-[#050505] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 text-gray-900 dark:text-white"
          >
            {t('title')}
            <br />
            <span className="text-primary-600 dark:text-primary-400">
              {t('titleHighlight')}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4 max-w-3xl mx-auto"
          >
            {t('subtitle')}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            {t('description')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Link
              href={`/${locale}/contact`}
              className="group px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-primary-500/50 transition-all transform hover:scale-105 flex items-center space-x-2"
            >
              <span>{t('cta1')}</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href={`/${locale}/about`}
              className="px-8 py-4 bg-gray-200 dark:bg-dark-800/50 backdrop-blur-sm border border-gray-300 dark:border-dark-700 text-gray-900 dark:text-white rounded-lg font-semibold text-lg hover:bg-gray-300 dark:hover:bg-dark-800 transition-all transform hover:scale-105"
            >
              {t('cta2')}
            </Link>
          </motion.div>

          {/* Services Preview */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-lg p-6 hover:border-primary-500/50 dark:hover:border-primary-500/50 transition-all cursor-pointer shadow-sm hover:shadow-md"
                >
                  <Icon className="w-8 h-8 text-primary-500 dark:text-primary-400 mx-auto mb-3" />
                  <p className="text-gray-800 dark:text-gray-200 text-sm font-medium">{service.label}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-600 dark:border-gray-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
