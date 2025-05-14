import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import Menu from '../componentes/Navbar';
import Footer from '../componentes/Footer';

const SobreNosotros: React.FC = () => {
  return (
    <>
      <Menu />

      <Container className="py-5">
        <h1 className="text-center mb-4">📦 Sobre FastGo</h1>
        <p className="lead text-center">
          FastGo es una empresa de logística urbana especializada en <strong>entregas express dentro de la ciudad</strong>.
          Nacimos con el objetivo de conectar personas, negocios y productos de forma rápida, eficiente y confiable.
        </p>

        <hr className="my-5" />

        <section className="mb-5">
          <h2 className="mb-3">🛵 Nuestra Historia</h2>
          <p>
            FastGo fue fundada en <strong>2022</strong> por un grupo de emprendedores apasionados por la innovación y la movilidad urbana.
            Desde nuestros inicios, apostamos por la digitalización mediante una <strong>app de tracking en tiempo real</strong>.
          </p>
          <p>
            Actualmente enfrentamos un nuevo desafío: <em>no contamos con visibilidad general del rendimiento por zona, repartidor o cliente</em>.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="mb-3">🎯 Misión</h2>
          <p>
            Brindar soluciones de entrega express eficientes, seguras y confiables dentro del entorno urbano.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="mb-3">👁️ Visión</h2>
          <p>
            Convertirnos en la empresa líder en logística urbana de entregas express, reconocida por su innovación.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="mb-3">🚲 Nuestros Equipos</h2>
          <ListGroup>
            <ListGroup.Item><strong>Repartidores Urbanos:</strong> motorizados y en bicicleta, capacitados.</ListGroup.Item>
            <ListGroup.Item><strong>Soporte y Logística:</strong> coordinan operaciones y optimizan procesos.</ListGroup.Item>
            <ListGroup.Item><strong>Equipo de Tecnología:</strong> desarrollan dashboards y mantienen la app.</ListGroup.Item>
          </ListGroup>
        </section>
      </Container>

      <Footer />
    </>
  );
};

export default SobreNosotros;
