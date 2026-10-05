import { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'

import BarraNavegacion from './componentes/BarraNavegacion.jsx'
import PiePagina from './componentes/PiePagina.jsx'
import Inicio from './paginas/Inicio.jsx'
import Catalogo from './paginas/Catalogo.jsx'
import DetalleProducto from './paginas/DetalleProducto.jsx'
import Nosotros from './paginas/Nosotros.jsx'
import Carrito from './paginas/Carrito.jsx'
import Checkout from './paginas/Checkout.jsx'
import { productos } from './datos/productos.js'

const CLAVE_CARRITO = 'lqtlv-carrito'

function leerCarritoGuardado() {
  try {
    const guardado = localStorage.getItem(CLAVE_CARRITO)
    return guardado ? JSON.parse(guardado) : []
  } catch {
    return []
  }
}

export default function App() {
  const [carrito, setCarrito] = useState(leerCarritoGuardado)

  useEffect(() => {
    localStorage.setItem(CLAVE_CARRITO, JSON.stringify(carrito))
  }, [carrito])

  function agregarAlCarrito(idProducto) {
    const producto = productos.find((p) => p.id === Number(idProducto))
    if (!producto || producto.stock <= 0) return

    setCarrito((actual) => {
      const existente = actual.find((item) => item.id === producto.id)

      if (existente) {
        if (existente.cantidad >= producto.stock) return actual

        return actual.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item,
        )
      }

      return [
        ...actual,
        {
          id: producto.id,
          nombre: producto.nombre,
          precio: producto.precio,
          cantidad: 1,
        },
      ]
    })
  }

  function cambiarCantidad(idProducto, delta) {
    setCarrito((actual) =>
      actual
        .map((item) =>
          item.id === Number(idProducto)
            ? { ...item, cantidad: item.cantidad + delta }
            : item,
        )
        .filter((item) => item.cantidad > 0),
    )
  }

  function quitarDelCarrito(idProducto) {
    setCarrito((actual) =>
      actual.filter((item) => item.id !== Number(idProducto)),
    )
  }

  const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0)

  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <BarraNavegacion totalItems={totalItems} />

        <main className="flex-grow-1 py-4">
          <div className="container">
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route
                path="/catalogo"
                element={
                  <Catalogo
                    carrito={carrito}
                    onAgregar={agregarAlCarrito}
                  />
                }
              />
              <Route
                path="/producto/:id"
                element={
                  <DetalleProducto
                    onAgregar={agregarAlCarrito}
                  />
                }
              />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route
                path="/carrito"
                element={
                  <Carrito
                    carrito={carrito}
                    onCambiarCantidad={cambiarCantidad}
                    onQuitar={quitarDelCarrito}
                  />
                }
              />
              <Route
                path="/checkout"
                element={<Checkout carrito={carrito} />}
              />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </main>

        <PiePagina />
      </div>
    </BrowserRouter>
  )
}
