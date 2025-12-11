'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Hito } from '@/types/estudiante'

interface TrayectoriaCompactaProps {
    trayectoria: Hito[]
    initialCount?: number
}

export default function TrayectoriaCompacta({
    trayectoria,
    initialCount = 4
}: TrayectoriaCompactaProps) {
    const [expanded, setExpanded] = useState(false)

    // Ordenar por año descendente
    const sortedTrayectoria = [...trayectoria].sort(
        (a, b) => b.año - a.año || b.fecha.localeCompare(a.fecha)
    )

    const visibleHitos = expanded ? sortedTrayectoria : sortedTrayectoria.slice(0, initialCount)
    const hasMore = trayectoria.length > initialCount

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <span className="text-purple-600">📈</span>
                Trayectoria
            </h3>

            {/* Timeline compacto */}
            <div className="relative">
                {/* Línea vertical */}
                <div className="absolute left-[11px] top-2 bottom-8 w-0.5 bg-gradient-to-b from-purple-300 via-purple-200 to-gray-100"></div>

                <div className="space-y-3">
                    {visibleHitos.map((hito, idx) => (
                        <div key={idx} className="relative flex gap-3 group">
                            {/* Dot */}
                            <div className="relative z-10 w-6 h-6 rounded-full bg-white border-2 border-purple-300 flex items-center justify-center text-xs flex-shrink-0 group-hover:border-purple-500 transition-colors">
                                <span className="text-sm">{hito.icon}</span>
                            </div>
                            {/* Content */}
                            <div className="flex-1 pb-3">
                                <div className="flex items-start justify-between gap-2">
                                    <h4 className="font-semibold text-gray-900 text-sm leading-tight">
                                        {hito.titulo}
                                    </h4>
                                    <span className="text-xs text-purple-600 font-medium bg-purple-50 px-2 py-0.5 rounded-full flex-shrink-0">
                                        {hito.año}
                                    </span>
                                </div>
                                <p className={`text-xs text-gray-500 mt-1 ${expanded ? '' : 'line-clamp-2'}`}>
                                    {hito.descripcion}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Botón Expandir/Colapsar */}
            {hasMore && (
                <button
                    onClick={() => setExpanded(!expanded)}
                    className="mt-4 w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 text-purple-700 rounded-lg font-medium text-sm transition-all border border-purple-100 hover:border-purple-200"
                >
                    <span>{expanded ? 'Ver menos' : 'Ver trayectoria completa'}</span>
                    {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
            )}
        </div>
    )
}
