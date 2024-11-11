import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Elite Cuts</h3>
            <p className="text-zinc-400">Donde el estilo encuentra la excelencia</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Horario</h3>
            <ul className="text-zinc-400">
              <li>Lunes - Viernes: 9:00 - 20:00</li>
              <li>Sábado: 10:00 - 18:00</li>
              <li>Domingo: Cerrado</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-zinc-800 mt-8 pt-8 text-center text-zinc-400">
          <p>&copy; {new Date().getFullYear()} Elite Cuts. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;