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
            <Nav.Link href="#home-mob">Home</Nav.Link>
            <Nav.Link href="#about-mob">About</Nav.Link>
            <Nav.Link href="#skills-mob">Skills</Nav.Link>
            <Nav.Link href="#projects-mob">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MobileNav;