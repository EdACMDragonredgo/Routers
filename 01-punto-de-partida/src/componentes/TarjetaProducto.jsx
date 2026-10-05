import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router'

import { formatearPrecio } from '../datos/productos.js'

export default function TarjetaProducto({ producto, onAgregar }) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Body className="d-flex flex-column">
        <div className="fs-1 text-center" aria-hidden="true">
          {producto.emoji}
        </div>

        <Card.Title as="h3" className="h6">
          {producto.nombre}
        </Card.Title>

        <Badge
          bg="light"
          text="dark"
          className="align-self-start mb-2 text-capitalize"
        >
          {producto.categoria}
        </Badge>

        <Card.Text className="fw-semibold mb-2">
          {formatearPrecio(producto.precio)}
        </Card.Text>

        <Card.Text className="small text-muted">
          Stock: {producto.stock}
        </Card.Text>

        <div className="mt-auto d-grid gap-2">
          <Button
            variant="primary"
            onClick={() => onAgregar(producto.id)}
            disabled={producto.stock === 0}
          >
            {producto.stock === 0 ? 'Sin stock' : 'Agregar al carrito'}
          </Button>

          <Button as={Link} to={`/producto/${producto.id}`} variant="outline-primary">
            Ver detalle
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}
