import { Nabar } from '../BarraDeNavegacion/Navbar'
import { Pelis } from '../Pelis';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
//import Todas from '../BarraDeNavegacion/pages/Todas';


function AppRoutes() {
  return (
    <BrowserRouter>
    <Nabar/>
<Routes>
<Route path='/Pelis' element = {<Pelis/>}/>
</Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;

