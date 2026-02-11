'use client'

import { motion } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'

import Link from 'next/link'
import { FaCode, FaMobileAlt, FaWrench, FaBullhorn, FaCheckCircle } from 'react-icons/fa'
import Aurora from './Aurora'
import MagicBento from './MagicBento'

export default function ServicesPage() {
  const t = useTranslations('services')
  const locale = useLocale()

  // Technology icons as a simple component
  const TechStackContent = () => (
    <div className="flex flex-wrap gap-3 mt-4">
      {['React', 'Next.js', 'Flutter', 'Node.js', 'TypeScript', 'Python'].map((tech) => (
        <span key={tech} className="px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium text-gray-300 border border-white/10">
          {tech}
        </span>
      ))}
    </div>
  )

  // Stats display component
  const StatsContent = () => (
    <div className="grid grid-cols-2 gap-4 mt-4">
      <div className="text-center">
        <div className="text-3xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">5+</div>
        <div className="text-xs text-gray-400">{locale === 'so' ? 'Mashruucyo' : 'Projects'}</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">100%</div>
        <div className="text-xs text-gray-400">{locale === 'so' ? 'Qanacsanaan' : 'Satisfaction'}</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">2+</div>
        <div className="text-xs text-gray-400">{locale === 'so' ? 'Sanado' : 'Years'}</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">24/7</div>
        <div className="text-xs text-gray-400">{locale === 'so' ? 'Taageero' : 'Support'}</div>
      </div>
    </div>
  )

  // Bug Fixing visual content with background image
  const BugFixingContent = () => (
    <div className="mt-4 relative h-32 rounded-lg overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: "url('/bugfix-bg.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
    </div>
  )

  // Digital Marketing visual content with background image
  const MarketingContent = () => (
    <div className="mt-4 relative h-32 rounded-lg overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: "url('/marketing-bg.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
    </div>
  )

  const services = [
    {
      title: t('list.web.title'),
      description: t('list.web.desc'),
      icon: FaCode,
    },
    {
      title: t('list.mobile.title'),
      description: t('list.mobile.desc'),
      icon: FaMobileAlt,
    },
    {
      title: t('list.maintenance.title'),
      description: t('list.maintenance.desc'),
      icon: FaWrench,
      headerImage: '/bugfix-bg.png',
    },
    {
      title: t('list.marketing.title'),
      description: t('list.marketing.desc'),
      icon: FaBullhorn,
      headerImage: '/marketing-bg.png',
    },
    {
      title: locale === 'so' ? 'Teknoolojiyada' : 'Tech Stack',
      description: locale === 'so' ? 'Qalab casri ah oo dhisidda' : 'Modern tools I build with',
      icon: FaCode,
      customContent: TechStackContent,
    },
    {
      title: locale === 'so' ? 'Tirada' : 'By The Numbers',
      description: locale === 'so' ? 'Waxqabadkayga tirada' : 'My track record in numbers',
      icon: FaCheckCircle,
      customContent: StatsContent,
    },
  ]

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

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="theme-glow-services w-full flex justify-center">
            <MagicBento
              items={services}
              enableStars
              enableSpotlight
              enableBorderGlow
              textAutoHide={false}
              spotlightRadius={500}
              // glowColor removed, will use CSS var from wrapper
              particleCount={8}
            />
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display font-bold text-3xl sm:text-4xl mb-16 text-center text-gray-900 dark:text-white"
            >
              {t('process.title')}
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: 1, icon: '🔍', color: 'from-blue-500 to-cyan-500' },
                { step: 2, icon: '🎨', color: 'from-purple-500 to-pink-500' },
                { step: 3, icon: '⚡', color: 'from-orange-500 to-yellow-500' },
                { step: 4, icon: '🚀', color: 'from-green-500 to-emerald-500' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  whileHover={{ y: -10, scale: 1.03 }}
                  className="relative group"
                >
                  {/* Connection Line with gradient */}
                  {index < 3 && (
                    <div className="hidden md:block absolute top-12 -right-3 w-6 z-10">
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                        className={`h-1 bg-gradient-to-r ${item.color} origin-left rounded-full`}
                      />
                    </div>
                  )}

                  <div className={`relative bg-white/90 dark:bg-dark-800/90 backdrop-blur-sm border-2 border-gray-200 dark:border-dark-600 rounded-2xl p-6 text-center h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 overflow-hidden
                    ${index === 0 ? 'hover:border-blue-500/50 hover:shadow-blue-500/20' : ''}
                    ${index === 1 ? 'hover:border-purple-500/50 hover:shadow-purple-500/20' : ''}
                    ${index === 2 ? 'hover:border-orange-500/50 hover:shadow-orange-500/20' : ''}
                    ${index === 3 ? 'hover:border-green-500/50 hover:shadow-green-500/20' : ''}
                  `}>
                    {/* Animated background gradient on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.color}`}></div>
                    </div>

                    {/* Icon with glow effect */}
                    <motion.div
                      className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-5 text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      {item.icon}
                      {/* Glow ring */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-60 blur-xl transition-opacity duration-300 -z-10`}></div>
                    </motion.div>

                    {/* Step number badge with gradient */}
                    <div className={`absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-md`}>
                      <span className="text-sm font-bold text-white">{item.step}</span>
                    </div>

                    <h3 className="relative font-bold text-lg mb-3 text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300">
                      {t(`process.step${item.step}.title`)}
                    </h3>
                    <p className="relative text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {t(`process.step${item.step}.desc`)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-primary-600 to-accent-600 rounded-3xl p-12 shadow-2xl text-white relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
              <div className="relative z-10">
                <FaCheckCircle className="w-16 h-16 mx-auto mb-6 text-white/90" />
                <h2 className="font-display font-bold text-3xl sm:text-4xl mb-6">
                  {t('cta.title')}
                </h2>
                <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                  {t('cta.subtitle')}
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-8 py-4 bg-white text-primary-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
                >
                  {t('cta.button')}
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}
