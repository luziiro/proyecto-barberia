import React, { useState } from 'react';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para procesar la reserva
    console.log('Reserva:', formData);
    alert('¡Gracias por tu reserva! Te contactaremos pronto para confirmar.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-20">
      <section className="py-20 bg-zinc-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Reserva tu Cita</h1>
            <p className="text-zinc-400">Elige el día y hora que mejor te convenga</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">Teléfono</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium mb-2">Servicio</label>
              <select
                id="service"
                name="service"
                required
                className="w-full px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                onChange={handleChange}
              >
                <option value="">Selecciona un servicio</option>
                <option value="corte">Corte Clásico</option>
                <option value="barba">Arreglo de Barba</option>
                <option value="peinado">Peinado y Styling</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="date" className="block text-sm font-medium mb-2">Fecha</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="time" className="block text-sm font-medium mb-2">Hora</label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label htmlFor="notes" className="block text-sm font-medium mb-2">Notas adicionales</label>
              <textarea
                id="notes"
                name="notes"
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                onChange={handleChange}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-amber-500 text-black py-3 px-6 rounded-lg font-semibold hover:bg-amber-400 transition-colors"
            >
              Reservar Cita
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Booking;