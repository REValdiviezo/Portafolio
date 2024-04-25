import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Titulo from "./components/Titulo";
import SobreMi from "./components/SobreMi";
import Proyectos from "./components/Proyectos";

function App() {
  return (
    <Router>
        <NavBar />
        <Titulo />
        <SobreMi />
        <Proyectos />
    </Router>
  );
}

export default App;