export const metadata = {
  title: 'Meu Blog',
  description: 'Blog com Next.js + Directus',
}

export default function RootLayout({ children, params }) {
  return (
    <html lang={params?.locale || 'pt'}>
      <body>{children}</body>
    </html>
  )
}
