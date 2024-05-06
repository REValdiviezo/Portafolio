const NavBar = () => {
  return (
    <div className="fixed top-0 z-10 w-9/12 backdrop-blur-2xl h-14 flex justify-between items-center font-inter font-bold">
      <div className="h-12 ml-10 pt-2">
        <h1 className="text-3xl ml-3">EV</h1>
      </div>
      <div className="h-12 w-80 flex items-center justify-around mr-14">
        <a href="#inicio" className="text-[#366bfd] hover:text-white">Inicio</a>
        <a href="#sobre-mi" className="text-[#366bfd] hover:text-white">Sobre mi</a>
        <a href="#proyectos" className="text-[#366bfd] hover:text-white">Proyectos</a>
        <a href="#contacto" className="text-[#366bfd] hover:text-white">Contacto</a>
      </div>
    </div>
  );
};

export default NavBar;
