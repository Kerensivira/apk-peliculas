import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Nabar = () => {

    return(

      <header>
      <div className='BarraDeNavegacion'>
        <Navbar bg='dark' variant='dark' sticky='top' expand='lg'>   
<Navbar.Brand>
  <img 
  src ={"https://res.cloudinary.com/alexa01020304/image/upload/v1644454466/logo-blockBuster_aqx7hs.png"}
  alt = "" width= "100px" height="60px"
  />
</Navbar.Brand>

<Navbar.Toggle/>

<Navbar.Collapse>
<Nav>
  <Nav.Link as={Link} to ="../BarraDeNavegacion/pages/Todas.js">Todas</Nav.Link>
  <Nav.Link to ='../BarraDeNavegacion/pages/MásValoradas.js'>Más Valoradas</Nav.Link>
  <Nav.Link to ='../BarraDeNavegacion/pages/MenosValoradas.js'>Menos Valoradas</Nav.Link>
</Nav>
</Navbar.Collapse>
        </Navbar>
      </div>
      </header>
            
         
    )

}






//<img
              //src="https://res.cloudinary.com/alexa01020304/image/upload/v1644454466/logo-blockBuster_aqx7hs.png"
              //alt="Logo"
              //width="106"
              //height="64" 
            ///>




        