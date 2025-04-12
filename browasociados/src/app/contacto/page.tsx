import { generateMetadata as genMeta } from '@/utils/seo'
import ContactForm from '@/components/ContactForm'

export const metadata = genMeta({
  title: 'Contacto',
  description: 'Contáctanos para obtener más información sobre nuestros servicios de seguros en Loja, Ecuador. Estamos aquí para ayudarte a proteger lo que más valoras.',
  path: '/contacto',
})

export default function ContactoPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <section className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Contáctanos</h1>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
          Estamos aquí para ayudarte. Completa el formulario y nos pondremos en contacto contigo lo antes posible.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <div className="bg-blue-50 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-6">Información de Contacto</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-1">Dirección</h3>
                <p className="text-gray-600">
                  Av. Principal 123<br />
                  Loja, Ecuador
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Teléfono</h3>
                <p className="text-gray-600">
                  +593 (7) 123-4567<br />
                  +593 98 765 4321
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-gray-600">
                  info@browasociados.com
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Horario de Atención</h3>
                <p className="text-gray-600">
                  Lunes a Viernes: 9:00 AM - 6:00 PM<br />
                  Sábados: 9:00 AM - 1:00 PM
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">¿Por qué Elegirnos?</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                <div>
                  <h3 className="font-semibold mb-1">Experiencia Comprobada</h3>
                  <p className="text-gray-600">Más de 10 años en el mercado de seguros.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                <div>
                  <h3 className="font-semibold mb-1">Atención Personalizada</h3>
                  <p className="text-gray-600">Te asesoramos según tus necesidades específicas.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                <div>
                  <h3 className="font-semibold mb-1">Respuesta Rápida</h3>
                  <p className="text-gray-600">Atendemos tus consultas y reclamos con prontitud.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Envíanos un Mensaje</h2>
            <ContactForm />
          </div>
        </div>
      </div>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-center mb-8">Preguntas Frecuentes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              pregunta: '¿Cómo puedo obtener una cotización?',
              respuesta: 'Puedes obtener una cotización completando nuestro formulario en línea o llamándonos directamente. Te responderemos en menos de 24 horas.'
            },
            {
              pregunta: '¿Qué documentos necesito para contratar un seguro?',
              respuesta: 'Los documentos necesarios varían según el tipo de seguro. Generalmente se requiere identificación, comprobante de domicilio y documentación específica del bien a asegurar.'
            },
            {
              pregunta: '¿Cuánto tiempo toma procesar un reclamo?',
              respuesta: 'El tiempo de procesamiento varía según el tipo de reclamo, pero nos esforzamos por resolverlos lo más rápido posible, generalmente en un plazo de 48-72 horas.'
            },
            {
              pregunta: '¿Ofrecen planes personalizados?',
              respuesta: 'Sí, trabajamos contigo para entender tus necesidades específicas y diseñar un plan de seguro que se ajuste a tus requerimientos y presupuesto.'
            }
          ].map((item, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-2">{item.pregunta}</h3>
              <p className="text-gray-600">{item.respuesta}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
