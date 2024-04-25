import img from "../assets/imgSobremi.png"

const SobreMi = () => {
    return(
        <div className="h-screen flex items-center font-bold justify-evenly">
            <div className="max-w-xl ml-24">
                <h2 className="text-[70px] font-inter">Sobre mi</h2>
                <p className="leading-tight text-xl">Soy un Desarrollador Frontend con una sólida formación en tecnologías web modernas y pasión por el aprendizaje continuo y autodidacta. Estoy listo para contribuir y crecer en el emocionante mundo del desarrollo web. Mi enfoque se centra en la creación de interfaces intuitivas, atractivas y funcionales que brinden una experiencia excepcional al usuario. Con gran habilidad de comunicación, trabajo en equipo y liderazgo. Tengo experiencia en HTML, CSS, TailwindCSS, JavaScript y React. Estoy emocionado de enfrentar nuevos desafíos y colaborar en proyectos innovadores que impulsen el cambio y la creatividad.</p>
            </div>
            <div className="">
                <img src={img} alt=""  className="w-[600px]"/>
            </div>
        </div>
    )
};

export default SobreMi;