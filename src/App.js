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
        <Switch>
          <Route path='../src/Components/BarraDeNavegacion/pages/Todas.js' exact component = {Todas}/>
          <Route path='../src/Components/BarraDeNavegacion/pages/MásValoradas.js' exact component = {MásValoradas}/>
          <Route path='../src/Components/BarraDeNavegacion/pages/MenosValoradas.js' exact component = {MenosValoradas}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
