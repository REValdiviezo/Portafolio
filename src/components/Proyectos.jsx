import { Link } from 'react-router-dom';
import html from '../assets/Icons/html.png';
import css from '../assets/Icons/css.png';
import javascript from '../assets/Icons/javascript.png';
import node from '../assets/Icons/node.png';
import react from '../assets/Icons/react.png';
import tailwind from '../assets/Icons/tailwind.png';
import Libreria from '../assets/Proyectos/Libreria.png';
import Paises from '../assets/Proyectos/Paises.png';
import RyM from '../assets/Proyectos/RyM.png';
import Calculadora from '../assets/Proyectos/Calculadora.png';


const Proyectos = () => {
  const projects = [
    {
      id: 1,
      title: 'Libreria Digital',
      description: 'Permite al usuario Comprar, Vender, Alquilar, Leer y Escuchar una gran variedad de libros y ser parte de una comunidad',
      imageUrl: Libreria,
      deployUrl: 'https://bookbuster-ar.vercel.app',
      githubUrl: 'https://github.com/REValdiviezo',
      skill: [html, tailwind, javascript, react, node]
    },
    {
      id: 2,
      title: 'Explorador de Paises',
      description: 'Puedes ver informacion detallada de cada pais del mundo y tener una experiencia dinamica al aplicar filtros a tus busquedas',
      imageUrl: Paises,
      deployUrl: 'https://github.com/REValdiviezo',
      githubUrl: 'https://github.com/REValdiviezo/cr-pi-countries-main',
      skill: [html, css, javascript, react, node]
    },
    {
      id: 3,
      title: 'Rick and Morty',
      description: 'Puedes ver todos los personajes de la serie, aplicarles filtros de busqueda y agregar los mejores a tu seccion de favoritos',
      imageUrl: RyM,
      deployUrl: 'https://github.com/REValdiviezo',
      githubUrl: 'https://github.com/REValdiviezo/rick_and_morty-FT39a',
      skill: [html, css, javascript, react, node]
    },
    {
      id: 4,
      title: 'Calculadora',
      description: 'Calculadora que realiza operaciones básicas como suma, resta, multiplicación y división, con una interfaz simple y fácil de usar.',
      imageUrl: Calculadora,
      deployUrl: 'https://github.com/REValdiviezo',
      githubUrl: 'https://github.com/REValdiviezo/Calculadora_JS',
      skill: [html, css, javascript]
    },
  ];

  return (
    <div id='proyectos' className="h-auto w-full mx-auto px-5 flex flex-col items-center">
      <h2 className="text-[40px] font-inter font-bold mb-10">Proyectos</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center ">
        {projects.map((project) => (
          <div key={project.id} className="bg-gray-800 w-[350px] rounded-lg shadow-lg overflow-hidden">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-60 object-center object-fill transition-transform duration-300 hover:scale-105"
            />
            <div className="p-3">
              <h3 className="text-xl font-semibold text-[#e6f3ff] mb-2">{project.title}</h3>
              <p className="text-[#e6f3ff]">{project.description}</p>
              <div className='flex my-1'>
                {project.skill.map((icon, index) => (
                  <div key={index}>
                    <img src={icon} className='w-7 h-7 mx-2' />
                  </div>
                ))}
              </div>
              <div className="flex mt-4">
                <Link to={project.deployUrl} target="_blank" className="bg-[#366bfd] hover:bg-blue-800 text-[#e6f3ff] font-semibold px-2 py-1 rounded mr-2">Despliegue</Link>
                <Link to={project.githubUrl} target="_blank" className="border-2 border-[#366bfd] hover:bg-blue-800 text-[#e6f3ff] font-semibold px-2 py-1 rounded">GitHub</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Proyectos;