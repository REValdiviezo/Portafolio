import { useState, useEffect } from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { FaMoon } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";
import MarcaB from "../assets/Marca-B.png"
import MarcaA from "../assets/Marca-A.png"

const NavBar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
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
    <div className="fixed top-0 z-10 w-full backdrop-blur-2xl h-14 flex justify-between items-center font-inter font-bold px-20">
      <div>
        <img 
          src={darkMode ? MarcaA : MarcaB} 
          alt="Marca" 
          className="size-12" 
        />
      </div>

      <div className="hidden md:flex h-12 w-[440px] items-center justify-between">
        <a href="#inicio" className="hover:text-[#366bfd]">Inicio</a>
        <a href="#tecnologias" className="hover:text-[#366bfd]">Tecnologías</a>
        <a href="#proyectos" className="hover:text-[#366bfd]">Proyectos</a>
        <a href="#sobre-mi" className="hover:text-[#366bfd]">Sobre mí</a>
        <a href="#contacto" className="hover:text-[#366bfd]">Contacto</a>
      </div>

      {/* Icono del menú hamburguesa para pantallas pequeñas */}
      <button onClick={toggleMenu} className="md:hidden text-2xl">
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <button onClick={toggleDarkMode} className=" hover:text-[#366bfd] text-2xl">
        {darkMode ? <FaMoon /> : <IoSunnyOutline />}
      </button>

      {/* Menú desplegable para pantallas pequeñas */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-14 right-0 bg-gray-800 text-white w-full flex flex-col items-center space-y-4 py-4">
          <a href="#inicio" className="hover:text-[#366bfd]" onClick={toggleMenu}>Inicio</a>
          <a href="#tecnologias" className="hover:text-[#366bfd]" onClick={toggleMenu}>Tecnologías</a>
          <a href="#proyectos" className="hover:text-[#366bfd]" onClick={toggleMenu}>Proyectos</a>
          <a href="#sobre-mi" className="hover:text-[#366bfd]" onClick={toggleMenu}>Sobre mí</a>
          <a href="#contacto" className="hover:text-[#366bfd]" onClick={toggleMenu}>Contacto</a>
        </div>
      )}
    </div>
  );
};

export default NavBar;
