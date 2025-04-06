export default function Hero({ onBook }) {
  return (
    <section className="bg-quinta-black text-white py-24 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Welcome to Quinta Diamante
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Experience luxury and relaxation at our exclusive pool venue. Perfect for events, celebrations, or a private day of leisure in Acuña, Coahuila.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-black font-semibold py-3 px-6 rounded-2xl hover:bg-gray-200 transition">
            Book Now
          </button>
          <button className="border border-white text-white py-3 px-6 rounded-2xl hover:bg-white hover:text-black transition">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
}