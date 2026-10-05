import { Link } from 'react-router'
import Button from 'react-bootstrap/Button'

export default function Inicio() {
  return (
    <section className="text-center py-5">
      <h1 className="display-5 fw-bold">Lo quieres, te lo vendo</h1>
      <p className="lead">
        Encuentra productos de audio, computación y hogar.
      </p>
      <Button as={Link} to="/catalogo" variant="primary">
        Ver catálogo
      </Button>
    </section>
  )
}
