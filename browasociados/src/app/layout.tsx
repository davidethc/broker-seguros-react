import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Brow Asociados | Broker de Seguros en Loja, Ecuador',
  description: 'Tu broker de seguros de confianza en Loja, Ecuador. Ofrecemos seguros vehiculares, de vida, hogar y empresariales con el mejor servicio y asesoramiento personalizado.',
  keywords: 'seguros, broker, Loja, Ecuador, seguro vehicular, seguro de vida, seguro de hogar, seguro empresarial',
  authors: [{ name: 'Brow Asociados' }],
  openGraph: {
    title: 'Brow Asociados | Broker de Seguros en Loja, Ecuador',
    description: 'Tu broker de seguros de confianza en Loja, Ecuador. Seguros vehiculares, de vida, hogar y empresariales.',
    url: 'https://www.browasociados.com',
    siteName: 'Brow Asociados',
    locale: 'es_EC',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}