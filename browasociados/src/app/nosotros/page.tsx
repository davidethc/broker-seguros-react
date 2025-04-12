import { generateMetadata } from '@/utils/seo'
import Image from 'next/image'

export const metadata = generateMetadata({
  title: 'Sobre Nosotros',
  description: 'Conoce más sobre Brow Asociados, tu broker de seguros de confianza en Loja, Ecuador. Más de 10 años de experiencia en el mercado asegurador.',
  path: '/nosotros',
})

export default function NosotrosPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <section className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Sobre Nosotros</h1>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Somos el broker de seguros líder en Loja, Ecuador, comprometidos con brindar la mejor protección y servicio a nuestros clientes.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-6">Nuestra Historia</h2>
          <p className="text-gray-600 mb-4">
            Desde nuestra fundación, nos hemos dedicado a proteger los intereses de familias y empresas en Loja y sus alrededores.
            Con más de una década de experiencia, hemos construido relaciones sólidas con las principales aseguradoras del país.
          </p>
          <p className="text-gray-600">
            Nuestro compromiso con la excelencia y el servicio personalizado nos ha permitido convertirnos en el broker de confianza
            para miles de clientes satisfechos.
          </p>
        </div>
        <div className="relative h-[400px]">
          <Image
            src="/images/about-us.jpg"
            alt="Oficina de Brow Asociados"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </section>

      <section className="bg-gray-50 p-8 rounded-lg mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestros Valores</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-semibold mb-2">Compromiso</h3>
            <p className="text-gray-600">
              Nos comprometemos a encontrar la mejor solución para cada cliente.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">⚖️</div>
            <h3 className="text-xl font-semibold mb-2">Integridad</h3>
            <p className="text-gray-600">
              Actuamos con honestidad y transparencia en todo momento.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">💪</div>
            <h3 className="text-xl font-semibold mb-2">Excelencia</h3>
            <p className="text-gray-600">
              Buscamos la mejora continua en nuestro servicio.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center mb-12">Nuestro Equipo</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: 'Juan Pérez',
              position: 'Director General',
              image: '/images/team-1.jpg'
            },
            {
              name: 'María González',
              position: 'Asesora Senior',
              image: '/images/team-2.jpg'
            },
            {
              name: 'Carlos Rodríguez',
              position: 'Especialista en Reclamos',
              image: '/images/team-3.jpg'
            }
          ].map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative h-64 mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-gray-600">{member.position}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
