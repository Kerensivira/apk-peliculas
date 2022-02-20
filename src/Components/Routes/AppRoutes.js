import { Nabar } from '../BarraDeNavegacion/Navbar'
import { Todass } from '../BarraDeNavegacion/pages/Todass';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
//import Todas from '../BarraDeNavegacion/pages/Todas';


function AppRoutes() {
  return (
    <BrowserRouter>
    <Nabar/>
<Routes>
<Route path='../BarraDeNavegacion/pages/Todass.js' element = {<Todass/>}/>
</Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;

