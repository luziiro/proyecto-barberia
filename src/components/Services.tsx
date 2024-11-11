import React from 'react';

const services = [
  {
    title: 'Corte Clásico',
    price: '$20',
    description: 'Corte de cabello tradicional con acabado profesional'
  },
  {
    title: 'Arreglo de Barba',
    price: '$15',
    description: 'Perfilado y mantenimiento de barba con productos premium'
  },
  {
    title: 'Peinado y Styling',
    price: '$25',
    description: 'Peinado profesional con productos de alta calidad'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Nuestros Servicios</h2>
          <p className="text-zinc-400">Experiencia y calidad en cada servicio</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-zinc-900 p-8 rounded-lg text-center hover:transform hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="h-2 w-20 bg-amber-500 mx-auto mb-6 rounded-full"></div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-amber-500 font-bold mb-4">{service.price}</p>
              <p className="text-zinc-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;