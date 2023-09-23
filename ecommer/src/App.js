import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Struct } from './Componentes/Struct_component/Struct.component';
import { Home } from './Componentes/Home_component/Home.component';
import { CarritoCompras } from './Componentes/CarritoCompras_component/CarritoCompras.component';

const App = () => {
  return (
    <Router>
      <Struct />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carrito" element={<CarritoCompras />} />
      </Routes>
    </Router>
  );
}

export default App;
