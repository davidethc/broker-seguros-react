import { generateMetadata } from '@/utils/seo'
import { servicios } from '@/data/servicios'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = generateMetadata({
  title: 'Nuestros Servicios',
  description: 'Descubre nuestra amplia gama de seguros en Loja, Ecuador. Seguros vehiculares, de vida, hogar y empresariales adaptados a tus necesidades.',
  path: '/servicios',
})

export default function ServiciosPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <section className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Nuestros Servicios</h1>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
          Ofrecemos una amplia gama de soluciones en seguros para proteger lo que más valoras.
          Cada uno de nuestros servicios está diseñado pensando en tus necesidades específicas.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {servicios.map((servicio) => (
          <Link
            key={servicio.id}
            href={`/servicios/${servicio.id}`}
            className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
          >
            <div className="relative h-64">
              <Image
                src={servicio.image}
                alt={servicio.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{servicio.icon}</span>
                <h2 className="text-2xl font-bold">{servicio.title}</h2>
              </div>
              <p className="text-gray-600 mb-4">{servicio.shortDescription}</p>
              <ul className="space-y-2">
                {servicio.features.slice(0, 3).map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="text-blue-600 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-6 text-blue-600 font-semibold group-hover:text-blue-700">
                Conocer más →
              </div>
            </div>
          </Link>
        ))}
      </section>

      <section className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-6">¿Necesitas asesoramiento personalizado?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Nuestro equipo de expertos está listo para ayudarte a encontrar la mejor solución para tus necesidades.
        </p>
        <Link
          href="/contacto"
          className="bg-blue-600 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
        >
          Contactar Ahora
        </Link>
      </section>
    </div>
  )
}
