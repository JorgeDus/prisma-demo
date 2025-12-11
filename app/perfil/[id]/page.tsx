import Link from 'next/link'
import { estudiantes } from '@/data/estudiantes'
import { notFound } from 'next/navigation'
import { Github, Linkedin, Globe, ExternalLink, Calendar, CheckCircle2, Briefcase, GraduationCap, MessageCircle, Users, Code, FolderGit2, Star, Filter, Award, MapPin, BookOpen } from 'lucide-react'
import { EstudianteStatus } from '@/types/estudiante'
import TrayectoriaCompacta from '@/components/TrayectoriaCompacta'
import AcademicCourseCard from '@/components/AcademicCourseCard'

// Helper function for status display
const getStatusConfig = (status?: EstudianteStatus) => {
  const configs = {
    busca_practica: { label: 'Busca práctica', color: 'bg-green-500', dotColor: 'bg-green-400' },
    disponible: { label: 'Disponible', color: 'bg-blue-500', dotColor: 'bg-blue-400' },
    trabajando: { label: 'Trabajando', color: 'bg-amber-500', dotColor: 'bg-amber-400' },
    no_disponible: { label: 'No disponible', color: 'bg-gray-500', dotColor: 'bg-gray-400' },
  }
  return status ? configs[status] : configs.disponible
}

// Helper function to get location based on university
const getUniversityLocation = (universidad: string): string => {
  const locations: Record<string, string> = {
    'Universidad de Chile': 'Santiago, Chile',
    'Pontificia Universidad Católica': 'Santiago, Chile',
    'Universidad Diego Portales': 'Santiago, Chile',
    'Universidad de Concepción': 'Concepción, Chile',
    'Universidad Técnica Federico Santa María': 'Valparaíso, Chile',
    'Universidad Adolfo Ibáñez': 'Santiago, Chile',
    'Universidad de los Andes': 'Santiago, Chile',
    'Universidad de Valparaíso': 'Valparaíso, Chile',
  }
  return locations[universidad] || 'Chile'
}

// Valid tab types
type TabType = 'overview' | 'proyectos' | 'credenciales' | 'contacto'

