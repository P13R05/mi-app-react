import React from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import Menu from '../componentes/Navbar';
import Footer from '../componentes/Footer';

const Inicio: React.FC = () => {
  return (
    <>
      <Menu />

      {/* Carrusel principal */}
      <Carousel className="mt-3">
        <Carousel.Item>
          <img className="d-block w-100" src="/imagenes/carusel 1.png" alt="Imagen 1" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/imagenes/carrusel 2.jpg" alt="Imagen 2" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/imagenes/carrusel 3.jpg" alt="Imagen 3" />
        </Carousel.Item>
      </Carousel>

      {/* Introducción */}
      <Container className="mt-5">
        <Row className="text-center">
          <Col>
            <h2>Bienvenido a FastGo</h2>
            <p className="lead">
              Tu solución de entregas rápidas y confiables en la ciudad. Con FastGo, tus productos siempre llegan a tiempo.
            </p>
          </Col>
        </Row>

        {/* Beneficios / Características */}
        <Row className="mt-4">
          <Col md={4}>
            <Card className="mb-4">
              <Card.Img variant="top" src="/imagenes/fastgo_servicio_1.png" />
              <Card.Body>
                <Card.Title>Entrega Rápida</Card.Title>
                <Card.Text>
                  Nuestros repartidores están siempre cerca, lo que nos permite ofrecer entregas rápidas en toda la ciudad.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Img variant="top" src="/imagenes/fastgo_servicio_4.png" />
              <Card.Body>
                <Card.Title>Seguimiento en Tiempo Real</Card.Title>
                <Card.Text>
                  Sigue el progreso de tu entrega en tiempo real y recibe notificaciones al instante.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Img variant="top" src="/imagenes/fastgo_servicio_6.png" />
              <Card.Body>
                <Card.Title>Cobertura Ampliada</Card.Title>
                <Card.Text>
                  Ofrecemos servicios en todo el área urbana para que tu negocio pueda llegar a más clientes.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Testimonios */}
        <Row className="mt-5">
          <Col>
            <h3 className="text-center mb-4">Lo que dicen nuestros clientes</h3>
            <Carousel>
              <Carousel.Item>
                <figure className="text-center">
                  <blockquote className="blockquote p-4 bg-light rounded shadow-sm">
                    <p>"FastGo me ha ayudado a hacer mis entregas más rápidas y eficientes. ¡Totalmente recomendable!"</p>
                  </blockquote>
                  <figcaption className="blockquote-footer">⭐ Cliente Satisfecho</figcaption>
                </figure>
              </Carousel.Item>
              <Carousel.Item>
                <figure className="text-center">
                  <blockquote className="blockquote p-4 bg-light rounded shadow-sm">
                    <p>"Siempre recibo mis pedidos a tiempo. ¡Excelente servicio!"</p>
                  </blockquote>
                  <figcaption className="blockquote-footer">🤩 Cliente Feliz</figcaption>
                </figure>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default Inicio;
