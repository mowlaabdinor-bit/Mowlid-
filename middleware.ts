import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    locales: ['en', 'so'],
    defaultLocale: 'en'
});

export const config = {
    matcher: ['/', '/(so|en)/:path*']
};
