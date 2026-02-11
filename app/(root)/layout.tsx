import { Metadata } from 'next';

export const metadata: Metadata = {
  verification: {
    google: '6RKM77SoC4HhO1na90piAGORy_a8MZXGqvZQaS_j1V4',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
