'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { FaGraduationCap, FaCode, FaRocket, FaGlobe, FaHeart, FaCheckCircle, FaLaptopCode, FaMobileAlt, FaChartLine } from 'react-icons/fa'
import Aurora from './Aurora'
import MagicBento, { ParticleCard } from './MagicBento'
import ProfileCard from './ProfileCard'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
  const t = useTranslations('about')

  const stats = [
    { number: "4+", label: t('stats.projects') },
    { number: "2+", label: t('stats.experience') },
    { number: "100%", label: t('stats.clients') },
    { number: "3", label: t('stats.tech') }
  ]

  const projects = [
    { title: t('projects.cafe'), icon: FaLaptopCode, color: "from-orange-400 to-red-500" },
    { title: t('projects.butcher'), icon: FaChartLine, color: "from-red-500 to-pink-500" },
    { title: t('projects.finance'), icon: FaMobileAlt, color: "from-green-400 to-emerald-500" },
    { title: t('projects.construction'), icon: FaLaptopCode, color: "from-blue-500 to-cyan-500" }
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

        {/* Split Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              {/* Left: Profile Photo */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative flex justify-center lg:justify-end"
              >
                <ProfileCard
                  name="Mowlid A. Abdullahi"
                  title="Software Developer"
                  handle="mowlatech"
                  status="Coding..."
                  contactText="Contact Me"
                  avatarUrl="/profil.jpeg"
                  miniAvatarUrl="/profil.jpeg"
                  showUserInfo={true}
                  enableTilt={true}
                  enableMobileTilt={true}
                  onContactClick={() => window.location.href = '/contact'}
                  showIcon={false}
                  showBehindGlow={true}
                  behindGlowColor="rgba(0, 255, 157, 0.4)" // Green glow to match theme
                  customInnerGradient="linear-gradient(145deg, rgba(0,0,0,0.8) 0%, rgba(20,40,30,0.6) 100%)"
                  className="w-full max-w-[360px]"
                />
              </motion.div>

              {/* Right: Story & Bio */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="text-center lg:text-left"
              >
                <h1 className="font-display font-bold text-4xl sm:text-5xl mb-6 text-gray-900 dark:text-white">
                  {t('title')}
                </h1>
                <h2 className="text-xl text-primary-600 dark:text-primary-400 font-semibold mb-6">
                  {t('subtitle')}
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  <p>{t('story.p1')}</p>
                  <p>{t('story.p2')}</p>
                  <p>{t('story.p3')}</p>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-white/5 backdrop-blur-md border-y border-gray-200 dark:border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="font-display font-bold text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600 dark:from-primary-400 dark:to-accent-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Highlights (Mini Bento) */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-bold text-3xl sm:text-4xl mb-12 text-center text-gray-900 dark:text-white"
            >
              {t('projects.title')}
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects.map((project, index) => {
                const Icon = project.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="theme-glow-about h-full"
                  >
                    <ParticleCard
                      className="bg-white/80 dark:bg-[#020005] backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl p-6 h-full flex flex-col items-center text-center justify-center hover:scale-[1.02] transition-transform"
                      glowColor="var(--page-glow)"
                      enableBorderGlow
                      enableTilt
                      particleCount={5}
                    >
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${project.color} flex items-center justify-center mb-4 shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">{project.title}</h3>
                    </ParticleCard>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Values Section - Redesigned */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display font-bold text-3xl sm:text-4xl mb-4 text-center text-gray-900 dark:text-white"
            >
              {t('values.title')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
            >
              {t('values.subtitle') || 'What drives me to create exceptional digital experiences'}
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: FaHeart,
                  title: t('values.passion.title'),
                  description: t('values.passion.desc'),
                  gradient: 'from-pink-500 to-rose-600',
                  bgGlow: 'group-hover:shadow-pink-500/25'
                },
                {
                  icon: FaCode,
                  title: t('values.quality.title'),
                  description: t('values.quality.desc'),
                  gradient: 'from-blue-500 to-cyan-500',
                  bgGlow: 'group-hover:shadow-blue-500/25'
                },
                {
                  icon: FaGlobe,
                  title: t('values.innovation.title'),
                  description: t('values.innovation.desc'),
                  gradient: 'from-green-500 to-emerald-500',
                  bgGlow: 'group-hover:shadow-green-500/25'
                },
                {
                  icon: FaRocket,
                  title: t('values.speed.title') || 'Speed',
                  description: t('values.speed.desc') || 'Fast delivery without compromising quality',
                  gradient: 'from-orange-500 to-amber-500',
                  bgGlow: 'group-hover:shadow-orange-500/25'
                },
              ].map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className={`relative bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm border border-gray-200 dark:border-dark-700 rounded-2xl p-6 h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${value.bgGlow}`}>
                      {/* Gradient icon container */}
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>

                      {/* Title */}
                      <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-500 group-hover:to-accent-500 transition-all duration-300">
                        {value.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {value.description}
                      </p>

                      {/* Decorative corner gradient */}
                      <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${value.gradient} opacity-5 rounded-bl-full pointer-events-none`} />
                    </div>
                  </motion.div>
                );
              })}
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
              className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl p-12 shadow-2xl text-white relative overflow-hidden"
            >
              <div className="relative z-10">
                <h2 className="font-display font-bold text-3xl sm:text-4xl mb-6">
                  {t('cta.text')}
                </h2>
                <Link href="/contact" className="inline-block bg-white text-primary-600 font-bold py-4 px-8 rounded-xl shadow-lg hover:bg-gray-100 hover:scale-105 transition-all">
                  {t('cta.button')}
                </Link>
              </div>
              {/* Decorative circles */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
            </motion.div>
          </div>
        </section>

      </div>
    </div>
  )
}
