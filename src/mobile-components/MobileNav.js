import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function MobileNav() {
  return (
    <Navbar bg="dark" expand="lg" className='navbar' fixed="top">
      <Container className='nav-container'>
        <Navbar.Brand href="#home">Ethan Letourneau</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home-mobile">Home</Nav.Link>
            <Nav.Link href="#about-mobile">About</Nav.Link>
            <Nav.Link href="#skills-mobile">Skills</Nav.Link>
            <NavDropdown title="Projects" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Inventory Management</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Resume Builder</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Calculator</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Weather App</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MobileNav;