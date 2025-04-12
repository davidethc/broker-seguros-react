import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Seguros en Loja"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Tu Seguridad es Nuestra Prioridad
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Protege lo que más valoras con el mejor broker de seguros en Loja, Ecuador
          </p>
          <Link
            href="/contacto"
            className="bg-blue-600 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Cotiza tu Seguro
          </Link>
        </div>
      </section>

      {/* Servicios Destacados */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Seguro Vehicular',
                description: 'Protege tu vehículo contra accidentes, robo y más.',
                icon: '🚗',
                href: '/servicios/seguro-vehicular'
              },
              {
                title: 'Seguro de Vida',
                description: 'Asegura el futuro financiero de tus seres queridos.',
                icon: '❤️',
                href: '/servicios/seguro-vida'
              },
              {
                title: 'Seguro de Hogar',
                description: 'Protege tu hogar y tus bienes más preciados.',
                icon: '🏠',
                href: '/servicios/seguro-hogar'
              },
              {
                title: 'Seguro Empresarial',
                description: 'Soluciones integrales para tu negocio.',
                icon: '🏢',
                href: '/servicios/seguro-empresarial'
              }
            ].map((servicio, index) => (
              <Link
                key={index}
                href={servicio.href}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <span className="text-4xl mb-4 block">{servicio.icon}</span>
                <h3 className="text-xl font-semibold mb-2">{servicio.title}</h3>
                <p className="text-gray-600">{servicio.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué Elegirnos */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">¿Por qué Elegirnos?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold mb-2">Experiencia</h3>
              <p className="text-gray-600">Más de 10 años brindando seguridad a familias y empresas en Loja</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-2">Servicio Personalizado</h3>
              <p className="text-gray-600">Asesoramiento experto adaptado a tus necesidades específicas</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Respuesta Rápida</h3>
              <p className="text-gray-600">Atención inmediata y gestión eficiente de reclamos</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para proteger lo que más valoras?</h2>
          <p className="text-xl mb-8">Contáctanos hoy y obtén una cotización gratuita</p>
          <Link
            href="/contacto"
            className="bg-white text-blue-600 px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Contactar Ahora
          </Link>
        </div>
      </section>
    </>
  )
}