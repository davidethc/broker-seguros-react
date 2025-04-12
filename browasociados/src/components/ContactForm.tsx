'use client';

import { useState } from 'react';

interface ContactFormProps {
  serviceType?: string;
  className?: string;
}

export default function ContactForm({ serviceType, className = '' }: ContactFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
    tipoSeguro: serviceType || '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/send-email.php', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
      } else {
        alert('Hubo un error al enviar el formulario. Por favor, intenta nuevamente.');
      }
    } catch (error) {
      alert('Error de conexión. Por favor, verifica tu conexión a internet.');
      console.error('Error:', error);
    }
  };

  if (isSubmitted) {
    return (
      <div className={`bg-green-50 p-6 rounded-lg ${className}`}>
        <h3 className="text-2xl font-bold text-green-700 mb-4">¡Gracias por contactarnos!</h3>
        <p className="text-green-600 mb-4">
          Hemos recibido tu solicitud de información{serviceType ? ` sobre ${serviceType}` : ''}.
          Uno de nuestros asesores se pondrá en contacto contigo en las próximas 24 horas.
        </p>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h4 className="font-semibold mb-2">Próximos pasos:</h4>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Revisaremos tu solicitud
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Te contactaremos para entender mejor tus necesidades
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Prepararemos una cotización personalizada
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Te asesoraremos en todo el proceso
            </li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-6 ${className}`}>
      <div>
        <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
          Nombre completo *
        </label>
        <input
          type="text"
          id="nombre"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          value={formData.nombre}
          onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Correo electrónico *
        </label>
        <input
          type="email"
          id="email"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">
          Teléfono *
        </label>
        <input
          type="tel"
          id="telefono"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          value={formData.telefono}
          onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
        />
      </div>

      {!serviceType && (
        <div>
          <label htmlFor="tipoSeguro" className="block text-sm font-medium text-gray-700 mb-1">
            Tipo de Seguro
          </label>
          <select
            id="tipoSeguro"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            value={formData.tipoSeguro}
            onChange={(e) => setFormData({ ...formData, tipoSeguro: e.target.value })}
          >
            <option value="">Selecciona un tipo de seguro</option>
            <option value="Seguro Vehicular">Seguro Vehicular</option>
            <option value="Seguro de Vida">Seguro de Vida</option>
            <option value="Seguro de Hogar">Seguro de Hogar</option>
            <option value="Seguro Empresarial">Seguro Empresarial</option>
          </select>
        </div>
      )}

      <div>
        <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
          Mensaje o consulta específica
        </label>
        <textarea
          id="mensaje"
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          value={formData.mensaje}
          onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors"
      >
        Enviar Solicitud
      </button>

      <p className="text-sm text-gray-500 mt-4">
        Al enviar este formulario, aceptas nuestra política de privacidad y el tratamiento de tus datos personales.
      </p>
    </form>
  );
}
