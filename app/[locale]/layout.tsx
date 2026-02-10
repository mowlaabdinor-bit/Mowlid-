import { NextIntlClientProvider } from 'next-intl';
import { getMessages, unstable_setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';
import { Inter, Poppins } from 'next/font/google'
import '../globals.css'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeContext'
import DockNavigation from '@/components/DockNavigation'
import Navigation from '@/components/Navigation'
import Logo from '@/components/Logo'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  if (!locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} ${poppins.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-gray-100 dark:bg-dark-900 transition-colors duration-300">
        <ThemeProvider>
          <NextIntlClientProvider messages={messages}>
            {/* Mobile Navigation - visible only on small screens */}
            <div className="md:hidden">
              <Navigation />
            </div>
            {/* Logo - now responsive for all screens */}
            <Logo />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
            {/* Desktop Dock - visible only on medium+ screens */}
            <div className="hidden md:block">
              <DockNavigation />
            </div>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
