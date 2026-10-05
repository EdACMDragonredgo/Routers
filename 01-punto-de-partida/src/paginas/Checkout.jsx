import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import { Navigate, Link } from 'react-router'

import { formatearPrecio } from '../datos/productos.js'

export default function Checkout({ carrito }) {
  if (carrito.length === 0) {
    return <Navigate to="/carrito" replace />
  }

  const total = carrito.reduce(
    (acumulado, item) => acumulado + item.precio * item.cantidad,
    0,
  )

  return (
    <section>
      <h1 className="h3 mb-3">Checkout</h1>
      <Alert variant="success">
        Pedido preparado correctamente.
      </Alert>
      <p>
        Total a pagar: <strong>{formatearPrecio(total)}</strong>
      </p>
      <Button as={Link} to="/carrito" variant="outline-primary">
        Volver al carrito
      </Button>
    </section>
  )
}
