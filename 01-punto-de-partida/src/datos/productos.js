// Catálogo de la tienda «Lo quieres, te lo vendo».
// En un proyecto real estos datos vendrían de una API; aquí van en un archivo
// para que la clase se concentre en las rutas y no en el backend.

export const productos = [
  {
    id: 1,
    nombre: 'Audífonos inalámbricos Onda',
    categoria: 'audio',
    precio: 39990,
    stock: 12,
    descripcion:
      'Audífonos bluetooth con cancelación pasiva de ruido y 24 horas de autonomía con el estuche de carga.',
    emoji: '🎧',
  },
  {
    id: 2,
    nombre: 'Parlante portátil Roca',
    categoria: 'audio',
    precio: 54990,
    stock: 5,
    descripcion:
      'Parlante resistente a salpicaduras, con correa de transporte y 10 horas de reproducción continua.',
    emoji: '🔊',
  },
  {
    id: 3,
    nombre: 'Teclado mecánico Cordillera',
    categoria: 'computacion',
    precio: 74990,
    stock: 8,
    descripcion:
      'Teclado mecánico de 87 teclas, distribución en español latinoamericano e iluminación regulable.',
    emoji: '⌨️',
  },
  {
    id: 4,
    nombre: 'Mouse ergonómico Pehuén',
    categoria: 'computacion',
    precio: 24990,
    stock: 20,
    descripcion:
      'Mouse vertical inalámbrico que reduce la tensión de la muñeca en jornadas largas de trabajo.',
    emoji: '🖱️',
  },
  {
    id: 5,
    nombre: 'Monitor 27" Atacama',
    categoria: 'computacion',
    precio: 189990,
    stock: 3,
    descripcion:
      'Monitor IPS de 27 pulgadas, resolución QHD y 100 Hz de refresco. Incluye soporte regulable en altura.',
    emoji: '🖥️',
  },
  {
    id: 6,
    nombre: 'Lámpara de escritorio Aurora',
    categoria: 'hogar',
    precio: 19990,
    stock: 15,
    descripcion:
      'Lámpara LED con tres temperaturas de color y puerto USB para cargar el teléfono.',
    emoji: '💡',
  },
  {
    id: 7,
    nombre: 'Silla de escritorio Valle',
    categoria: 'hogar',
    precio: 129990,
    stock: 0,
    descripcion:
      'Silla ergonómica con apoyo lumbar regulable y respaldo de malla transpirable.',
    emoji: '🪑',
  },
  {
    id: 8,
    nombre: 'Cámara web Mirador HD',
    categoria: 'computacion',
    precio: 32990,
    stock: 9,
    descripcion:
      'Cámara web 1080p con micrófono estéreo y tapa de privacidad incorporada.',
    emoji: '📷',
  },
]

// Utilidad usada por varias páginas: formatea un número como precio chileno.
export function formatearPrecio(valor) {
  return valor.toLocaleString('es-CL', {
    style: 'currency',
    currency: 'CLP',
    maximumFractionDigits: 0,
  })
}

// Devuelve un producto por su id. Ojo: el id que entrega useParams es texto,
// por eso comparamos con Number().
export function buscarProducto(id) {
  return productos.find((producto) => producto.id === Number(id))
}

export const categorias = ['audio', 'computacion', 'hogar']
