import React from 'react';
import Menu from '../componentes/Navbar';
import Footer from '../componentes/Footer';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Inicio: React.FC = () => {
  return (
    <>
      <Menu />

      <Container className="mt-5">
        <Row className="text-center">
          <Col>
            <h2>Bienvenido a FastGo</h2>
            <p className="lead">
              Tu solución de entregas rápidas y confiables en la ciudad. Con FastGo, tus productos siempre llegan a tiempo.
            </p>
          </Col>
        </Row>

        <Row>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Img variant="top" src="images/fastgo_servicio_1.png" />
              <Card.Body>
                <Card.Title>Entrega Rápida</Card.Title>
                <Card.Text>Entregas rápidas en toda la ciudad.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Img variant="top" src="images/fastgo_servicio_4.png" />
              <Card.Body>
                <Card.Title>Seguimiento en Tiempo Real</Card.Title>
                <Card.Text>Sigue el progreso de tu entrega en tiempo real.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Img variant="top" src="images/fastgo_servicio_6.png" />
              <Card.Body>
                <Card.Title>Cobertura Ampliada</Card.Title>
                <Card.Text>Servicios en toda el área urbana.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default Inicio;
