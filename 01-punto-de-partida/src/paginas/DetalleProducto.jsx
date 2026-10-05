import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import { Link, useNavigate, useParams } from 'react-router'

import { buscarProducto, formatearPrecio } from '../datos/productos.js'

export default function DetalleProducto({ onAgregar }) {
  const { id } = useParams()
  const navegar = useNavigate()
  const producto = buscarProducto(id)

  if (!producto) {
    return (
      <Alert variant="danger">
        No existe el producto {id}.
      </Alert>
    )
  }

  function agregar() {
    onAgregar(producto.id)
    navegar('/carrito')
  }

  return (
    <section>
      <Button variant="outline-secondary" className="mb-3" onClick={() => navegar(-1)}>
        Volver
      </Button>

      <div className="card shadow-sm">
        <div className="card-body">
          <div className="display-1 mb-3" aria-hidden="true">{producto.emoji}</div>
          <h1 className="h3">{producto.nombre}</h1>
          <p className="text-capitalize">{producto.categoria}</p>
          <p>{producto.descripcion}</p>
          <p className="h4">{formatearPrecio(producto.precio)}</p>
          <p>Stock disponible: {producto.stock}</p>

          <div className="d-flex gap-2 flex-wrap">
            <Button
              variant="primary"
              onClick={agregar}
              disabled={producto.stock === 0}
            >
              {producto.stock === 0 ? 'Sin stock' : 'Agregar y ver carrito'}
            </Button>
            <Button as={Link} to="/catalogo" variant="outline-primary">
              Seguir comprando
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
