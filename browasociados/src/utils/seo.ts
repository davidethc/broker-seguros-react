import { Metadata } from 'next'

export function generateMetadata({
  title,
  description,
  path = '',
}: {
  title: string
  description: string
  path?: string
}): Metadata {
  const baseUrl = 'https://www.browasociados.com'

  return {
    title: `${title} | Brow Asociados`,
    description,
    keywords: 'seguros, broker, Loja, Ecuador, seguro vehicular, seguro de vida, seguro de hogar, seguro empresarial',
    authors: [{ name: 'Brow Asociados' }],
    openGraph: {
      title: `${title} | Brow Asociados`,
      description,
      url: `${baseUrl}${path}`,
      siteName: 'Brow Asociados',
      locale: 'es_EC',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Brow Asociados`,
      description,
    },
    alternates: {
      canonical: `${baseUrl}${path}`,
    },
  }
}
