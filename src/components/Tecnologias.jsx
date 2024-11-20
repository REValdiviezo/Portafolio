import html from '../assets/Icons/html.png';
import css from '../assets/Icons/css.png';
import javascript from '../assets/Icons/javascript.png';
import git from '../assets/Icons/git.png';
import github from '../assets/Icons/github.png';
import node from '../assets/Icons/node.png';
import postgre from '../assets/Icons/postgresql.png';
import react from '../assets/Icons/react.png';
import redux from '../assets/Icons/redux.png';
import sequelize from '../assets/Icons/sequelize.png';
import sql from '../assets/Icons/sql.png';
import tailwind from '../assets/Icons/tailwind.png';
import vite from '../assets/Icons/vite.png';
import typescript from '../assets/Icons/typescript.png';

const tecnologias = [
  { src: html, name: 'HTML' },
  { src: css, name: 'CSS' },
  { src: tailwind, name: 'TailwindCSS' },
  { src: javascript, name: 'JavaScript' },
  { src: typescript, name: 'Typescript' },
  { src: react, name: 'React' },
  { src: redux, name: 'Redux' },
  { src: git, name: 'Git' },
  { src: github, name: 'Github' },
  { src: node, name: 'NodeJs' },
  { src: sequelize, name: 'Sequelize' },
  { src: postgre, name: 'PostgreSQL' },
  { src: sql, name: 'SQL' },
  { src: vite, name: 'Vite' },
];

const Tecnologias = () => {
  return (
    <div id='tecnologias' className='w-full xl:w-10/12 h-auto m-auto mb-32'>
      <h2 className="text-[40px] text-center font-inter font-bold mb-10">Tecnologías</h2>
      <div className='flex flex-wrap gap-10 px-10 justify-center'>
        {tecnologias.map((tech, index) => (
          <div key={index} className='w-[100px]'>
            <img className='w-24 h-24 px-3' src={tech.src} alt={tech.name} />
            <h3 className='text-center font-bold mt-2'>{tech.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tecnologias;
