import React from 'react';
import { Link } from 'react-router-dom';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    title: 'Corte Moderno'
  },
  {
    url: 'https://images.unsplash.com/photo-1521322710334-19088c7a7612?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    title: 'Estilo Clásico'
  },
  {
    url: 'https://images.unsplash.com/photo-1534297635766-a262cdcb8ee4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    title: 'Barba Perfecta'
  },
  {
    url: 'https://images.unsplash.com/photo-1517832606299-7ae9b720a186?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    title: 'Degradado'
  },
  {
    url: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    title: 'Estilo Urbano'
  },
  {
    url: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    title: 'Look Ejecutivo'
  }
];

const Gallery = () => {
  return (
    <div className="pt-20">
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Galería de Estilos</h1>
            <p className="text-zinc-400">Inspírate con nuestros mejores trabajos</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div 
                key={index}
                className="relative overflow-hidden group rounded-lg aspect-square"
              >
                <img 
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                  <span className="text-white text-lg font-semibold mb-4">{image.title}</span>
                  <Link
                    to="/reservar"
                    className="bg-amber-500 text-black px-6 py-2 rounded-full font-semibold hover:bg-amber-400 transition-colors"
                  >
                    Reservar este estilo
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;