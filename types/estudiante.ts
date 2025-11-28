// types/estudiante.ts

export type Estudiante = {
  id: number
  nombre: string
  carrera: string
  universidad: string
  año: number
  foto: string
  bio: string
  email: string
  skills: string[]
  links: {
    github?: string
    linkedin?: string
    portfolio?: string
  }
  proyectos: Proyecto[]
}

export type Proyecto = {
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
