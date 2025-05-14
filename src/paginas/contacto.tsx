import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import Menu from '../componentes/Navbar';
import Footer from '../componentes/Footer';

interface FormularioContacto {
  email: string;
  motivo: string;
  mensaje: string;
}

const Contacto: React.FC = () => {
  const [formulario, setFormulario] = useState<FormularioContacto>({
    email: '',
    motivo: '',
    mensaje: '',
  });
  const [error, setError] = useState('');
  const [enviado, setEnviado] = useState(false);

  const validarEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formulario.email || !formulario.motivo || !formulario.mensaje) {
      setError('Todos los campos son obligatorios.');
      return;
    }

    if (!validarEmail(formulario.email)) {
      setError('Correo electrónico no es válido.');
      return;
    }

    localStorage.setItem('formularioContacto', JSON.stringify(formulario));
    setError('');
    setEnviado(true);
  };

  return (
    <>
      <Menu />

      <Container className="mt-5">
        <h2 className="text-center">Contáctanos</h2>
        <Form className="mt-4" onSubmit={handleSubmit}>
          {error && <Alert variant="danger">{error}</Alert>}
          {enviado && <Alert variant="success">¡Formulario enviado con éxito!</Alert>}

          <Form.Group>
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="ejemplo@correo.com"
              value={formulario.email}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Motivo</Form.Label>
            <Form.Control as="select" name="motivo" value={formulario.motivo} onChange={handleChange}>
              <option value="">Seleccione una opción</option>
              <option>Felicitaciones</option>
              <option>Reclamos</option>
              <option>Sugerencias</option>
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Mensaje</Form.Label>
            <Form.Control
              as="textarea"
              name="mensaje"
              rows={4}
              value={formulario.mensaje}
              onChange={handleChange}
            />
          </Form.Group>

          <Button type="submit" variant="dark">Enviar</Button>
        </Form>

        <div className="mt-5">
          <h3 className="text-center mb-3">Nuestra Ubicación</h3>
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d715.1688807809528!2d-70.5816060146719!3d-33.58583056003656"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
};

export default Contacto;
