import AboutPage from '@/components/AboutPage'
import { unstable_setRequestLocale } from 'next-intl/server'

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'so' }];
}

export default function About({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  return <AboutPage />
}
