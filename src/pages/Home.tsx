import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <div>
      <Hero />
      <section className="py-20 bg-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-8">Bienvenido a Elite Cuts</h2>
            <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
              Descubre la experiencia única de nuestro servicio de barbería premium. 
              Nuestro equipo de expertos está listo para transformar tu estilo.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link
                to="/servicios"
                className="bg-zinc-900 p-8 rounded-lg text-center hover:transform hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-4">Nuestros Servicios</h3>
                <p className="text-zinc-400">Explora nuestra variedad de servicios profesionales</p>
              </Link>
              <Link
                to="/galeria"
                className="bg-zinc-900 p-8 rounded-lg text-center hover:transform hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-4">Galería</h3>
                <p className="text-zinc-400">Inspírate con nuestros mejores trabajos</p>
              </Link>
              <Link
                to="/reservar"
                className="bg-zinc-900 p-8 rounded-lg text-center hover:transform hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-4">Reserva tu Cita</h3>
                <p className="text-zinc-400">Agenda tu visita en el horario que prefieras</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;