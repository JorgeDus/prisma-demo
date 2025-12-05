"use client"
// app/perfiles/page.tsx

import Link from 'next/link'
import { useState } from 'react'
import { estudiantes } from '@/data/estudiantes'

function Logo() {
  const [showImage, setShowImage] = useState(true)
  return (
    <Link href="/" className="flex items-center gap-3">
      {showImage ? (
        <img
          src="/logo-prisma.PNG"
          alt="PRISMA"
          className="h-8"
          onError={() => setShowImage(false)}
        />
      ) : (
        <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          PRISMA
        </span>
      )}
    </Link>
  )
}

export default function PerfilesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Logo />
          <button className="px-4 py-2 bg-gradient-to-r from-purple-800 via-purple-700 to-cyan-500 text-white rounded-lg hover:opacity-95 transition shadow-lg">
            Crear Perfil
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Descubre el Talento Universitario Emergente
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Perfiles profesionales de estudiantes que están construyendo el futuro
        </p>
      </section>

      {/* Grid de Perfiles */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {estudiantes.map((estudiante) => (
            <Link
              key={estudiante.id}
              href={`/perfil/${estudiante.id}`}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-purple-200 card-hover animate-fade-in-up">
                {/* Top area with gradient and avatar container */}
                <div className="relative">
                  <div className="h-28 bg-gradient-to-br from-purple-900 via-purple-800 to-cyan-500 flex items-end justify-center transition-transform group-hover:scale-105">
                    {/* decorative top area for avatar overlap */}
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-12">
                    {estudiante.foto ? (
                      <img
                        src={estudiante.foto}
                        alt={estudiante.nombre}
                        className="h-24 w-24 rounded-full object-cover border-4 border-white shadow-lg"
                      />
                    ) : (
                      <div className="h-24 w-24 rounded-full bg-white flex items-center justify-center text-xl font-bold shadow-lg border-4 border-white">
                        {estudiante.nombre.charAt(0)}
                      </div>
                    )}
                  </div>
                </div>

                {/* Small spacer so content doesn't overlap the avatar */}
                <div className="h-12" />

                {/* Info */}
                  <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 group-hover:text-purple-600 transition">
                    {estudiante.nombre}
                  </h3>
                  <p className="text-sm text-gray-600 mb-1">
                    {estudiante.carrera}
                  </p>
                  <p className="text-sm text-gray-500 mb-3">
                    {estudiante.universidad} · Año {estudiante.año}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {estudiante.skills.slice(0, 3).map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-purple-50 text-purple-700 text-xs rounded-full"
                      >
                        {skill.nombre}
                      </span>
                    ))}
                    {estudiante.skills.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        +{estudiante.skills.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Stats */}
                  <div className="text-sm text-gray-500">
                    {estudiante.proyectos.length} proyecto{estudiante.proyectos.length !== 1 && 's'}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
