

const Projectos = () => {
  const projects = [
    {
      id: 1,
      title: 'Libreria Digital',
      description: 'Permite al usuario Comprar, Vender, Alquilar, Leer y Escuchar una gran variedad de libros y ser parte de una comunidad',
      imageUrl: 'https://via.placeholder.com/300',
    },
    {
      id: 2,
      title: 'Explorador de Paises',
      description: 'Puedes ver informacion detallada de cada pais del mundo y tener una experiencia dinamica al aplicar filtros a tus busquedas',
      imageUrl: 'https://via.placeholder.com/300',
    },
    {
      id: 3,
      title: 'Rick and Morty',
      description: 'Puedes ver todos los personajes de la famosa serie de TV y agregar algunos a tu seccion de favoritos',
      imageUrl: 'https://via.placeholder.com/300',
    },
    {
      id: 4,
      title: 'Lista de Tareas',
      description: 'Te permite registrar tareas que tengas pendiente, modificarlas o eliminarlas cuando las hayas cumplido',
      imageUrl: 'https://via.placeholder.com/300',
    },
  ];

  return (
    <section className="h-screen">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 className="text-[70px] font-semibold mb-10">Proyectos</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center w-[900px]">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 w-[400px] rounded-lg shadow-lg overflow-hidden">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-60 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-withe mb-2">{project.title}</h3>
                <p className="text-withe">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projectos;