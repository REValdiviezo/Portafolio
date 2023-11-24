const NavBar = () => {
  return (
    <div className='h-12 flex justify-between items-center font-inter font-bold'>
        <div className='h-14 ml-10'>
          <h1 className='text-blue-700 text-[35px] '>EV</h1>
        </div>
        <div className='h-8 w-80 flex items-center justify-around mr-10'>
          <button className="">Inicio</button>
          <button className="">Sobre mi</button>
          <button className="">Proyectos</button>
          <button className="">Contacto</button>
        </div>
    </div>
  );
};

export default NavBar;
