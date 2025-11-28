// data/estudiantes.ts

import { Estudiante } from '@/types/estudiante'

export const estudiantes: Estudiante[] = [
  {
    id: 1,
    nombre: "María González",
    carrera: "Ingeniería Civil Informática",
    universidad: "Universidad de Chile",
    año: 3,
    foto: "/avatars/maria.jpg",
    bio: "Desarrolladora full-stack apasionada por crear experiencias web intuitivas. Me especializo en React y Node.js, y disfruto resolviendo problemas complejos con soluciones elegantes.",
    email: "maria.gonzalez@uchile.cl",
    skills: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Git"],
    links: {
      github: "https://github.com/mariagonzalez",
      linkedin: "https://linkedin.com/in/mariagonzalez",
    },
    proyectos: [
      {
        id: 1,
        titulo: "Sistema de Gestión Académica",
        descripcion: "Plataforma web para gestionar horarios, notas y comunicación entre estudiantes y profesores. Desarrollada como proyecto de curso usando metodologías ágiles con un equipo de 4 personas.",
        imagenPortada: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
        galeria: [
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
          "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=800"
        ],
        tags: ["React", "Node.js", "PostgreSQL", "REST API"],
        fecha: "2024-05",
        github: "https://github.com/mariagonzalez/sistema-academico",
        demo: "https://sistema-academico-demo.vercel.app",
        destacado: true
      },
      {
        id: 2,
        titulo: "App de Finanzas Personales",
        descripcion: "Aplicación móvil para tracking de gastos con visualizaciones interactivas y presupuestos personalizables. Proyecto personal para aprender React Native y mejorar mis habilidades de desarrollo móvil.",
        imagenPortada: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800",
        tags: ["React Native", "Firebase", "Chart.js"],
        fecha: "2024-08",
        github: "https://github.com/mariagonzalez/finanzas-app",
        destacado: false
      },
      {
        id: 3,
        titulo: "E-commerce de Productos Locales",
        descripcion: "Marketplace para conectar productores locales con consumidores. Incluye sistema de pagos con Stripe, reviews de productos y geolocalización para encontrar productores cercanos.",
        imagenPortada: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800",
        galeria: [
          "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800",
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800"
        ],
        tags: ["Next.js", "Stripe", "Tailwind", "Prisma"],
        fecha: "2024-10",
        github: "https://github.com/mariagonzalez/ecommerce-local",
        demo: "https://ecommerce-local.vercel.app",
        destacado: true
      }
    ]
  },
  {
    id: 2,
    nombre: "Carlos Rojas",
    carrera: "Ingeniería en Informática",
    universidad: "Pontificia Universidad Católica",
    año: 4,
    foto: "/avatars/carlos.jpg",
    bio: "Data scientist en formación con fuerte background en machine learning y análisis de datos. Me interesa aplicar IA para resolver problemas sociales y mejorar la toma de decisiones basada en datos.",
    email: "carlos.rojas@uc.cl",
    skills: ["Python", "TensorFlow", "Pandas", "SQL", "Scikit-learn", "Docker"],
    links: {
      github: "https://github.com/carlosrojas",
      linkedin: "https://linkedin.com/in/carlosrojas",
      portfolio: "https://carlosrojas.dev"
    },
    proyectos: [
      {
        id: 4,
        titulo: "Predictor de Deserción Universitaria",
        descripcion: "Modelo de machine learning que predice el riesgo de deserción estudiantil usando datos académicos y sociodemográficos. Implementado en colaboración con la dirección de pregrado de la UC con accuracy del 87%.",
        imagenPortada: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
        galeria: [
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
          "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800"
        ],
        tags: ["Python", "Scikit-learn", "Pandas", "Machine Learning"],
        fecha: "2024-06",
        github: "https://github.com/carlosrojas/predictor-desercion",
        destacado: true
      },
      {
        id: 5,
        titulo: "Análisis de Sentimientos en Twitter",
        descripcion: "Sistema de análisis en tiempo real de tweets sobre temas de contingencia nacional usando NLP. Incluye dashboard con visualizaciones interactivas y clasificación de sentimientos con 85% de precisión.",
        imagenPortada: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800",
        tags: ["Python", "NLTK", "Twitter API", "Streamlit"],
        fecha: "2024-03",
        github: "https://github.com/carlosrojas/sentiment-analysis",
        demo: "https://sentiment-analysis-cl.streamlit.app",
        destacado: true
      }
    ]
  },
  {
    id: 3,
    nombre: "Sofía Torres",
    carrera: "Diseño UX/UI",
    universidad: "Universidad Diego Portales",
    año: 2,
    foto: "/avatars/sofia.jpg",
    bio: "Diseñadora UX/UI enfocada en crear experiencias digitales centradas en el usuario. Me apasiona combinar investigación, diseño visual y prototipado para resolver problemas reales de las personas.",
    email: "sofia.torres@mail.udp.cl",
    skills: ["Figma", "Sketch", "Prototyping", "User Research", "Adobe XD", "Design Systems"],
    links: {
      linkedin: "https://linkedin.com/in/sofiatorres",
      portfolio: "https://sofiatorres.design"
    },
    proyectos: [
      {
        id: 6,
        titulo: "Rediseño App de Transporte Público",
        descripcion: "Rediseño completo de la experiencia de usuario para app de transporte público de Santiago. Incluye investigación con usuarios, wireframes, diseño visual y prototipo funcional testeado con 50+ usuarios.",
        imagenPortada: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800",
        galeria: [
          "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800",
          "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800",
          "https://images.unsplash.com/photo-1545665225-b23b99e4d45e?w=800"
        ],
        tags: ["Figma", "User Research", "Prototyping", "Usability Testing"],
        fecha: "2024-09",
        demo: "https://figma.com/proto/sofia-transporte",
        destacado: true
      },
      {
        id: 7,
        titulo: "Design System para Startup EdTech",
        descripcion: "Creación de sistema de diseño escalable para startup de educación online. Incluye componentes reutilizables, guías de estilo, paleta de colores accesible y documentación completa para desarrolladores.",
        imagenPortada: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800",
        tags: ["Figma", "Design Systems", "Component Library", "Documentation"],
        fecha: "2024-07",
        demo: "https://figma.com/design-system-edtech",
        destacado: true
      }
    ]
  }
]
