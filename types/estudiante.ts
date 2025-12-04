// types/estudiante.ts

export interface Skill {
  nombre: string
  proyectos: string[]
}

export interface Interes {
  nombre: string
  icon: string
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

export interface Estudiante {
  id: number
  nombre: string
  carrera: string
  universidad: string
  año: number
  foto: string
  bio: string
  email: string
  skills: Skill[]           // CAMBIADO: de string[] a Skill[]
  intereses: Interes[]      // NUEVO
  links: {
    github?: string
    linkedin?: string
    portfolio?: string
  }
  proyectos: Proyecto[]
  vitrina?:Vitrina
}
