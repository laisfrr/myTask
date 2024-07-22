import { Link } from 'react-router-dom'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { logout } from '../firebase/auth'
import { useContext } from 'react'
import { UsuarioContext } from '../contexts/UsuarioContext'

//navegacao no react voce direciona para a rota
// Link --> fluidez da página
//links externos -->usar a tag <a href>
function Menu() {
  const usuario = useContext(UsuarioContext)
  const navigate = useNavigate()

  function handleLogout() {
    logout().then(() => {
      navigate('/login')
    })
  }

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
              {usuario && (
                <Link className="nav-link" to="/tarefas">
                  Tarefas
                </Link>
              )}
              {!usuario && (
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              )}
              {!usuario && (
                <Link className="nav-link" to="/cadastro">
                  Cadastro
                </Link>
              )}
              <Link className="nav-link" to="/ajuda">
                Ajuda
              </Link>
              {usuario && (
                <span className="text-light nav-link">
                  {usuario.displayName}
                </span>
              )}
              {usuario && (
                <Button variant="outline-light" onClick={handleLogout}>
                  Sair
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Menu
