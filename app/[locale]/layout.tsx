import { NextIntlClientProvider, useMessages } from 'next-intl';
import { notFound } from 'next/navigation';
import Script from 'next/script';

// Can be imported from a shared config
const locales = ['en', 'tr'];

export default function LocaleLayout({ children, params: { locale } }: { children: React.ReactNode, params: { locale: string } }) {
    // Validate that the incoming `locale` parameter is valid
    if (!locales.includes(locale as any)) notFound();

    // Receive messages provided in `i18n.ts` or loaded manually
    const messages = useMessages();

    return (
        <html lang={locale}>
            <body>
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-8CET5EKJPS"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-8CET5EKJPS');
                    `}
                </Script>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
