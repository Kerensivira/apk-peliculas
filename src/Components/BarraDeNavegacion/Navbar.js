import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, NavbarBrand } from 'react-bootstrap';

export function BarraDeNavegacion() {

    return(

      <header>
      <div className='BarraDeNavegacion'>
        <Navbar bg='dark' variant='dark' sticky='top' expand='lg'>   
<Navbar.Brand>
  <img 
  src ={"https://res.cloudinary.com/alexa01020304/image/upload/v1644454466/logo-blockBuster_aqx7hs.png"}
  width= "100px" height="60px"
  />
</Navbar.Brand>

<Navbar.Toggle/>

<Navbar.Collapse>
<Nav>
  <Nav.Link to ='../BarraDeNavegacion/pages/Todas.js'>Todas</Nav.Link>
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




        