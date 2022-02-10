import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './Components/BarraDeNavegacion/Navbar';
import Todas from './Components/BarraDeNavegacion/pages/Todas';
import MásValoradas from './Components/BarraDeNavegacion/pages/MásValoradas';
import MenosValoradas from './Components/BarraDeNavegacion/pages/MenosValoradas';




function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        {/* <Todas/>
        <MásValoradas/>
        <MenosValoradas/> */}
      </Router>
    </div>
  );
}

export default App;
