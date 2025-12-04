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
    skills: [
      {
        nombre: "React",
        proyectos: ["Sistema de Gestión Académica", "E-commerce de Productos Locales"]
      },
      {
        nombre: "TypeScript",
        proyectos: ["Sistema de Gestión Académica"]
      },
      {
        nombre: "Node.js",
        proyectos: ["Sistema de Gestión Académica"]
      },
      {
        nombre: "PostgreSQL",
        proyectos: ["Sistema de Gestión Académica", "E-commerce de Productos Locales"]
      },
      {
        nombre: "Tailwind CSS",
        proyectos: ["E-commerce de Productos Locales"]
      },
      {
        nombre: "Git",
        proyectos: ["Todos los proyectos"]
      }
    ],
    intereses: [
      { nombre: "Inteligencia Artificial", icon: "🤖" },
      { nombre: "Educación Digital", icon: "📚" },
      { nombre: "Tecnología Sostenible", icon: "🌱" },
      { nombre: "Emprendimiento", icon: "💡" },
      { nombre: "Diseño UX", icon: "🎨" },
      { nombre: "Café de especialidad", icon: "☕" }
    ],
    vitrina: {
      testimonios: [
        {
          comentario: "María demostró un liderazgo técnico excepcional en el proyecto de gestión académica. Su capacidad para resolver problemas complejos y guiar al equipo fue clave para el éxito.",
          autor: "Prof. Juan Pérez",
          cargo: "Docente Ingeniería de Software"
        },
        {
          comentario: "Una de las estudiantes más destacadas de su generación. Combina habilidades técnicas sólidas con excelente comunicación y trabajo en equipo.",
          autor: "Dra. Ana López",
          cargo: "Directora de Carrera"
        }
      ],
      reconocimientos: [
        {
          titulo: "1er Lugar - Hackathon UC 2024",
          descripcion: "Categoría Impacto Social",
          fecha: "Octubre 2024",
          icon: "🥇"
        },
        {
          titulo: "Beca Excelencia Académica",
          descripcion: "Top 5% de la generación",
          fecha: "2023-2024",
          icon: "📜"
        },
        {
          titulo: "Ayudante Destacada",
          descripcion: "Curso Desarrollo Web",
          fecha: "2024",
          icon: "⭐"
        }
      ]
    },
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
    skills: [
      {
        nombre: "Python",
        proyectos: ["Predictor de Deserción Universitaria", "Análisis de Sentimientos en Twitter"]
      },
      {
        nombre: "TensorFlow",
        proyectos: ["Predictor de Deserción Universitaria"]
      },
      {
        nombre: "Pandas",
        proyectos: ["Predictor de Deserción Universitaria", "Análisis de Sentimientos en Twitter"]
      },
      {
        nombre: "SQL",
        proyectos: ["Predictor de Deserción Universitaria"]
      },
      {
        nombre: "Scikit-learn",
        proyectos: ["Predictor de Deserción Universitaria"]
      },
      {
        nombre: "Docker",
        proyectos: ["Análisis de Sentimientos en Twitter"]
      }
    ],
    intereses: [
      { nombre: "Machine Learning", icon: "🤖" },
      { nombre: "Data Science", icon: "📊" },
      { nombre: "Impacto Social", icon: "🌍" },
      { nombre: "Ciclismo", icon: "🚴" },
      { nombre: "Ajedrez", icon: "♟️" }
    ],
    vitrina: {
      testimonios: [
        {
          comentario: "Carlos desarrolló un modelo predictivo que superó nuestras expectativas. Su rigurosidad metodológica y capacidad de comunicar resultados técnicos a audiencias no técnicas es excepcional.",
          autor: "Prof. Roberto Fernández",
          cargo: "Director Laboratorio de Machine Learning"
        },
        {
          comentario: "Un estudiante que combina curiosidad científica con impacto real. Su trabajo en deserción universitaria ya está siendo implementado por la dirección de pregrado.",
          autor: "Dra. Carmen Valdés",
          cargo: "Coordinadora Área Data Science"
        }
      ],
      reconocimientos: [
        {
          titulo: "Mejor Paper Estudiantil",
          descripcion: "Congreso Chileno de Inteligencia Artificial",
          fecha: "Septiembre 2024",
          icon: "🥇"
        },
        {
          titulo: "Google Developer Scholarship",
          descripcion: "Machine Learning Bootcamp",
          fecha: "2024",
          icon: "🎓"
        },
        {
          titulo: "Pasantía de Investigación",
          descripcion: "Centro de Modelamiento Matemático",
          fecha: "Verano 2024",
          icon: "🔬"
        }
      ]
    },
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
    skills: [
      {
        nombre: "Figma",
        proyectos: ["Rediseño App de Transporte Público", "Design System para Startup EdTech"]
      },
      {
        nombre: "User Research",
        proyectos: ["Rediseño App de Transporte Público"]
      },
      {
        nombre: "Prototyping",
        proyectos: ["Rediseño App de Transporte Público"]
      },
      {
        nombre: "Design Systems",
        proyectos: ["Design System para Startup EdTech"]
      },
      {
        nombre: "Adobe XD",
        proyectos: []
      },
      {
        nombre: "Usability Testing",
        proyectos: ["Rediseño App de Transporte Público"]
      }
    ],
    intereses: [
      { nombre: "Accesibilidad Web", icon: "♿" },
      { nombre: "Psicología del Color", icon: "🎨" },
      { nombre: "Minimalismo", icon: "✨" },
      { nombre: "Fotografía", icon: "📷" },
      { nombre: "Yoga", icon: "🧘♀️" }
    ],
    vitrina: {
      testimonios: [
        {
          comentario: "Sofía tiene un ojo excepcional para el detalle y una empatía genuina con los usuarios. Su rediseño de la app de transporte fue adoptado como caso de estudio en el curso.",
          autor: "Prof. Francisca Morales",
          cargo: "Docente Diseño de Interacción"
        },
        {
          comentario: "Destaca por su capacidad de fundamentar cada decisión de diseño con investigación sólida. Una diseñadora que piensa sistémicamente.",
          autor: "Alejandro Reyes",
          cargo: "Director Escuela de Diseño UDP"
        }
      ],
      reconocimientos: [
        {
          titulo: "Mención Honrosa - Bienal Diseño Chile",
          descripcion: "Categoría Diseño de Servicios",
          fecha: "Noviembre 2024",
          icon: "🏆"
        },
        {
          titulo: "Certificación Google UX Design",
          descripcion: "Professional Certificate",
          fecha: "2024",
          icon: "📜"
        },
        {
          titulo: "Práctica Profesional",
          descripcion: "Estudio de diseño Continuum",
          fecha: "Verano 2024",
          icon: "💼"
        }
      ]
    },
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
  },
{
    id: 4,
    nombre: "Valentina Muñoz",
    carrera: "Periodismo",
    universidad: "Pontificia Universidad Católica",
    año: 3,
    foto: "/avatars/valentina.jpg",
    bio: "Periodista multimedia especializada en investigación y verificación de datos. Me apasiona el periodismo de impacto social y contar historias que generen cambio real en las comunidades.",
    email: "valentina.munoz@uc.cl",
    skills: [
      {
        nombre: "Investigación Periodística",
        proyectos: ["Reportaje Minería en el Norte", "Fact-checking Elecciones 2024"]
      },
      {
        nombre: "Redacción Digital",
        proyectos: ["Todos los proyectos"]
      },
      {
        nombre: "Verificación de Datos",
        proyectos: ["Fact-checking Elecciones 2024"]
      },
      {
        nombre: "Fotografía Documental",
        proyectos: ["Reportaje Minería en el Norte"]
      },
      {
        nombre: "Edición de Video",
        proyectos: ["Documental Estudiantes Migrantes"]
      },
      {
        nombre: "Redes Sociales",
        proyectos: ["Campaña #ChileSinPlástico"]
      }
    ],
    intereses: [
      { nombre: "Periodismo de Datos", icon: "📊" },
      { nombre: "Derechos Humanos", icon: "⚖️" },
      { nombre: "Sustentabilidad", icon: "🌱" },
      { nombre: "Podcasting", icon: "🎙️" },
      { nombre: "Senderismo", icon: "🥾" }
    ],
    vitrina: {
      testimonios: [
        {
          comentario: "Valentina representa el futuro del periodismo: rigurosa en la investigación, innovadora en formatos y comprometida con el impacto social. Su reportaje sobre minería es trabajo de nivel profesional.",
          autor: "Prof. Mónica Poblete",
          cargo: "Directora Escuela de Periodismo UC"
        },
        {
          comentario: "Su capacidad de verificación de datos y metodología de fact-checking estableció un nuevo estándar en nuestros cursos. Ética impecable.",
          autor: "Cristián Leighton",
          cargo: "Editor Revista Universitaria"
        }
      ],
      reconocimientos: [
        {
          titulo: "Premio Periodismo Joven",
          descripcion: "Colegio de Periodistas de Chile",
          fecha: "Octubre 2024",
          icon: "🏆"
        },
        {
          titulo: "Selección Festival FIDOCS",
          descripcion: "Documental Estudiantes Migrantes",
          fecha: "2024",
          icon: "🎬"
        },
        {
          titulo: "Beca Reporteros Sin Fronteras",
          descripcion: "Taller Internacional de Verificación",
          fecha: "2024",
          icon: "🌍"
        }
      ]
    },
    links: {
      linkedin: "https://linkedin.com/in/valentinamunoz",
      portfolio: "https://valentinamunoz.journoportfolio.com"
    },
    proyectos: [
      {
        id: 8,
        titulo: "Reportaje: Minería en el Norte Grande",
        descripcion: "Investigación multimedia sobre impacto ambiental de minería en comunidades del norte. Publicado en revista universitaria con 15K+ lecturas. Incluye entrevistas a 20+ habitantes, análisis de datos ambientales y fotografía documental.",
        imagenPortada: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800",
        galeria: [
          "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800",
          "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800",
          "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800"
        ],
        tags: ["Investigación", "Fotografía", "Multimedia", "Impacto Social"],
        fecha: "2024-09",
        demo: "https://revistauc.cl/reportaje-mineria-norte",
        destacado: true
      },
      {
        id: 9,
        titulo: "Documental: Estudiantes Migrantes en Chile",
        descripcion: "Mini-documental de 12 minutos sobre desafíos de estudiantes migrantes en universidades chilenas. Presentado en Festival de Cine Universitario. Incluye 5 testimonios, investigación académica y propuestas de políticas públicas.",
        imagenPortada: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800",
        galeria: [
          "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800",
          "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800"
        ],
        tags: ["Video", "Documental", "Migración", "Educación"],
        fecha: "2024-06",
        demo: "https://vimeo.com/estudiantes-migrantes",
        destacado: true
      },
      {
        id: 10,
        titulo: "Fact-checking: Elecciones 2024",
        descripcion: "Verificación de declaraciones de candidatos durante campaña electoral. Publicado en medio digital con metodología transparente. Verificadas 50+ afirmaciones con fuentes oficiales y datos gubernamentales.",
        imagenPortada: "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=800",
        tags: ["Fact-checking", "Política", "Datos"],
        fecha: "2024-10",
        demo: "https://factcheck-chile.com/elecciones2024",
        destacado: false
      }
    ]
  },
  {
    id: 5,
    nombre: "Martín Silva",
    carrera: "Arquitectura",
    universidad: "Universidad de Chile",
    año: 4,
    foto: "/avatars/martin.jpg",
    bio: "Arquitecto en formación enfocado en diseño sostenible y espacios públicos inclusivos. Me apasiona crear arquitectura que mejore la calidad de vida de las comunidades y respete el medio ambiente.",
    email: "martin.silva@uchile.cl",
    skills: [
      {
        nombre: "Revit",
        proyectos: ["Centro Comunitario Barrio Franklin", "Vivienda Social Modular"]
      },
      {
        nombre: "SketchUp",
        proyectos: ["Todos los proyectos"]
      },
      {
        nombre: "AutoCAD",
        proyectos: ["Centro Comunitario Barrio Franklin", "Vivienda Social Modular"]
      },
      {
        nombre: "Photoshop",
        proyectos: ["Todos los proyectos"]
      },
      {
        nombre: "Diseño Bioclimático",
        proyectos: ["Vivienda Social Modular"]
      },
      {
        nombre: "Planificación Urbana",
        proyectos: ["Centro Comunitario Barrio Franklin"]
      }
    ],
    intereses: [
      { nombre: "Arquitectura Sostenible", icon: "🌿" },
      { nombre: "Diseño Urbano", icon: "🏙️" },
      { nombre: "Espacios Públicos", icon: "🏛️" },
      { nombre: "Fotografía Arquitectónica", icon: "📸" },
      { nombre: "Carpintería", icon: "🪵" }
    ],
      vitrina: {
      testimonios: [
        {
          comentario: "Martín combina sensibilidad social con excelencia técnica. Su proyecto de vivienda modular demuestra que es posible hacer arquitectura de calidad accesible para todos.",
          autor: "Prof. Alejandro Aravena",
          cargo: "Docente Taller de Diseño"
        },
        {
          comentario: "Un estudiante que entiende la arquitectura como herramienta de transformación social. Su metodología participativa con comunidades es ejemplar.",
          autor: "Dra. Paula Orta",
          cargo: "Coordinadora Área Urbanismo"
        }
      ],
      reconocimientos: [
        {
          titulo: "1er Lugar Concurso CAP",
          descripcion: "Categoría Vivienda Social",
          fecha: "Agosto 2024",
          icon: "🥇"
        },
        {
          titulo: "Publicación Revista ARQ",
          descripcion: "Artículo sobre diseño bioclimático",
          fecha: "2024",
          icon: "📰"
        },
        {
          titulo: "Taller Internacional",
          descripcion: "ETH Zürich - Sustainable Housing",
          fecha: "Julio 2024",
          icon: "🌍"
        }
      ]
    },
    links: {
      linkedin: "https://linkedin.com/in/martinsilva",
      portfolio: "https://martinsilva.com"
    },
    proyectos: [
      {
        id: 11,
        titulo: "Centro Comunitario Barrio Franklin",
        descripcion: "Diseño de centro comunitario para barrio histórico de Santiago. Propuesta ganadora en concurso universitario. Incluye biblioteca, talleres, espacios de coworking y áreas verdes. Enfoque en recuperación de identidad barrial y sostenibilidad.",
        imagenPortada: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800",
        galeria: [
          "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800",
          "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800",
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800"
        ],
        tags: ["Revit", "Diseño Sostenible", "Espacio Público", "Concurso"],
        fecha: "2024-08",
        destacado: true
      },
      {
        id: 12,
        titulo: "Vivienda Social Modular",
        descripcion: "Sistema de vivienda modular progresiva para familias de sectores vulnerables. Diseño bioclimático adaptable a diferentes climas de Chile. Prototipo construido a escala 1:10. Reducción de 40% en costos de construcción tradicional.",
        imagenPortada: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800",
        galeria: [
          "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800",
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800"
        ],
        tags: ["Vivienda Social", "Diseño Modular", "Sustentabilidad"],
        fecha: "2024-05",
        destacado: true
      },
      {
        id: 13,
        titulo: "Espacio Público Plaza Ñuñoa",
        descripcion: "Rediseño de plaza barrial con enfoque en accesibilidad universal y espacios intergeneracionales. Proyecto de título con participación ciudadana. Incluye juegos infantiles, zona fitness adultos mayores y áreas de permanencia.",
        imagenPortada: "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?w=800",
        tags: ["Espacio Público", "Accesibilidad", "Participación Ciudadana"],
        fecha: "2024-03",
        destacado: false
      }
    ]
  },
  {
    id: 6,
    nombre: "Diego Ramírez",
    carrera: "Derecho",
    universidad: "Universidad de Chile",
    año: 4,
    foto: "/avatars/diego.jpg",
    bio: "Estudiante de derecho enfocado en derechos laborales y humanos. Me apasiona usar el derecho como herramienta de cambio social y defender a quienes más lo necesitan. Experiencia en clínicas jurídicas y litigación pro bono.",
    email: "diego.ramirez@uchile.cl",
    skills: [
      {
        nombre: "Derecho Laboral",
        proyectos: ["Clínica Jurídica Trabajadores"]
      },
      {
        nombre: "Litigación",
        proyectos: ["Caso Defensa Consumidor", "Clínica Jurídica Trabajadores"]
      },
      {
        nombre: "Investigación Legal",
        proyectos: ["Paper Ley de Migración"]
      },
      {
        nombre: "Redacción Jurídica",
        proyectos: ["Todos los proyectos"]
      },
      {
        nombre: "Mediación",
        proyectos: ["Clínica Jurídica Trabajadores"]
      },
      {
        nombre: "Derecho Constitucional",
        proyectos: ["Paper Ley de Migración"]
      }
    ],
      vitrina: {
      testimonios: [
        {
          comentario: "Diego representa lo mejor de nuestra facultad: brillantez académica puesta al servicio de quienes más lo necesitan. Su trabajo en la clínica jurídica ha cambiado vidas.",
          autor: "Prof. María Elena Santibáñez",
          cargo: "Directora Clínica Jurídica UChile"
        },
        {
          comentario: "Un futuro litigante excepcional. Su capacidad de argumentación y preparación de casos está muy por sobre su nivel académico.",
          autor: "Dr. Cristián Maturana",
          cargo: "Docente Derecho Procesal"
        }
      ],
      reconocimientos: [
        {
          titulo: "1er Lugar Torneo de Litigación",
          descripcion: "Competencia Nacional Universitaria",
          fecha: "Septiembre 2024",
          icon: "🥇"
        },
        {
          titulo: "Publicación Revista de Derecho",
          descripcion: "Paper sobre derechos laborales migrantes",
          fecha: "2024",
          icon: "📚"
        },
        {
          titulo: "Beca Pro Bono",
          descripcion: "Programa de Acceso a la Justicia",
          fecha: "2023-2024",
          icon: "⚖️"
        }
      ]
    },
    intereses: [
      { nombre: "Derechos Humanos", icon: "⚖️" },
      { nombre: "Legal Tech", icon: "💻" },
      { nombre: "Derecho Ambiental", icon: "🌍" },
      { nombre: "Debate", icon: "🎤" },
      { nombre: "Escalada", icon: "🧗" }
    ],
    links: {
      linkedin: "https://linkedin.com/in/diegoramirez",
      portfolio: "https://diegoramirez.legal"
    },
    proyectos: [
      {
        id: 14,
        titulo: "Clínica Jurídica: Defensa de Trabajadores",
        descripcion: "Asesoría legal gratuita a 15+ trabajadores en conflictos laborales. Casos ganados en instancias administrativas y judiciales. Coordinación de equipo de 4 estudiantes. Recuperación de más de $8M en indemnizaciones para trabajadores despedidos injustificadamente.",
        imagenPortada: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800",
        galeria: [
          "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800",
          "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800"
        ],
        tags: ["Derecho Laboral", "Clínica Jurídica", "Pro Bono", "Litigación"],
        fecha: "2024-10",
        destacado: true
      },
      {
        id: 15,
        titulo: "Investigación: Nueva Ley de Migración",
        descripcion: "Paper académico sobre impacto de nueva ley de migración en derechos de trabajadores extranjeros. Publicado en Revista Chilena de Derecho. Análisis comparado con legislación europea y propuestas de reforma. Citado en debate parlamentario.",
        imagenPortada: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800",
        tags: ["Investigación", "Migración", "Publicación", "Derechos Humanos"],
        fecha: "2024-07",
        destacado: true
      },
      {
        id: 16,
        titulo: "Caso: Defensa del Consumidor",
        descripcion: "Representación legal en juicio colectivo contra empresa de telecomunicaciones por cobros indebidos. Caso ganado en primera instancia beneficiando a 200+ consumidores. Monto total recuperado: $15M.",
        imagenPortada: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=800",
        tags: ["Litigación", "Defensa Consumidor", "Juicio Colectivo"],
        fecha: "2024-04",
        destacado: false
      }
    ]
  }
]
