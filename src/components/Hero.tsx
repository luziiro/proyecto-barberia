import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-black"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          opacity: '0.5'
        }}
      />
      
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Elite Cuts</h1>
        <p className="text-xl md:text-2xl mb-8">Donde el estilo encuentra la excelencia</p>
        <a 
          href="#booking" 
          className="bg-amber-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-amber-400 transition-colors"
        >
          Reserva Ahora
        </a>
      </div>
    </section>
  );
};

export default Hero;