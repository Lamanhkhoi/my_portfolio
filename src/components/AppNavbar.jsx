import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AppNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="md" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">KHÔI.EXE</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/#about">About</Nav.Link>
          <Nav.Link as={Link} to="/#skills">Skills</Nav.Link>
          <Nav.Link as={Link} to="/#projects">Projects</Nav.Link>
          <Nav.Link as={Link} to="/#contact">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}