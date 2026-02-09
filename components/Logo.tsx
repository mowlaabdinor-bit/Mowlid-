'use client'

import Link from 'next/link'
import { useLocale } from 'next-intl'
import { motion } from 'framer-motion'

export default function Logo() {
    const locale = useLocale()

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-4 left-4 sm:top-6 sm:left-6 z-50 mix-blend-difference text-white dark:text-white"
        >
            <Link href={`/${locale}`} className="group flex items-center gap-2 sm:gap-3">
                {/* Custom M Logo based on reference */}
                <div className="relative w-10 h-10 sm:w-14 sm:h-14">
                    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xl">
                        <defs>
                            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#0ea5e9" /> {/* Sky Blue */}
                                <stop offset="100%" stopColor="#3b82f6" /> {/* Blue */}
                            </linearGradient>
                            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#4f46e5" /> {/* Indigo */}
                                <stop offset="100%" stopColor="#9333ea" /> {/* Purple */}
                            </linearGradient>
                            <linearGradient id="gradient3" x1="0%" y1="100%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#2563eb" /> {/* Darker Blue */}
                                <stop offset="100%" stopColor="#d946ef" /> {/* Fuchsia */}
                            </linearGradient>
                        </defs>

                        {/* Left Stroke (Blue/Cyan) */}
                        <motion.path
                            d="M20,90 C15,90 10,80 25,50 C35,30 45,15 50,15 C45,35 40,60 30,85 C28,90 25,90 20,90 Z"
                            fill="url(#gradient1)"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        />

                        {/* Middle/Right Stroke (Purple/Pink) */}
                        <motion.path
                            d="M45,60 C45,60 55,40 65,30 C75,20 90,20 90,30 C90,40 80,60 70,80 C65,90 85,85 90,80"
                            fill="none"
                            stroke="url(#gradient2)"
                            strokeWidth="12"
                            strokeLinecap="round"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        />

                        {/* Connecting Curve (Darker overlap) */}
                        <motion.path
                            d="M45,60 C42,65 40,80 50,70 C55,65 70,45 80,35"
                            fill="none"
                            stroke="url(#gradient3)"
                            strokeWidth="10"
                            strokeLinecap="round"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.8 }}
                        />
                    </svg>
                </div>


                <div className="flex flex-col">
                    <div className="flex items-center gap-1">
                        <span className="font-display font-bold text-lg sm:text-2xl tracking-tight text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300">
                            Mowla
                        </span>
                    </div>
                    <span className="font-sans text-[0.5rem] sm:text-[0.65rem] font-bold text-gray-500 dark:text-gray-400 tracking-[0.15em] sm:tracking-[0.2em] uppercase leading-none group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors pl-0.5">
                        Technology
                    </span>
                </div>
            </Link>
        </motion.div>
    )
}
