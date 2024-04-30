import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Titulo from "./components/Titulo";
import SobreMi from "./components/SobreMi";
import Proyectos from "./components/Proyectos";
import Contacto from './components/Contacto';
import Tecnologias from './components/Tecnologias';


function App() {
  return (
    <Router>
        <NavBar />
        <Titulo />
        <Tecnologias/>
        <SobreMi />
        <Proyectos />
        <Contacto/>
    </Router>
  );
}

export default App;