import React from 'react';

const Footer: React.FC = () => (
  <footer className="footer bg-dark text-white text-center py-4 mt-5">
    <div className="container">
      <p className="mb-1">📧 CORREO: piero.osses16@gmail.com</p>
      <p className="mb-3">📞 TELÉFONO: +56 9 1234 5678</p>
      <div className="mb-3">
        <a href="https://www.facebook.com/FastGo" className="text-white mx-2">Facebook</a> |
        <a href="https://www.instagram.com/FastGo" className="text-white mx-2">Instagram</a> |
        <a href="https://www.twitter.com/FastGo" className="text-white mx-2">Twitter</a>
      </div>
      <p className="mb-0">FastGo - Todos los derechos reservados © 2025</p>
    </div>
  </footer>
);

export default Footer;
// Este componente es un pie de página que contiene información de contacto y enlaces a redes sociales.
// Se utiliza Bootstrap para el estilo y la disposición.            