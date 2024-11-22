import { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import Titulo from './components/Titulo';
import SobreMi from './components/SobreMi';
import Proyectos from './components/Proyectos';
import Contacto from './components/Contacto';
import Tecnologias from './components/Tecnologias';
import Footer from './components/Footer';
import TopButton from './components/TopButton';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <Router>
      {/* Pasamos el estado y la función como props */}
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Titulo />
      <Tecnologias />
      <Proyectos />
      <SobreMi />
      <Contacto />
      <Footer />
      <TopButton />
    </Router>
  );
}

export default App;
