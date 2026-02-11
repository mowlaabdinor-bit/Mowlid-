import { NextIntlClientProvider, useMessages } from 'next-intl';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: {
        default: 'Mowla Tech - Mowlid Abdinor',
        template: '%s | Mowla Tech'
    },
    description: 'Personal portfolio of Mowlid Abdinor (Mowla Tech), a Full Stack Developer specializing in modern web technologies. Expert in React, Next.js, and Node.js.',
    keywords: ['mowlatech', 'mowlid abdinor', 'mowla abdinor', 'web developer', 'full stack developer', 'software engineer', 'next.js developer', 'react developer', 'somali developer', 'mowlid'],
    authors: [{ name: 'Mowlid Abdinor', url: 'https://mowlatech.site' }],
    creator: 'Mowlid Abdinor',
    publisher: 'Mowla Tech',
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://mowlatech.site',
        title: 'Mowla Tech - Mowlid Abdinor | Full Stack Developer',
        description: 'Explore the portfolio of Mowlid Abdinor (Mowla Tech). Innovative web solutions, creative designs, and professional software development.',
        siteName: 'Mowla Tech',
        images: [
            {
                url: '/og-image.jpg', // We should probably verify if this exists or use a placeholder, but for now this is standard structure
                width: 1200,
                height: 630,
                alt: 'Mowla Tech - Mowlid Abdinor',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Mowla Tech - Mowlid Abdinor',
        description: 'Personal portfolio of Mowlid Abdinor (Mowla Tech).',
        creator: '@mowlatech', // Assuming this handle, can be changed
        images: ['/og-image.jpg'],
    },
    verification: {
        google: '6RKM77SoC4HhO1na90piAGORy_a8MZXGqvZQaS_j1V4',
    },
};

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