export default async function PerfilPage({
  params,
  searchParams
}: {
  params: Promise<{ id: string }>,
  searchParams: Promise<{ tab?: string }>
}) {
  const { id } = await params
  const { tab } = await searchParams
  const activeTab: TabType = (tab as TabType) || 'overview'

  const estudiante = estudiantes.find(e => e.id === parseInt(id))

  if (!estudiante) {
    notFound()
  }

  const proyectosDestacados = estudiante.proyectos.filter(p => p.destacado)
  const otrosProyectos = estudiante.proyectos.filter(p => !p.destacado)
  const statusConfig = getStatusConfig(estudiante.status)

  // Gradientes únicos por estudiante
  const avatarGradients: Record<number, string> = {
    1: "from-purple-400 via-pink-400 to-rose-400",
    2: "from-blue-400 via-cyan-400 to-teal-400",
    3: "from-pink-400 via-rose-400 to-red-400",
    4: "from-amber-400 via-orange-400 to-red-400",
    5: "from-emerald-400 via-teal-400 to-cyan-400",
    6: "from-indigo-400 via-purple-400 to-pink-400"
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

      {/* NEW HEADER - Clean approach with card overlapping banner */}
      <header>
        {/* Cover Image / Banner - Fixed height */}
        <div className="h-48 md:h-64 relative overflow-hidden">
          {estudiante.coverImage ? (
            <img
              src={estudiante.coverImage}
              alt="Cover"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        {/* White Card - Pulled UP into banner with negative margin */}
        <div className="container mx-auto px-4 -mt-20 md:-mt-24 relative z-10 pb-6">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-5 md:gap-6">

              {/* Profile Picture */}
              <div className="flex-shrink-0">
                <div className={`w-28 h-28 md:w-32 md:h-32 rounded-2xl bg-gradient-to-br ${avatarGradients[estudiante.id] || avatarGradients[1]} flex items-center justify-center border-4 border-white shadow-xl transition-transform hover:scale-105 overflow-hidden`}>
                  {estudiante.foto && !estudiante.foto.startsWith('/avatars/') ? (
                    <img
                      src={estudiante.foto}
                      alt={estudiante.nombre}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-4xl md:text-5xl font-bold text-white">
                      {estudiante.nombre.charAt(0)}
                    </span>
                  )}
                </div>
              </div>

              {/* Info Section */}
              <div className="flex-1 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                {/* Left: Name, Status, Career, Stats */}
                <div className="flex-1">
                  {/* Name + Badges */}
                  <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-2">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{estudiante.nombre}</h1>
                    <div className="flex items-center gap-1 bg-purple-100 text-purple-700 px-2.5 py-1 rounded-full">
                      <CheckCircle2 size={14} />
                      <span className="text-xs font-semibold">Verificado</span>
                    </div>
                    <div className={`flex items-center gap-1.5 ${statusConfig.color} text-white px-2.5 py-1 rounded-full`}>
                      <span className={`w-2 h-2 rounded-full ${statusConfig.dotColor} animate-pulse`} />
                      <span className="text-xs font-semibold">{statusConfig.label}</span>
                    </div>
                  </div>

                  {/* Career, University, Year */}
                  <p className="text-gray-600 font-medium mb-1">
                    {estudiante.carrera} · {estudiante.universidad} · {estudiante.año}° año
                  </p>

                  {/* Location */}
                  <p className="text-gray-500 text-sm flex items-center gap-1.5 mb-4">
                    <MapPin size={14} className="text-purple-500" />
                    {getUniversityLocation(estudiante.universidad)}
                  </p>

                  {/* Stats Row */}
                  <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
                    <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-lg">
                      <Code size={16} className="text-purple-500" />
                      <span><strong className="text-gray-900">{estudiante.skills.length}</strong> Skills</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-lg">
                      <FolderGit2 size={16} className="text-purple-500" />
                      <span><strong className="text-gray-900">{estudiante.proyectos.length}</strong> Proyectos</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-lg">
                      <Users size={16} className="text-purple-500" />
                      <span><strong className="text-gray-900">{estudiante.colaboraciones || 0}</strong> Colaboraciones</span>
                    </div>
                  </div>
                </div>

                {/* Right: Social Links & Contact Button */}
                <div className="flex items-center gap-2 md:gap-3 pt-2 md:pt-0">
                  {estudiante.links.github && (
                    <a
                      href={estudiante.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                      title="GitHub"
                    >
                      <Github size={20} className="text-gray-700" />
                    </a>
                  )}
                  {estudiante.links.linkedin && (
                    <a
                      href={estudiante.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-100 flex items-center justify-center transition-colors"
                      title="LinkedIn"
                    >
                      <Linkedin size={20} className="text-blue-600" />
                    </a>
                  )}
                  {estudiante.links.portfolio && (
                    <a
                      href={estudiante.links.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-100 hover:bg-purple-100 flex items-center justify-center transition-colors"
                      title="Portfolio"
                    >
                      <Globe size={20} className="text-purple-600" />
                    </a>
                  )}
                  <a
                    href={`mailto:${estudiante.email}`}
                    className="flex items-center gap-2 px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-semibold transition-colors shadow-lg shadow-purple-200"
                  >
                    <MessageCircle size={18} />
                    <span>Contactar</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white border-b sticky top-[57px] z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex gap-1 md:gap-2 overflow-x-auto">
            <Link
              href={`/perfil/${id}?tab=overview`}
              className={`px-4 py-4 font-medium whitespace-nowrap transition-colors ${activeTab === 'overview'
                ? 'text-purple-600 border-b-2 border-purple-600 font-semibold'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
            >
              Overview
            </Link>
            <Link
              href={`/perfil/${id}?tab=proyectos`}
              className={`px-4 py-4 font-medium whitespace-nowrap transition-colors ${activeTab === 'proyectos'
                ? 'text-purple-600 border-b-2 border-purple-600 font-semibold'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
            >
              Proyectos ({estudiante.proyectos.length})
            </Link>
            <Link
              href={`/perfil/${id}?tab=credenciales`}
              className={`px-4 py-4 font-medium whitespace-nowrap transition-colors ${activeTab === 'credenciales'
                ? 'text-purple-600 border-b-2 border-purple-600 font-semibold'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
            >
              Credenciales
            </Link>
            <Link
              href={`/perfil/${id}?tab=contacto`}
              className={`px-4 py-4 font-medium whitespace-nowrap transition-colors ${activeTab === 'contacto'
                ? 'text-purple-600 border-b-2 border-purple-600 font-semibold'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
            >
              Contacto
            </Link>
          </div>
        </div>
      </div>

      {/* TAB CONTENT */}

      {/* OVERVIEW TAB */}
      {activeTab === 'overview' && (
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* LEFT COLUMN - Main Content (8 cols = ~65%) */}
            <main className="lg:col-span-8 space-y-8">

              {/* 👋 Sobre mí */}
              <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-2xl">👋</span>
                  Sobre mí
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {estudiante.bio}
                </p>
              </section>

              {/* ⭐ Proyecto Destacado */}
              {proyectosDestacados.length > 0 && (
                <section className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  <div className="p-6 pb-4">
                    <h2 className="text-xl font-bold flex items-center gap-2">
                      <span className="text-2xl">⭐</span>
                      Proyecto Destacado
                    </h2>
                  </div>

                  {/* Featured Project - First one */}
                  <div>
                    {/* Large Image - Clickable */}
                    <Link href={`/perfil/${id}/proyecto/${proyectosDestacados[0].id}`}>
                      <div className="h-64 md:h-80 bg-gradient-to-br from-purple-100 to-pink-100 overflow-hidden cursor-pointer">
                        <img
                          src={proyectosDestacados[0].imagenPortada}
                          alt={proyectosDestacados[0].titulo}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    </Link>

                    {/* Project Info */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <Link href={`/perfil/${id}/proyecto/${proyectosDestacados[0].id}`} className="hover:text-purple-600 transition-colors">
                          <h3 className="text-xl font-bold text-gray-900 hover:text-purple-600">
                            {proyectosDestacados[0].titulo}
                          </h3>
                        </Link>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <Calendar size={16} />
                          {proyectosDestacados[0].fecha}
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {proyectosDestacados[0].descripcion}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {proyectosDestacados[0].tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex items-center justify-between">
                        <div className="flex gap-3">
                          {proyectosDestacados[0].github && (
                            <a
                              href={proyectosDestacados[0].github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-2 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition text-sm font-medium"
                            >
                              <Github size={16} />
                              Ver Código
                            </a>
                          )}
                          {proyectosDestacados[0].demo && (
                            <a
                              href={proyectosDestacados[0].demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition text-sm font-medium"
                            >
                              <ExternalLink size={16} />
                              Ver Demo
                            </a>
                          )}
                        </div>

                        <Link href={`/perfil/${id}?tab=proyectos`} className="text-purple-600 hover:text-purple-700 font-medium text-sm flex items-center gap-1">
                          Ver todos los proyectos →
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {/* ⚡ Skills with Proficiency */}
              <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <span className="text-2xl">⚡</span>
                  Skills
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {estudiante.skills.slice(0, 4).map((skill, idx) => {
                    const projectCount = skill.proyectos?.length || 0
                    const proficiency = Math.min(projectCount + 2, 5)

                    return (
                      <div key={idx} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-gray-900">{skill.nombre}</span>
                          <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((dot) => (
                              <span
                                key={dot}
                                className={`w-2.5 h-2.5 rounded-full ${dot <= proficiency
                                  ? 'bg-purple-500'
                                  : 'bg-gray-200'
                                  }`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-gray-500">
                          Proyectos: {projectCount}
                        </p>
                      </div>
                    )
                  })}
                </div>

                {estudiante.skills.length > 4 && (
                  <button className="mt-6 text-purple-600 hover:text-purple-700 font-medium text-sm">
                    +{estudiante.skills.length - 4} más
                  </button>
                )}
              </section>

              {/* 🏆 Vitrina - Testimonios (movido aquí desde sidebar) */}
              {estudiante.vitrina?.testimonios && estudiante.vitrina.testimonios.length > 0 && (
                <section className="bg-gradient-to-br from-purple-50 via-white to-pink-50 rounded-xl shadow-sm border border-purple-100 p-6">
                  <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <span className="text-2xl">🏆</span>
                    Vitrina
                    <span className="text-sm font-normal text-gray-500 ml-2">— Lo que dicen de mí</span>
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {estudiante.vitrina.testimonios.map((testimonio, idx) => (
                      <div
                        key={idx}
                        className="relative bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
                      >
                        <div className="absolute -top-2 -left-2 text-3xl opacity-20">"</div>
                        <p className="text-gray-700 italic leading-relaxed mb-4 relative z-10">
                          "{testimonio.comentario}"
                        </p>
                        <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-bold text-sm">
                            {testimonio.autor.charAt(0)}
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">{testimonio.autor}</p>
                            <p className="text-xs text-gray-500">{testimonio.cargo}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* 💡 Intereses */}
              <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-2xl">💡</span>
                  Intereses
                </h2>
                <div className="flex flex-wrap gap-3">
                  {estudiante.intereses?.map((interes, idx) => (
                    <div
                      key={idx}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-50 to-pink-50 rounded-full text-gray-700 border border-purple-100 hover:shadow-md transition-all cursor-default"
                    >
                      <span className="text-lg">{interes.icon}</span>
                      <span className="font-medium">{interes.nombre}</span>
                    </div>
                  ))}
                </div>
              </section>

            </main>

            {/* RIGHT COLUMN - Sidebar (4 cols = ~35%) */}
            <aside className="lg:col-span-4">
              <div className="sticky top-[140px] space-y-6">

                {/* 📈 Trayectoria Compacta con expand/collapse */}
                {estudiante.trayectoria && estudiante.trayectoria.length > 0 && (
                  <TrayectoriaCompacta trayectoria={estudiante.trayectoria} initialCount={4} />
                )}

              </div>
            </aside>

          </div>
        </div>
      )}

      {/* PROYECTOS TAB */}
      {activeTab === 'proyectos' && (
        <div className="container mx-auto px-4 py-8">
          {/* Filter Bar */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-8">
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 text-gray-600">
                <Filter size={18} />
                <span className="font-medium">Filtrar:</span>
              </div>
              <select className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option>Todos</option>
                <option>Destacados</option>
                <option>Más recientes</option>
              </select>
              <select className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option>Por skill</option>
                {estudiante.skills.map((skill, idx) => (
                  <option key={idx}>{skill.nombre}</option>
                ))}
              </select>
              <select className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option>Por fecha</option>
                <option>Más reciente primero</option>
                <option>Más antiguo primero</option>
              </select>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {estudiante.proyectos.map((proyecto) => (
              <div
                key={proyecto.id}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group"
              >
                {/* Project Image - Clickable */}
                <Link href={`/perfil/${id}/proyecto/${proyecto.id}`}>
                  <div className="relative h-48 bg-gradient-to-br from-purple-100 to-pink-100 overflow-hidden cursor-pointer">
                    <img
                      src={proyecto.imagenPortada}
                      alt={proyecto.titulo}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {proyecto.destacado && (
                      <div className="absolute top-3 left-3 flex items-center gap-1 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-lg text-xs font-semibold">
                        <Star size={12} fill="currentColor" />
                        Destacado
                      </div>
                    )}
                  </div>
                </Link>

                {/* Project Info */}
                <div className="p-5">
                  <Link href={`/perfil/${id}/proyecto/${proyecto.id}`}>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors cursor-pointer">
                      {proyecto.titulo}
                    </h3>
                  </Link>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {proyecto.descripcion}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {proyecto.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-purple-50 text-purple-700 rounded-md text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                    {proyecto.tags.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-500 rounded-md text-xs">
                        +{proyecto.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <div className="flex gap-2">
                      {proyecto.github && (
                        <a
                          href={proyecto.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                          title="Ver código"
                        >
                          <Github size={18} />
                        </a>
                      )}
                      {proyecto.demo && (
                        <a
                          href={proyecto.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
                          title="Ver demo"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Calendar size={12} />
                      {proyecto.fecha}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CREDENCIALES TAB - Sala de Trofeos */}
      {activeTab === 'credenciales' && (
        <div className="container mx-auto px-4 py-8">

          {/* Header de la sección */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">🏆 Sala de Trofeos</h2>
            <p className="text-gray-600">Premios, reconocimientos y certificaciones verificadas</p>
          </div>

          {/* Sección Superior: Premios y Reconocimientos - Grid 2 columnas */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                <Award size={22} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Premios y Reconocimientos</h3>
            </div>

            {estudiante.vitrina?.reconocimientos && estudiante.vitrina.reconocimientos.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {estudiante.vitrina.reconocimientos.map((rec, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-br from-yellow-50 via-white to-orange-50 rounded-2xl border border-yellow-200 p-6 hover:shadow-lg transition-all hover:-translate-y-1"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-2xl shadow-lg">
                        {rec.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 text-lg mb-1">{rec.titulo}</h4>
                        {rec.descripcion && (
                          <p className="text-gray-600 text-sm mb-2">{rec.descripcion}</p>
                        )}
                        <div className="flex items-center gap-2">
                          <Calendar size={14} className="text-gray-400" />
                          <span className="text-sm text-gray-500">{rec.fecha}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Agregar premios de trayectoria tipo 'logro' que no estén en reconocimientos */}
                {estudiante.trayectoria
                  ?.filter(h => h.tipo === 'logro' && !estudiante.vitrina?.reconocimientos?.some(r => r.titulo === h.titulo))
                  .map((logro, idx) => (
                    <div
                      key={`tray-${idx}`}
                      className="bg-gradient-to-br from-purple-50 via-white to-pink-50 rounded-2xl border border-purple-200 p-6 hover:shadow-lg transition-all hover:-translate-y-1"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-2xl shadow-lg">
                          {logro.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 text-lg mb-1">{logro.titulo}</h4>
                          <p className="text-gray-600 text-sm mb-2">{logro.descripcion}</p>
                          <div className="flex items-center gap-2">
                            <Calendar size={14} className="text-gray-400" />
                            <span className="text-sm text-gray-500">{logro.fecha}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-xl border border-dashed border-gray-300">
                <span className="text-4xl mb-4 block">🏅</span>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Sin premios registrados</h4>
                <p className="text-gray-500">Los reconocimientos aparecerán aquí</p>
              </div>
            )}
          </section>

          {/* Sección Inferior: Certificaciones y Cursos - Grid 3 columnas */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <GraduationCap size={22} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Certificaciones y Cursos</h3>
            </div>

            {(() => {
              // Filtrar certificaciones válidas (excluyendo "Inicio..." y items laborales)
              const certificaciones = estudiante.trayectoria?.filter(h =>
                h.tipo === 'academico' &&
                !h.titulo.toLowerCase().startsWith('inicio') &&
                !h.titulo.toLowerCase().includes('ayudante')
              ) || []

              // Agregar intercambios como formación
              const intercambios = estudiante.trayectoria?.filter(h => h.tipo === 'intercambio') || []

              const allCerts = [...certificaciones, ...intercambios]

              return allCerts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {allCerts.map((cert, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md hover:border-purple-200 transition-all group"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center text-xl group-hover:from-blue-200 group-hover:to-indigo-200 transition-colors">
                          {cert.icon}
                        </div>
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${cert.tipo === 'intercambio'
                          ? 'bg-purple-100 text-purple-700'
                          : 'bg-blue-100 text-blue-700'
                          }`}>
                          {cert.tipo === 'intercambio' ? '🌍 Intercambio' : '📜 Certificación'}
                        </span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1 line-clamp-2">{cert.titulo}</h4>
                      <p className="text-sm text-gray-500 mb-2 line-clamp-2">{cert.descripcion}</p>
                      <div className="flex items-center gap-1 text-xs text-gray-400">
                        <Calendar size={12} />
                        <span>{cert.fecha}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-gray-50 rounded-xl border border-dashed border-gray-300">
                  <span className="text-4xl mb-4 block">🎓</span>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Sin certificaciones registradas</h4>
                  <p className="text-gray-500">Las certificaciones y cursos aparecerán aquí</p>
                </div>
              )
            })()}
          </section>

          {/* Sección 3: Cátedras Destacadas - Grid 2 columnas */}
          {estudiante.catedrasDestacadas && estudiante.catedrasDestacadas.length > 0 && (
            <section className="mt-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                  <BookOpen size={22} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Cátedras Destacadas</h3>
                  <p className="text-sm text-gray-500">Cursos con profesores de referencia en la disciplina</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {estudiante.catedrasDestacadas.map((catedra, idx) => (
                  <AcademicCourseCard key={idx} catedra={catedra} />
                ))}
              </div>
            </section>
          )}

        </div>
      )}

      {/* CONTACTO TAB - Placeholder */}
      {activeTab === 'contacto' && (
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
            <span className="text-6xl mb-4 block">📧</span>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Contacto</h2>
            <p className="text-gray-600 mb-6">¿Quieres trabajar con {estudiante.nombre}?</p>
            <a
              href={`mailto:${estudiante.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-colors"
            >
              <MessageCircle size={20} />
              Enviar email
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
