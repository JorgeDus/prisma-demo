// app/perfil/[id]/page.tsx

import Link from 'next/link'
import { estudiantes } from '@/data/estudiantes'
import { notFound } from 'next/navigation'
import { Github, Linkedin, Globe, ExternalLink, Calendar, CheckCircle2, Briefcase, GraduationCap } from 'lucide-react'

export default async function PerfilPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const estudiante = estudiantes.find(e => e.id === parseInt(id))

  if (!estudiante) {
    notFound()
  }

  const proyectosDestacados = estudiante.proyectos.filter(p => p.destacado)
  const otrosProyectos = estudiante.proyectos.filter(p => !p.destacado)

  // Gradientes únicos por estudiante
  const avatarGradients: Record<number, string> = {
    1: "from-purple-400 via-pink-400 to-rose-400",
    2: "from-blue-400 via-cyan-400 to-teal-400",
    3: "from-pink-400 via-rose-400 to-red-400"
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b sticky top-0 z-50 backdrop-blur-sm bg-white/90">
        <div className="container mx-auto px-4 py-3">
          <Link
            href="/perfiles"
            className="text-purple-600 hover:text-purple-700 flex items-center gap-2 font-medium"
          >
            ← Volver a perfiles
          </Link>
        </div>
      </nav>

      {/* Header con Gradient (estilo Canvas) */}
      <header className="relative bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white gradient-animated">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 py-12 relative">
          <div className="flex items-center gap-6">
            {/* Avatar Grande */}
            <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${avatarGradients[estudiante.id] || avatarGradients[1]} flex items-center justify-center flex-shrink-0 border-4 border-white shadow-xl transition-transform hover:scale-105`}>
              <span className="text-5xl font-bold text-white">
                {estudiante.nombre.charAt(0)}
              </span>
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-4xl font-bold">{estudiante.nombre}</h1>
                <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                  <CheckCircle2 size={16} className="text-white" />
                  <span className="text-sm font-medium">Verificado</span>
                </div>
              </div>
              <p className="text-lg text-white/90 mb-1">
                {estudiante.carrera}
              </p>
              <p className="text-white/80">
                {estudiante.universidad} · Año {estudiante.año}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="bg-white border-b sticky top-[57px] z-40">
        <div className="container mx-auto px-4">
          <div className="flex gap-8">
            <button className="px-4 py-4 text-purple-600 border-b-2 border-purple-600 font-semibold">
              Overview
            </button>
            <button className="px-4 py-4 text-gray-600 hover:text-gray-900 font-medium">
              Proyectos ({estudiante.proyectos.length})
            </button>
            <button className="px-4 py-4 text-gray-600 hover:text-gray-900 font-medium">
              Contacto
            </button>
          </div>
        </div>
      </div>

      {/* Main Content: 3 Columnas */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* SIDEBAR (3 columnas = 25%) */}
          <aside className="lg:col-span-3 space-y-6">

            {/* About Card & Stats */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 animate-fade-in">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <GraduationCap size={20} className="text-purple-600" />
                Sobre mí
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                {estudiante.bio}
              </p>

              {/* Stats integrated */}
              <div className="border-t pt-6 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    {estudiante.proyectos.length}
                  </div>
                  <div className="text-xs text-gray-500 mt-1 uppercase tracking-wide">Proyectos</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    {estudiante.skills.length}
                  </div>
                  <div className="text-xs text-gray-500 mt-1 uppercase tracking-wide">Skills</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    {estudiante.año}
                  </div>
                  <div className="text-xs text-gray-500 mt-1 uppercase tracking-wide">Año</div>
                </div>
              </div>
            </div>

            {/* Skills Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 animate-fade-in delay-200">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <span className="text-purple-600">⚡</span>
                Skills
              </h3>
              <div className="space-y-3">
                {estudiante.skills.map((skill, idx) => (
                  <div key={idx} className="border-l-2 border-purple-200 pl-3 hover:border-purple-400 transition-colors">
                    <div className="font-medium text-gray-900 text-sm">
                      {skill.nombre}
                    </div>
                    {skill.proyectos && skill.proyectos.length > 0 && (
                      <div className="text-xs text-gray-600 mt-1">
                        Usado en: {skill.proyectos.join(', ')}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Intereses Card - NUEVO */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 animate-fade-in delay-250">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <span className="text-purple-600">💡</span>
                Intereses
              </h3>
              <div className="flex flex-wrap gap-2">
                {estudiante.intereses?.map((interes, idx) => (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-purple-50 to-pink-50 rounded-full text-sm text-gray-700 border border-purple-100 hover:shadow-md transition-all"
                  >
                    <span className="text-base">{interes.icon}</span>
                    <span className="font-medium">{interes.nombre}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Links Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 animate-fade-in delay-300">
              <h3 className="font-bold text-lg mb-3">Enlaces</h3>
              <div className="space-y-2">
                {estudiante.links.github && (
                  <a
                    href={estudiante.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition group"
                  >
                    <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center">
                      <Github size={20} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900 group-hover:text-purple-600">
                        GitHub
                      </div>
                      <div className="text-xs text-gray-500">Ver repositorios</div>
                    </div>
                    <ExternalLink size={16} className="text-gray-400" />
                  </a>
                )}
                {estudiante.links.linkedin && (
                  <a
                    href={estudiante.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition group"
                  >
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                      <Linkedin size={20} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900 group-hover:text-purple-600">
                        LinkedIn
                      </div>
                      <div className="text-xs text-gray-500">Ver perfil profesional</div>
                    </div>
                    <ExternalLink size={16} className="text-gray-400" />
                  </a>
                )}
                {estudiante.links.portfolio && (
                  <a
                    href={estudiante.links.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition group"
                  >
                    <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">
                      <Globe size={20} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900 group-hover:text-purple-600">
                        Portfolio
                      </div>
                      <div className="text-xs text-gray-500">Ver sitio web</div>
                    </div>
                    <ExternalLink size={16} className="text-gray-400" />
                  </a>
                )}
              </div>
            </div>

          </aside>

          {/* MAIN CONTENT - Proyectos (6 columnas = 50%) */}
          <main className="lg:col-span-6 space-y-8">

            {/* Proyectos Destacados */}
            {proyectosDestacados.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <span className="text-2xl">⭐</span>
                  Proyectos Destacados
                </h2>
                <div className="space-y-6">
                  {proyectosDestacados.map((proyecto) => (
                    <div
                      key={proyecto.id}
                      className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 card-hover animate-fade-in-up"
                    >
                      {/* Imagen Hero */}
                      <div className="h-80 bg-gradient-to-br from-purple-100 to-pink-100 overflow-hidden">
                        <img
                          src={proyecto.imagenPortada}
                          alt={proyecto.titulo}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-2xl font-bold text-gray-900">
                            {proyecto.titulo}
                          </h3>
                          <div className="flex items-center gap-1 text-sm text-gray-500">
                            <Calendar size={16} />
                            {proyecto.fecha}
                          </div>
                        </div>

                        <p className="text-gray-700 mb-4 leading-relaxed">
                          {proyecto.descripcion}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {proyecto.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Actions */}
                        <div className="flex gap-3">
                          {proyecto.github && (
                            <a
                              href={proyecto.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-2 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition text-sm font-medium"
                            >
                              <Github size={16} />
                              Ver Código
                            </a>
                          )}
                          {proyecto.demo && (
                            <a
                              href={proyecto.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition text-sm font-medium"
                            >
                              <ExternalLink size={16} />
                              Ver Demo
                            </a>
                          )}
                        </div>

                        {/* Galería */}
                        {proyecto.galeria && proyecto.galeria.length > 1 && (
                          <div className="mt-6 pt-6 border-t">
                            <h4 className="font-semibold mb-3 text-gray-700">Más imágenes</h4>
                            <div className="grid grid-cols-3 gap-3">
                              {proyecto.galeria.slice(1, 4).map((img, idx) => (
                                <div
                                  key={idx}
                                  className="h-32 bg-gray-100 rounded-lg overflow-hidden"
                                >
                                  <img
                                    src={img}
                                    alt={`${proyecto.titulo} ${idx + 2}`}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Otros Proyectos */}
            {otrosProyectos.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold mb-6">Otros Proyectos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {otrosProyectos.map((proyecto) => (
                    <div
                      key={proyecto.id}
                      className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all card-hover"
                    >
                      <div className="h-40 bg-gradient-to-br from-purple-100 to-pink-100 overflow-hidden">
                        <img
                          src={proyecto.imagenPortada}
                          alt={proyecto.titulo}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-bold mb-2">{proyecto.titulo}</h3>
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                          {proyecto.descripcion}
                        </p>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {proyecto.tags.slice(0, 3).map((tag, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-2 text-sm">
                          {proyecto.github && (
                            <a
                              href={proyecto.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-purple-600 hover:text-purple-700 flex items-center gap-1"
                            >
                              <Github size={14} />
                              Código
                            </a>
                          )}
                          {proyecto.demo && (
                            <a
                              href={proyecto.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-purple-600 hover:text-purple-700 flex items-center gap-1"
                            >
                              <ExternalLink size={14} />
                              Demo
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

          </main>

          {/* MI VITRINA (3 columnas = 25%) - STICKY */}
          <aside className="lg:col-span-3">
            <div className="sticky top-[140px] space-y-6">

              {/* Header Vitrina */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <span className="text-yellow-500">🏆</span>
                  Mi Vitrina
                </h3>

                {/* Testimonios */}
                <div className="space-y-4">
                  {estudiante.vitrina?.testimonios?.map((testimonio, idx) => (
                    <div
                      key={idx}
                      className="border-l-2 border-purple-300 pl-3"
                    >
                      <p className="text-sm text-gray-700 italic leading-relaxed">
                        "{testimonio.comentario}"
                      </p>
                      <div className="mt-2">
                        <p className="text-xs font-semibold text-gray-900">
                          {testimonio.autor}
                        </p>
                        <p className="text-xs text-gray-500">
                          {testimonio.cargo}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reconocimientos */}
              {estudiante.vitrina?.reconocimientos &&
               estudiante.vitrina.reconocimientos.length > 0 && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <span className="text-purple-600">🎖️</span>
                    Reconocimientos
                  </h3>
                  <div className="space-y-3">
                    {estudiante.vitrina.reconocimientos.map((rec, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2"
                      >
                        <span className="text-lg">{rec.icon}</span>
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {rec.titulo}
                          </p>
                          {rec.descripcion && (
                            <p className="text-xs text-gray-500">
                              {rec.descripcion}
                            </p>
                          )}
                          <p className="text-xs text-gray-400 mt-1">
                            {rec.fecha}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </aside>

        </div>
      </div>
    </div>
  )
}
