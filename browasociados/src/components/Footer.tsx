import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Brow Asociados</h3>
            <p className="text-gray-400">Tu broker de seguros de confianza en Loja, Ecuador.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white">Inicio</Link></li>
              <li><Link href="/nosotros" className="text-gray-400 hover:text-white">Nosotros</Link></li>
              <li><Link href="/servicios" className="text-gray-400 hover:text-white">Servicios</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li><Link href="/servicios/seguro-vehicular" className="text-gray-400 hover:text-white">Seguro Vehicular</Link></li>
              <li><Link href="/servicios/seguro-vida" className="text-gray-400 hover:text-white">Seguro de Vida</Link></li>
              <li><Link href="/servicios/seguro-hogar" className="text-gray-400 hover:text-white">Seguro de Hogar</Link></li>
              <li><Link href="/servicios/seguro-empresarial" className="text-gray-400 hover:text-white">Seguro Empresarial</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Av. Principal 123</li>
              <li>Loja, Ecuador</li>
              <li>Tel: (07) 123-4567</li>
              <li>Email: info@browasociados.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Brow Asociados. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;