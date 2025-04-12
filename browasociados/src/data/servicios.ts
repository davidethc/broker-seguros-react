export interface Servicio {
  id: string
  title: string
  shortDescription: string
  description: string
  features: string[]
  icon: string
  image: string
}

export const servicios: Servicio[] = [
  {
    id: 'seguro-vehicular',
    title: 'Seguro Vehicular',
    shortDescription: 'Protege tu vehículo contra accidentes, robo y más.',
    description: 'Nuestro seguro vehicular te ofrece la protección más completa para tu auto. Cubrimos daños por accidentes, robo total o parcial, responsabilidad civil y asistencia en carretera 24/7.',
    features: [
      'Cobertura contra todo riesgo',
      'Asistencia en carretera 24/7',
      'Cobertura por robo total y parcial',
      'Responsabilidad civil',
      'Red de talleres autorizados',
      'Vehículo de reemplazo'
    ],
    icon: '🚗',
    image: '/images/seguro-vehicular.jpg'
  },
  {
    id: 'seguro-vida',
    title: 'Seguro de Vida',
    shortDescription: 'Asegura el futuro financiero de tus seres queridos.',
    description: 'Protege a tu familia y asegura su estabilidad financiera con nuestros planes de seguro de vida. Ofrecemos coberturas flexibles que se adaptan a tus necesidades y presupuesto.',
    features: [
      'Cobertura por fallecimiento',
      'Indemnización por invalidez',
      'Gastos médicos',
      'Enfermedades graves',
      'Ahorro programado',
      'Beneficios adicionales personalizables'
    ],
    icon: '❤️',
    image: '/images/seguro-vida.jpg'
  },
  {
    id: 'seguro-hogar',
    title: 'Seguro de Hogar',
    shortDescription: 'Protege tu hogar y tus bienes más preciados.',
    description: 'Tu hogar merece la mejor protección. Nuestro seguro de hogar cubre daños a la estructura, contenidos, robo y responsabilidad civil, para que vivas tranquilo.',
    features: [
      'Cobertura contra incendios',
      'Protección contra robo',
      'Daños por fenómenos naturales',
      'Responsabilidad civil',
      'Asistencia domiciliaria',
      'Protección de electrodomésticos'
    ],
    icon: '🏠',
    image: '/images/seguro-hogar.jpg'
  },
  {
    id: 'seguro-empresarial',
    title: 'Seguro Empresarial',
    shortDescription: 'Soluciones integrales para tu negocio.',
    description: 'Protege tu empresa con nuestras soluciones de seguros empresariales. Ofrecemos coberturas completas para instalaciones, equipos, mercancías y responsabilidad civil.',
    features: [
      'Protección de activos',
      'Cobertura de responsabilidad civil',
      'Seguro para empleados',
      'Interrupción de negocio',
      'Protección contra incendios',
      'Cobertura de equipos electrónicos'
    ],
    icon: '🏢',
    image: '/images/seguro-empresarial.jpg'
  }
]

export function getServicioById(id: string): Servicio | undefined {
  return servicios.find(servicio => servicio.id === id)
}
