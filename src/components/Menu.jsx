import { Link } from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap'

//navegacao no react voce direciona para a rota
// Link --> fluidez da página
//links externos -->usar a tag <a href>
function Menu() {
  return (
    <header>
      <Navbar bg="dark" variant="dark" className="d-flex" expand="md">
        <Container fluid>
          <Link className="nav-link" to="/">
            <img src="/task-icon.svg" alt="logo" width={40} />
          </Link>
          <Navbar.Brand className="d-flex mx-3">
            <Link className="nav-link" to="/">
              MyTask
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Link className="nav-link" to="/login">
                Login
              </Link>
              <Link className="nav-link" to="/cadastro">
                Cadastro
              </Link>
              <Link className="nav-link" to="/ajuda">
                Ajuda
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Menu
