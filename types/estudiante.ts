// types/estudiante.ts

export interface Skill {
  nombre: string
  proyectos: string[]
}

export interface Interes {
  nombre: string
  icon: string
}

export interface Colaborador {
  nombre: string
  rol: string
}

export interface Proyecto {
  id: number
  titulo: string
  descripcion: string
  imagenPortada: string
  galeria?: string[]
  tags: string[]
  fecha: string
  github?: string
  demo?: string
  destacado: boolean
  colaboradores?: Colaborador[]
}

export interface Testimonio {
  comentario: string
  autor: string
  cargo: string
}

export interface Reconocimiento {
  titulo: string
  descripcion?: string
  fecha: string
  icon: string
}

export interface Vitrina {
  testimonios: Testimonio[]
  reconocimientos: Reconocimiento[]
}

export interface Hito {
  año: number
  titulo: string
  descripcion: string
  fecha: string
  icon: string
  tipo: 'logro' | 'academico' | 'laboral' | 'voluntariado' | 'intercambio'
}

export type EstudianteStatus = 'busca_practica' | 'disponible' | 'trabajando' | 'no_disponible'

export interface Estudiante {
  id: number
  nombre: string
  carrera: string
  universidad: string
  año: number
  foto: string
  coverImage?: string       // NUEVO: Imagen de portada/banner
  status?: EstudianteStatus // NUEVO: Estado de disponibilidad
  bio: string
  email: string
  skills: Skill[]
  intereses: Interes[]
  colaboraciones?: number   // NUEVO: Número de colaboraciones
  trayectoria?: Hito[]      // NUEVO: Timeline de hitos
  links: {
    github?: string
    linkedin?: string
    portfolio?: string
  }
  proyectos: Proyecto[]
  vitrina?: Vitrina
}
