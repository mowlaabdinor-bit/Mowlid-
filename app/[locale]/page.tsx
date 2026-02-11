import MagicBento from '@/components/MagicBento';
import { unstable_setRequestLocale } from 'next-intl/server';

export function generateStaticParams() {
    return [{ locale: 'en' }, { locale: 'tr' }];
}

export default function Home({ params: { locale } }: { params: { locale: string } }) {
    unstable_setRequestLocale(locale);
    const items = [
        {
            title: 'Project 1',
            description: 'A sample project description.',
            headerImage: '/placeholder.jpg', // Ensure this image exists or use a valid URL
            className: 'col-span-1 md:col-span-2'
        },
        {
            title: 'Project 2',
            description: 'Another sample project.',
            className: 'col-span-1'
        }
    ];

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <h1 className="text-4xl font-bold text-center">Welcome to Mowla Web</h1>
            </div>
            <div className="w-full h-full p-4">
                <MagicBento items={items} />
            </div>
        </main>
    );
}
