import { User, Building2 } from 'lucide-react'
import { CatedraDestacada } from '@/types/estudiante'

interface AcademicCourseCardProps {
    catedra: CatedraDestacada
}

export default function AcademicCourseCard({ catedra }: AcademicCourseCardProps) {
    return (
        <div className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-lg hover:border-indigo-200 transition-all group relative overflow-hidden">
            {/* Decorative university pattern */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-indigo-50 to-transparent rounded-bl-full opacity-50" />

            {/* Distinction Badge */}
            {catedra.distincion && (
                <div className="absolute top-3 right-3 z-10">
                    <span className="inline-flex items-center px-2.5 py-1 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-bold rounded-full shadow-md">
                        ⭐ {catedra.distincion}
                    </span>
                </div>
            )}

            {/* Course Name */}
            <h4 className="font-bold text-gray-900 text-lg mb-3 pr-20 group-hover:text-indigo-700 transition-colors">
                {catedra.curso}
            </h4>

            {/* Professor - Highlighted */}
            <div className="flex items-center gap-2 mb-3 p-2.5 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg border border-indigo-100">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                    <User size={16} className="text-white" />
                </div>
                <div>
                    <p className="text-xs text-indigo-600 font-medium">Cátedra</p>
                    <p className="font-semibold text-gray-900 text-sm">{catedra.profesor}</p>
                </div>
            </div>

            {/* Institution */}
            <div className="flex items-center gap-2 text-sm text-gray-600">
                <Building2 size={14} className="text-gray-400" />
                <span>{catedra.institucion}</span>
            </div>

            {/* Semester if available */}
            {catedra.semestre && (
                <div className="mt-3 pt-3 border-t border-gray-100">
                    <span className="text-xs text-gray-400">Semestre: {catedra.semestre}</span>
                </div>
            )}
        </div>
    )
}
