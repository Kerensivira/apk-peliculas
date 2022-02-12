import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


  return (
    <div>
      <BrowserRouter>
        <Routes>
          
       </Routes>
      </BrowserRouter>
    </div>
  );

  function todas (){
    const TodasLasPelis = ['1', '2', '3'];
  
  
    return <div>
      {TodasLasPelis.map(TodasLasPelis => (
        <Todas/>
      ))}
    </div>
  }


export default AppRouter;
