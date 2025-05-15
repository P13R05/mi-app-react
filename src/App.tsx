import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Inicio from './paginas/inicio';
import Servicios from './paginas/servicios';
import SobreNosotros from './paginas/sobrenosotros';
import Contacto from './paginas/contacto';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/inicio" />} />
      <Route path="/inicio" element={<Inicio />} />
      <Route path="/servicios" element={<Servicios />} />
      <Route path="/sobre-nosotros" element={<SobreNosotros />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="*" element={<h2 className="text-center mt-5">Página no encontrada</h2>} />
    </Routes>
  );
};

export default App;
