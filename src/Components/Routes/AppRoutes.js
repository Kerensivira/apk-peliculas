import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


// const AppRouter = () => {

//   const [tarea, setTarea] = useState([]);

//   const traerDatos = async () => {
//     const datos = await getData();
//     setTarea(datos);
//   };

//   useEffect(() => {
//     traerDatos();
//   }, []);


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/producto" element={<Productos tarea={tarea} />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Productos />} />
          <Route path="/crearCuenta" element={<Formulario />} />
          <Route path="/iniciarSesion" element={<Login />} />
          <Route path="/detalle/:id" element={<Detail tarea={tarea} />} />
          <Route path="/busqueda" element={<Busqueda tarea={tarea} />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
