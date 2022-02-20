import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Logo = "https://res.cloudinary.com/alexa01020304/image/upload/v1644454466/logo-blockBuster_aqx7hs.png"

export const Nabar = () => {

    return(

      <header>
      <div className='BarraDeNavegacion'>
        <Navbar bg='dark' variant='dark' sticky='top' expand='lg'>   
<Navbar.Brand>
 <Nav.Link as={Link} to = "/src/Components/BarraDeNavegacion/pages/Todass.js">
   <img src ={Logo} alt = "" width= "100px" height="60px"/>
   </Nav.Link>
</Navbar.Brand>

<Navbar.Toggle/>

<Navbar.Collapse>
<Nav>
  <Nav.Link as={Link} to ="../BarraDeNavegacion/pages/Todass.js">Todas</Nav.Link>
  <Nav.Link as={Link} to ='../BarraDeNavegacion/pages/MásValoradas.js'>Más Valoradas</Nav.Link>
  <Nav.Link as={Link} to ='../BarraDeNavegacion/pages/MenosValoradas.js'>Menos Valoradas</Nav.Link>
</Nav>
</Navbar.Collapse>
        </Navbar>
      </div>
      </header>
            
         
    )

}










        