// ==========================================
// CONFIGURACIÓN DE BRANDING Y CONTENIDO
// CERRAJERÍA CLASSIC MEDELLÍN
// ==========================================

const CERRAJERIA_CONFIG = {
  // 1. Configuración Visual & Estilos (CSS Variables)
  theme: {
    primaryColor: "#1a3268",
    secondaryColor: "#c9960c",
    accentColor: "#c0392b",
    backgroundColor: "#f7f8fa",
    textColor: "#1a1a2e",
    textColorMuted: "#5a6072",
    fontHeading: "DM Serif Display",
    fontBody: "Inter",
    borderRadius: "10px",
  },

  // 2. Información del Negocio
  info: {
    name: "Cerrajería Classic Medellín",
    shortName: "Cerrajería Classic",
    doctorName: "",
    doctorTitle: "Cerrajero Profesional · Medellín",
    phone: "+573127333653",
    phoneDisplay: "+57 312 733 3653",
    email: "cerrajeriaclassicmedellin@gmail.com",
    address: "Servicio a Domicilio - Medellín y Área Metropolitana",
    city: "Medellín",
    googleMapsLink: "https://maps.google.com/?q=Cerrajería+Classic+Medellín",
    website: "https://cerrajeriaclassicmedellin.netlify.app",
    facebook: "#",
    instagram: "https://www.instagram.com/cerrajeriaclassicmed/",
    lgbtqFriendly: true,
    googleRating: 5.0,
    googleReviewCount: 5,
    openingHours: [
      { day: "Lunes a Sábado", hours: "8:00 AM - 6:00 PM" },
      { day: "Domingos y Festivos", hours: "Cerrado" }
    ]
  },

  // 3. Configuración de Captación (Lead Gen & WhatsApp)
  leads: {
    whatsappNumber: "573127333653",
    whatsappPreFilledMsg: "Hola Cerrajería Classic, necesito un servicio de cerrajería. Servicio requerido: {service}. Mi ubicación o zona es: {schedule}.",
    ctaMainText: "Llamar Cerrajero Ahora",
    ctaSecondaryText: "Ver Servicios",
    whatsappStickyText: "Contactar Cerrajero",
    promoText: "🔑 Cerrajería Classic Medellín · Lunes a Sábado 8AM-6PM · Cerrajeros motorizados en todo Medellín · Llegada rápida"
  },

  // 4. Copys de Marketing
  copy: {
    heroTitle: "Cerrajero profesional en Medellín <span class='text-gradient'>rápido y sin daños</span>",
    heroSubtitle: "¿Te quedaste por fuera? ¿Se dañó la cerradura? Apertura de puertas, carros y cajas fuertes con técnicas no destructivas. Servicio honesto, garantizado y con precios cerrados en todo Medellín.",
    problemTitle: "¿Por qué elegir Cerrajería Classic?",
    problemSubtitle: "Soluciones técnicas rápidas con precios justos y transparentes. Sin cargos ocultos ni sorpresas al finalizar.",
    problemPoints: [
      {
        title: "Llegada express motorizada",
        desc: "Cerrajeros motorizados equipados con herramientas profesionales de última generación. Llegamos a cualquier punto de Medellín y el Área Metropolitana en tiempo récord."
      },
      {
        title: "Aperturas sin romper ni dañar",
        desc: "Técnicas avanzadas de ganzuado y decodificación para abrir tu cerradura o vehículo de forma limpia, sin dañar la puerta, el marco ni la pintura."
      },
      {
        title: "Garantía de seguridad total",
        desc: "Instalamos cerraduras de alta seguridad multipunto, anti-bumping, anti-ganzúa y anti-taladro. Protegemos tu hogar, negocio y vehículo."
      }
    ],
    methodologyTitle: "¿Cómo funciona nuestro servicio?",
    methodologySubtitle: "Atendemos tu emergencia en tres pasos sencillos con la máxima rapidez y profesionalismo.",
    methodologySteps: [
      {
        num: "01",
        title: "Contáctanos por WhatsApp o Llamada",
        desc: "Escríbenos o llámanos al +57 312 733 3653 indicando tu problema y ubicación. Puedes enviar fotos por WhatsApp para un diagnóstico más preciso."
      },
      {
        num: "02",
        title: "Cotización Inmediata y Justa",
        desc: "Te damos un precio cerrado antes de salir. El cerrajero motorizado más cercano a tu zona inicia el desplazamiento de inmediato hacia tu ubicación."
      },
      {
        num: "03",
        title: "Servicio Profesional con Garantía",
        desc: "Realizamos la apertura o cambio de cerradura en minutos. Te entregamos tus nuevas llaves con garantía por escrito y factura del servicio."
      }
    ]
  },

  // 5. Servicios
  services: [
    {
      id: "apertura-puertas",
      icon: "key",
      name: "Apertura de Puertas",
      duration: "15 - 30 min",
      price: "Desde $60.000",
      description: "Apertura limpia de cerraduras residenciales, de alta seguridad, perillas o cerrojos. Técnicas no destructivas que protegen tu puerta.",
      tag: "Más Solicitado",
      details: ["Sin daños a la puerta ni al marco", "Cerrajeros certificados", "Atención de Lunes a Sábado"]
    },
    {
      id: "cerrajeria-automotriz",
      icon: "car",
      name: "Cerrajería Automotriz",
      duration: "20 - 40 min",
      price: "Desde $100.000",
      description: "Apertura técnica de vehículos de todas las marcas. Duplicado de llaves con chip, programación de controles y alarmas vehiculares.",
      tag: "Especializado",
      details: ["Ganzuado Lishi profesional", "Sin dañar pintura ni vidrios", "Programación de llaves con chip"]
    },
    {
      id: "cambio-cerraduras",
      icon: "shield",
      name: "Cambio de Cerraduras",
      duration: "30 - 50 min",
      price: "Desde $80.000",
      description: "Instalación y actualización de cerraduras de seguridad. Cambio de guardas, cilindros y cerrojos antibumping de marcas reconocidas.",
      tag: "Mayor Seguridad",
      details: ["Cilindros de alta seguridad", "Repuestos originales garantizados", "3 a 5 llaves nuevas incluidas"]
    }
  ],

  // 6. Testimonios (desde Google Maps)
  testimonials: [
    {
      name: "Antonieta Cáceres M.",
      role: "Medellín · Google Maps",
      comment: "Excelente servicio. Llegaron muy rápido y resolvieron el problema de mi cerradura sin ningún daño. Totalmente recomendados, muy profesionales y amables.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop&crop=face"
    },
    {
      name: "Ana Laura Idarraga",
      role: "Medellín · Google Maps",
      comment: "Super recomendado. Necesitaba abrir la puerta de mi apartamento y en menos de 20 minutos ya estaban acá. Precio justo y trabajo impecable. Muy profesionales.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop&crop=face"
    },
    {
      name: "Ana Isabel Torres",
      role: "Medellín · Google Maps",
      comment: "Muy buen servicio. Necesitaba cambiar la cerradura de mi casa urgente por temas de seguridad y vinieron el mismo día. Excelente asesoría y precios razonables.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop&crop=face"
    },
    {
      name: "Carlos Andrés Gómez",
      role: "Envigado · Google Maps",
      comment: "Se me quedaron las llaves dentro del carro y pensé que iba a ser un problema enorme. Llegaron rapidísimo y lo abrieron sin rayar nada. Servicio de primera.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop&crop=face"
    }
  ],

  // 7. FAQs
  faqs: [
    {
      q: "¿Cuánto tiempo tardan en llegar a mi ubicación en Medellín?",
      a: "Nuestro tiempo promedio de llegada es de 15 a 25 minutos dentro de Medellín y el Área Metropolitana. Contamos con cerrajeros motorizados distribuidos estratégicamente por zonas para garantizar la respuesta más rápida posible. Atendemos de lunes a sábado, de 8:00 AM a 6:00 PM."
    },
    {
      q: "¿Cuál es su horario de atención?",
      a: "Atendemos de lunes a sábado de 8:00 AM a 6:00 PM. Los domingos y festivos no prestamos servicio. Te recomendamos contactarnos dentro de nuestro horario para una atención inmediata."
    },
    {
      q: "¿El precio que me dan por WhatsApp es el precio final?",
      a: "Sí. Trabajamos con precios cerrados y transparentes. Te damos un precio basado en la información y fotos que nos envíes por WhatsApp. No habrá cargos adicionales ni sorpresas al finalizar el servicio."
    },
    {
      q: "¿Pueden abrir una cerradura de alta seguridad sin dañarla?",
      a: "En el 95% de los casos sí. Utilizamos ganzúas profesionales, decodificadores y herramientas especializadas para manipular el cilindro internamente sin desgastar ni romper el mecanismo de la cerradura."
    },
    {
      q: "¿Atienden en Envigado, Sabaneta, Itagüí y Bello?",
      a: "Sí. Cubrimos toda el Área Metropolitana del Valle de Aburrá: Medellín, Envigado, Sabaneta, Itagüí, Bello, Copacabana, La Estrella y más. El tiempo de llegada puede variar ligeramente según la zona."
    },
    {
      q: "¿Qué métodos de pago aceptan?",
      a: "Aceptamos efectivo, Nequi, Daviplata y transferencias bancarias. Te damos factura y recibo de pago por cada servicio realizado."
    },
    {
      q: "¿Ofrecen garantía en los servicios?",
      a: "Sí. Todos nuestros servicios de cambio de cerradura e instalación incluyen garantía por escrito. Las cerraduras que instalamos son de marcas reconocidas con garantía del fabricante."
    }
  ]
};

// Exponer globalmente
window.CONFIG = CERRAJERIA_CONFIG;
