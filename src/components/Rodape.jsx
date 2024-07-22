import { Link } from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap'
import './Rodape.css'

function Rodape() {
  return (
    <footer className="container-rodape">
      <Navbar bg="dark" variant="dark" className="d-flex nav-rodape">
        <Container fluid>
          <Navbar.Collapse className="justify-content-center">
            <Nav>
              <Link className="nav-link" to="/politicas-de-privacidade">
                Politicas de Privacidade
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </footer>
  )
}

export default Rodape
