import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Inicio from './paginas/inicio';
import Servicios from './paginas/servicios';
import SobreNosotros from './paginas/sobrenosotros';
import Contacto from './paginas/contacto';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/inicio" />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<h2 className="text-center mt-5">Página no encontrada</h2>} />
      </Routes>
    </Router>
  );
};

export default App;
