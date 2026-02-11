import ServicesPage from '@/components/ServicesPage'
import { unstable_setRequestLocale } from 'next-intl/server'

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'so' }];
}

export default function Services({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  return <ServicesPage />
}
