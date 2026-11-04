
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Censo Escolar PB
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="menu" />

        <Navbar.Collapse id="menu">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/instituicoes">
              Instituições de Ensino
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
