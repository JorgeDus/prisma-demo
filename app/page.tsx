// app/page.tsx

import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-gray-400 to-purple-700 gradient-animated flex items-center justify-center p-4">
      <div className="text-center text-white max-w-4xl">
        <h1 className="text-6xl font-bold mb-6 animate-fade-in">
          PRISMA
        </h1>
        <p className="text-2xl mb-4 opacity-90 animate-fade-in delay-100">
          Demo Interactivo
        </p>
        <p className="text-xl mb-8 opacity-80 animate-fade-in delay-200">
          Explora cómo estudiantes universitarios muestran su trabajo
          más allá de un CV tradicional
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-300">
          <Link
            href="/perfiles"
            className="px-8 py-4 bg-white text-purple-600 rounded-lg font-bold text-lg hover:bg-gray-100 hover:shadow-2xl transition-all shadow-xl transform hover:scale-105"
          >
            Ver Perfiles de Ejemplo
          </Link>

          <a
            href="https://tuprisma.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-all transform hover:scale-105"
          >
            Ir al Sitio Principal
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all card-hover animate-fade-in-up delay-100">
            <div className="text-4xl mb-2">📊</div>
            <h3 className="font-bold text-lg mb-2">Portfolios Visuales</h3>
            <p className="text-sm opacity-80">
              Proyectos con imágenes, código y demos en vivo
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all card-hover animate-fade-in-up delay-200">
            <div className="text-4xl mb-2">🎓</div>
            <h3 className="font-bold text-lg mb-2">Desde Año 1</h3>
            <p className="text-sm opacity-80">
              Construye tu identidad profesional desde el inicio
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all card-hover animate-fade-in-up delay-300">
            <div className="text-4xl mb-2">✨</div>
            <h3 className="font-bold text-lg mb-2">Más que un CV</h3>
            <p className="text-sm opacity-80">
              Muestra quién eres realmente como profesional
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
