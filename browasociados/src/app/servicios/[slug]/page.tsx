import { getServicioById, servicios } from '@/data/servicios'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ContactForm from '@/components/ContactForm'

export function generateStaticParams() {
  return servicios.map((servicio) => ({
    slug: servicio.id,
  }))
}

export default function ServicioPage({ params }: { params: { slug: string } }) {
  const servicio = getServicioById(params.slug)

  if (!servicio) {
    notFound()
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="relative h-[400px] lg:h-[600px]">
          <Image
            src={servicio.image}
            alt={servicio.title}
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>

        <div>
          <div className="flex items-center mb-6">
            <span className="text-4xl mr-4">{servicio.icon}</span>
            <h1 className="text-4xl font-bold">{servicio.title}</h1>
          </div>

          <p className="text-xl text-gray-600 mb-8">
            {servicio.description}
          </p>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-4">Características Principales</h2>
            <ul className="space-y-3">
              {servicio.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-blue-900">¿Interesado en {servicio.title}?</h2>
            <p className="mb-6 text-blue-700">
              Completa el siguiente formulario y te enviaremos una cotización personalizada.
            </p>
            <ContactForm serviceType={servicio.title} className="max-w-lg mx-auto" />
          </div>
        </div>
      </div>

      <section className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-12">Otros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicios
            .filter(s => s.id !== params.slug)
            .slice(0, 3)
            .map(servicio => (
              <Link
                key={servicio.id}
                href={`/servicios/${servicio.id}`}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={servicio.image}
                    alt={servicio.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-3">{servicio.icon}</span>
                    <h3 className="text-xl font-bold">{servicio.title}</h3>
                  </div>
                  <p className="text-gray-600">{servicio.shortDescription}</p>
                </div>
              </Link>
            ))}
        </div>
      </section>
    </div>
  )
}
