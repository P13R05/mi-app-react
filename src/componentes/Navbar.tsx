import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FastGoImage from '/FastGo.png'; 

const Menu: React.FC = () => {
  return (
    <Navbar expand="lg" variant="dark" className="bg-dark">
      <Navbar.Brand as={Link} to="/inicio">
        <img src={FastGoImage} alt="FastGo Logo" width="80" />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/inicio">Inicio</Nav.Link>
          <Nav.Link as={Link} to="/sobre-nosotros">Sobre Nosotros</Nav.Link>
          <Nav.Link as={Link} to="/servicios">Servicios</Nav.Link>
          <Nav.Link as={Link} to="/contacto">Contáctenos</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menu;
// Este componente es un menú de navegación que utiliza React Bootstrap para crear una barra de navegación responsiva.
// Contiene enlaces a diferentes secciones de la aplicación, como Inicio, Sobre Nosotros, Servicios y Contáctenos.
// El logo de la empresa se muestra en la parte izquierda de la barra de navegación.            