import { getRequestConfig } from 'next-intl/server';

export const locales = ['en', 'so'] as const;

export default getRequestConfig(async ({ locale }) => {
    return {
        messages: (await import(`./messages/${locale}.json`)).default
    };
});
