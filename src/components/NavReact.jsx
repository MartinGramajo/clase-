import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function NavReact(props) {
  // const handleClick = () => {
  //   setSection('login')
  // }

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => {props.setSection("memes")}}>Memes</Nav.Link>
            <Nav.Link onClick={ () => props.setSection("login")}>Login</Nav.Link>
            <Nav.Link onClick={ () => {props.setSection("perfil")}}>Perfil</Nav.Link>
            <Nav.Link onClick={() => {props.setSection("admin")}}>Subir nuevo meme</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {/* <Button className="fs-4" variant="success" size="sm" onClick={handleClick}> Login </Button> */}
      </Container>
    </Navbar>
  );
}
