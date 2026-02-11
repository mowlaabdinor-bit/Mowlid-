import HeroSection from '@/components/HeroSection'
import ServicesPreview from '@/components/ServicesPreview'
import AboutPreview from '@/components/AboutPreview'
import { unstable_setRequestLocale } from 'next-intl/server'

export function generateStaticParams() {
    return [{ locale: 'en' }, { locale: 'tr' }];
}

export default function Home({ params: { locale } }: { params: { locale: string } }) {
    unstable_setRequestLocale(locale);
    return (
        <div className="flex flex-col">
            <HeroSection />
            <ServicesPreview />
            <AboutPreview />
        </div>
    )
}
