import { useState, useEffect } from 'react';
import { IoSunnyOutline } from "react-icons/io5";
import { FaMoon } from "react-icons/fa6";

const NavBar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  // Cargar el modo desde localStorage al iniciar
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedMode);
  }, []);

  // Guardar el modo en localStorage
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  return (
    <div className="fixed top-0 z-10 w-9/12 backdrop-blur-2xl h-14 flex justify-between items-center font-inter font-bold">
      <div className="h-12 ml-10 pt-2">
        <h1 className="text-3xl ml-3">EV</h1>
      </div>
      <div className="h-12 w-80 flex items-center justify-around mr-14">
        <a href="#inicio" className="hover:text-[#366bfd] ">Inicio</a>
        <a href="#proyectos" className="hover:text-[#366bfd] ">Proyectos</a>
        <a href="#sobre-mi" className="hover:text-[#366bfd] ">Sobre mí</a>
        <a href="#contacto" className="hover:text-[#366bfd] ">Contacto</a>
      </div>
      <button onClick={toggleDarkMode} className="mr-12 hover:text-[#366bfd] text-2xl">
        {darkMode ? <FaMoon/> : <IoSunnyOutline/>}
      </button>
    </div>
  );
};

export default NavBar;