import React from 'react';
import Menu from '../componentes/Navbar';
import Footer from '../componentes/Footer';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Servicios: React.FC = () => {
  return (
    <>
      <Menu />

      <Container className="mt-5">
        <h2 className="text-center mb-4">Nuestros Servicios</h2>
        <Row>
          {/* Servicio 1 */}
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="images/fastgo_servicio_1.png" alt="Servicio Express" />
              <Card.Body>
                <Card.Title>Entrega Express</Card.Title>
                <Card.Text>Envíos en menos de 2 horas dentro de la Región Metropolitana.</Card.Text>
                <p><strong>Precio:</strong> $4.990</p>
                <p><small className="text-muted">Disponible de 8:00 a 20:00 hrs.</small></p>
              </Card.Body>
            </Card>
          </Col>

          {/* Servicio 2 */}
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="images/fastgo_servicio_2.png" alt="Servicio Normal" />
              <Card.Body>
                <Card.Title>Entrega Estándar</Card.Title>
                <Card.Text>Servicio económico con entrega durante el día.</Card.Text>
                <p><strong>Precio:</strong> $2.990</p>
                <p><small className="text-muted">Entrega hasta las 21:00 hrs.</small></p>
              </Card.Body>
            </Card>
          </Col>

          {/* Servicio 3 */}
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="images/fastgo_servicio_3.png" alt="Servicio Same Day" />
              <Card.Body>
                <Card.Title>Entrega Mismo Día</Card.Title>
                <Card.Text>Recolección y entrega antes de las 18:00 hrs.</Card.Text>
                <p><strong>Precio:</strong> $3.990</p>
                <p><small className="text-muted">Solicitar antes del mediodía.</small></p>
              </Card.Body>
            </Card>
          </Col>

          {/* Servicio 4 */}
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="images/fastgo_servicio_4.png" alt="Seguimiento" />
              <Card.Body>
                <Card.Title>Seguimiento en Tiempo Real</Card.Title>
                <Card.Text>Sigue en todo momento el estado de tus productos.</Card.Text>
                <p><strong>Precio:</strong> Gratis</p>
                <p><small className="text-muted">Disponible con todos los envíos.</small></p>
              </Card.Body>
            </Card>
          </Col>

          {/* Servicio 5 */}
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="images/fastgo_servicio_5.png" alt="Corporativo" />
              <Card.Body>
                <Card.Title>Plan Corporativo</Card.Title>
                <Card.Text>Descuentos especiales para empresas con alto volumen de envíos.</Card.Text>
                <p><strong>Precio:</strong> Desde $1.990</p>
                <p><small className="text-muted">Contrato mensual mínimo.</small></p>
              </Card.Body>
            </Card>
          </Col>

          {/* Servicio 6 */}
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="images/fastgo_servicio_6.png" alt="Regional" />
              <Card.Body>
                <Card.Title>Envíos Regionales</Card.Title>
                <Card.Text>Conectamos ciudades cercanas con rapidez y seguridad.</Card.Text>
                <p><strong>Precio:</strong> Desde $6.990</p>
                <p><small className="text-muted">Cobertura: Región de Valparaíso.</small></p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default Servicios;
