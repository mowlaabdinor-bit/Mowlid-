'use client'

import { useRouter } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { FaHome, FaTools, FaUser, FaEnvelope, FaSun, FaMoon, FaGlobe } from 'react-icons/fa'
import Dock, { DockItemData } from './Dock'
import { useTheme } from './ThemeContext'

export default function DockNavigation() {
    const router = useRouter()
    const locale = useLocale()
    const t = useTranslations('nav')
    const { theme, toggleTheme } = useTheme()

    const navItems: DockItemData[] = [
        {
            icon: <FaHome size={22} />,
            label: t('home'),
            onClick: () => router.push(`/${locale}`)
        },
        {
            icon: <FaTools size={20} />,
            label: t('services'),
            onClick: () => router.push(`/${locale}/services`)
        },
        {
            icon: <FaUser size={20} />,
            label: t('about'),
            onClick: () => router.push(`/${locale}/about`)
        },
        {
            icon: <FaEnvelope size={20} />,
            label: t('contact'),
            onClick: () => router.push(`/${locale}/contact`)
        },
        {
            icon: theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />,
            label: theme === 'dark' ? 'Light' : 'Dark',
            onClick: toggleTheme
        },
        {
            icon: <FaGlobe size={20} />,
            label: locale === 'en' ? 'Soomaali' : 'English',
            onClick: () => {
                const newLocale = locale === 'en' ? 'so' : 'en'
                const currentPath = window.location.pathname
                const newPath = currentPath.replace(`/${locale}`, `/${newLocale}`)
                router.push(newPath)
            }
        }
    ]

    return (
        <Dock
            items={navItems}
            panelHeight={64}
            baseItemSize={48}
            magnification={72}
            distance={150}
        />
    )
}
