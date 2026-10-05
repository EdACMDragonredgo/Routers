import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router'

import { formatearPrecio } from '../datos/productos.js'

export default function Carrito({ carrito, onCambiarCantidad, onQuitar }) {
  function calcularTotal(lista) {
    return lista.reduce(
      (acumulado, item) => acumulado + item.precio * item.cantidad,
      0,
    )
  }

  const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0)
  const total = calcularTotal(carrito)

  if (carrito.length === 0) {
    return (
      <section className="text-center py-5">
        <h1 className="h3">Tu carrito está vacío</h1>
        <p className="text-muted">Agrega productos desde el catálogo.</p>
        <Button as={Link} to="/catalogo">
          Ir al catálogo
        </Button>
      </section>
    )
  }

  return (
    <section>
      <h1 className="h3 mb-4">Tu carrito</h1>

      <Card className="shadow-sm">
        <Card.Body>
          <Table responsive>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {carrito.map((item) => (
                <tr key={item.id}>
                  <td>{item.nombre}</td>
                  <td>{formatearPrecio(item.precio)}</td>
                  <td>
                    <div className="d-flex align-items-center gap-2">
                      <Button
                        size="sm"
                        variant="outline-secondary"
                        onClick={() => onCambiarCantidad(item.id, -1)}
                      >
                        −
                      </Button>
                      <span>{item.cantidad}</span>
                      <Button
                        size="sm"
                        variant="outline-secondary"
                        onClick={() => onCambiarCantidad(item.id, 1)}
                      >
                        +
                      </Button>
                    </div>
                  </td>
                  <td>{formatearPrecio(item.precio * item.cantidad)}</td>
                  <td>
                    <Button
                      size="sm"
                      variant="outline-danger"
                      onClick={() => onQuitar(item.id)}
                    >
                      Quitar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 border-top pt-3">
            <div>
              <strong>{totalItems}</strong> {totalItems === 1 ? 'item' : 'items'}
            </div>
            <div className="h4 mb-0">Total: {formatearPrecio(total)}</div>
          </div>

          <div className="d-flex justify-content-end mt-3">
            <Button as={Link} to="/checkout">
              Continuar al checkout
            </Button>
          </div>
        </Card.Body>
      </Card>
    </section>
  )
}
