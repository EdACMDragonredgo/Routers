import { Link } from 'react-router'
import Button from 'react-bootstrap/Button'

export default function Inicio() {
  return (
    <section className="text-center py-5">
      <h1 className="display-5 fw-bold">Lo quieres, te lo vendo 4K Full</h1>
      <p className="lead">
        Encuentra productos de audio, computación y hogar de nuestra tiendas y bodega a tu hogar .
      </p>
      <Button as={Link} to="/catalogo" variant="primary">
        Ver catálogo
      </Button>
    </section>
  )
}
