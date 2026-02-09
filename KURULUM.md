# Kurulum Talimatları

## Gereksinimler

- Node.js 18.x veya üzeri
- npm veya yarn

## Adım Adım Kurulum

### 1. Bağımlılıkları Yükleyin

```bash
npm install
```

veya

```bash
yarn install
```

### 2. Geliştirme Sunucusunu Başlatın

```bash
npm run dev
```

veya

```bash
yarn dev
```

Site [http://localhost:3000](http://localhost:3000) adresinde çalışacaktır.

### 3. Production Build

```bash
npm run build
npm start
```

## Proje Yapısı

```
mowla-web/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Ana layout
│   ├── page.tsx           # Ana sayfa
│   ├── globals.css        # Global stiller
│   ├── services/          # Hizmetler sayfası
│   ├── about/             # Hakkımda sayfası
│   └── contact/           # İletişim sayfası
├── components/            # React componentleri
│   ├── Navigation.tsx     # Navigasyon bileşeni
│   ├── Footer.tsx         # Footer bileşeni
│   ├── HeroSection.tsx     # Hero section
│   ├── ServicesPage.tsx   # Hizmetler sayfası
│   ├── AboutPage.tsx      # Hakkımda sayfası
│   └── ContactPage.tsx    # İletişim sayfası
├── public/                # Statik dosyalar
├── package.json           # Proje bağımlılıkları
├── tailwind.config.js     # Tailwind yapılandırması
├── tsconfig.json          # TypeScript yapılandırması
└── next.config.js         # Next.js yapılandırması
```

## Özelleştirme

### Renkleri Değiştirme

`tailwind.config.js` dosyasındaki renk paletini düzenleyebilirsiniz:

```javascript
colors: {
  primary: { ... },  // Ana renk (mavi)
  accent: { ... },   // Vurgu rengi (mor)
  dark: { ... },     // Koyu tonlar
}
```

### İçerik Güncelleme

- **Ana sayfa**: `components/HeroSection.tsx`
- **Hizmetler**: `components/ServicesPage.tsx`
- **Hakkımda**: `components/AboutPage.tsx`
- **İletişim**: `components/ContactPage.tsx`

### SEO Ayarları

`app/layout.tsx` dosyasındaki `metadata` objesini düzenleyin:

```typescript
export const metadata: Metadata = {
  title: '...',
  description: '...',
  // ...
}
```

## İletişim Formu

İletişim formu şu anda simüle edilmiştir. Gerçek bir backend entegrasyonu için:

1. API endpoint oluşturun (`app/api/contact/route.ts`)
2. `components/ContactPage.tsx` içindeki `handleSubmit` fonksiyonunu güncelleyin
3. E-posta servisi entegrasyonu ekleyin (ör: SendGrid, Resend)

## Deployment

### Vercel (Önerilen)

1. GitHub'a push edin
2. [Vercel](https://vercel.com) hesabı oluşturun
3. Projeyi import edin
4. Otomatik deploy!

### Diğer Platformlar

- **Netlify**: `npm run build` ve `out` klasörünü deploy edin
- **AWS Amplify**: Next.js template seçin
- **DigitalOcean App Platform**: Next.js template seçin

## Sorun Giderme

### Port Zaten Kullanımda

```bash
# Farklı bir port kullanın
npm run dev -- -p 3001
```

### Build Hataları

```bash
# Cache'i temizleyin
rm -rf .next
npm run build
```

### TypeScript Hataları

```bash
# TypeScript'i kontrol edin
npx tsc --noEmit
```

## Sonraki Adımlar

1. ✅ İletişim formunu backend'e bağlayın
2. ✅ E-posta bildirimleri ekleyin
3. ✅ Çok dilli desteği genişletin (Somali dili)
4. ✅ Blog/Portfolio bölümü ekleyin
5. ✅ Analytics entegrasyonu (Google Analytics)
6. ✅ SEO iyileştirmeleri

## Destek

Sorularınız için:
- E-posta: info@mowlatech.com
- GitHub Issues: [Proje repo'su]


