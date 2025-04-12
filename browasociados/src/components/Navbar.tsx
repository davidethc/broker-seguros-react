'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-blue-600">Brow Asociados</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2">
              Inicio
            </Link>
            <Link href="/nosotros" className="text-gray-700 hover:text-blue-600 px-3 py-2">
              Nosotros
            </Link>
            <Link href="/servicios" className="text-gray-700 hover:text-blue-600 px-3 py-2">
              Servicios
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 px-3 py-2">
              Blog
            </Link>
            <Link href="/contacto" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Contacto
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block text-gray-700 hover:text-blue-600 px-3 py-2">
              Inicio
            </Link>
            <Link href="/nosotros" className="block text-gray-700 hover:text-blue-600 px-3 py-2">
              Nosotros
            </Link>
            <Link href="/servicios" className="block text-gray-700 hover:text-blue-600 px-3 py-2">
              Servicios
            </Link>
            <Link href="/blog" className="block text-gray-700 hover:text-blue-600 px-3 py-2">
              Blog
            </Link>
            <Link href="/contacto" className="block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 mt-2">
              Contacto
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;