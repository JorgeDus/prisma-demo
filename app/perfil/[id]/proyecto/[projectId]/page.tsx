'use client'

import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { estudiantes } from '@/data/estudiantes'
import { Github, ExternalLink, Calendar, X, ArrowLeft, Users } from 'lucide-react'
import { useState } from 'react'

export default function ProyectoExpandidoPage() {
    const params = useParams()
    const router = useRouter()
    const studentId = parseInt(params.id as string)
    const projectId = parseInt(params.projectId as string)

    const estudiante = estudiantes.find(e => e.id === studentId)
    const proyecto = estudiante?.proyectos.find(p => p.id === projectId)

    // State for gallery
    const [activeImage, setActiveImage] = useState(0)

    if (!estudiante || !proyecto) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Proyecto no encontrado</h1>
                    <Link href={`/perfil/${studentId}`} className="text-purple-600 hover:text-purple-700">
                        ← Volver al perfil
                    </Link>
                </div>
            </div>
        )
    }

    // Gallery images - use galeria if available, otherwise just the cover
    const galleryImages = proyecto.galeria?.length ? proyecto.galeria : [proyecto.imagenPortada]

    // Project features (parse from description or use placeholder)
    const features = [
        'Sistema de autenticación con roles',
        'Dashboard personalizado por tipo de usuario',
        'Notificaciones en tiempo real',
        'API RESTful documentada'
    ]

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navigation Bar */}
            <nav className="bg-white border-b sticky top-0 z-50">
                <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                    <button
                        onClick={() => router.back()}
                        className="text-purple-600 hover:text-purple-700 flex items-center gap-2 font-medium"
                    >
                        <ArrowLeft size={20} />
                        Volver
                    </button>
                    <Link
                        href={`/perfil/${studentId}?tab=proyectos`}
                        className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        <X size={24} />
                    </Link>
                </div>
            </nav>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-8 max-w-5xl">

                {/* Hero Image */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-6">
                    <div className="h-[400px] md:h-[500px] bg-gradient-to-br from-purple-100 to-pink-100 overflow-hidden">
                        <img
                            src={galleryImages[activeImage]}
                            alt={proyecto.titulo}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Thumbnail Gallery */}
                {galleryImages.length > 1 && (
                    <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
                        {galleryImages.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveImage(idx)}
                                className={`flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden border-2 transition-all ${activeImage === idx
                                        ? 'border-purple-500 ring-2 ring-purple-200'
                                        : 'border-gray-200 hover:border-gray-300'
                                    }`}
                            >
                                <img
                                    src={img}
                                    alt={`${proyecto.titulo} ${idx + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </button>
                        ))}
                    </div>
                )}

                {/* Project Header */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                            {proyecto.titulo}
                        </h1>
                        <div className="flex items-center gap-2 text-gray-500 bg-gray-100 px-4 py-2 rounded-lg">
                            <Calendar size={18} />
                            <span className="font-medium">{proyecto.fecha}</span>
                        </div>
                    </div>

                    <div className="border-b-2 border-purple-200 mb-6" />

                    {/* Description */}
                    <div className="prose prose-gray max-w-none mb-8">
                        <p className="text-gray-700 text-lg leading-relaxed mb-6">
                            {proyecto.descripcion}
                        </p>

                        <h3 className="text-lg font-semibold text-gray-900 mb-4">El proyecto incluyó:</h3>
                        <ul className="space-y-2">
                            {features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-gray-700">
                                    <span className="text-purple-500 mt-1">•</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Stack & Collaborators Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        {/* Tech Stack */}
                        <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                                <span className="text-xl">🛠️</span>
                                Stack
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {proyecto.tags.map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1.5 bg-white border border-purple-200 text-purple-700 rounded-lg text-sm font-medium shadow-sm"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Collaborators */}
                        <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                                <span className="text-xl">👥</span>
                                Colaboradores
                            </h3>
                            {proyecto.colaboradores && proyecto.colaboradores.length > 0 ? (
                                <div className="space-y-3">
                                    {proyecto.colaboradores.map((colab, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                                                <Users size={16} className="text-purple-600" />
                                            </div>
                                            <div>
                                                <span className="font-medium text-gray-900">{colab.nombre}</span>
                                                <span className="text-gray-500 mx-2">·</span>
                                                <span className="text-gray-600">{colab.rol}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-gray-500 italic">Proyecto individual</p>
                            )}
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4">
                        {proyecto.github && (
                            <a
                                href={proyecto.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 rounded-xl hover:bg-gray-50 transition text-base font-medium"
                            >
                                <Github size={20} />
                                Ver Código ↗
                            </a>
                        )}
                        {proyecto.demo && (
                            <a
                                href={proyecto.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition text-base font-medium shadow-lg shadow-purple-200"
                            >
                                <ExternalLink size={20} />
                                Ver Demo ↗
                            </a>
                        )}
                    </div>
                </div>

                {/* Back to Profile */}
                <div className="text-center">
                    <Link
                        href={`/perfil/${studentId}?tab=proyectos`}
                        className="text-purple-600 hover:text-purple-700 font-medium"
                    >
                        ← Ver todos los proyectos de {estudiante.nombre}
                    </Link>
                </div>

            </div>
        </div>
    )
}
