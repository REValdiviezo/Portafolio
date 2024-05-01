import img from "../assets/imgSobremi.png"

const SobreMi = () => {
    return(
        <div id="sobre-mi" className="h-screen flex items-center font-bold justify-evenly">
            <div className="max-w-xl ml-14">
                <h2 className="text-[70px] font-inter">Sobre mi</h2>
                <p className="leading-tight text-xl">Soy un Desarrollador Frontend apasionado por el aprendizaje continuo y autodidacta. Estoy listo para contribuir y crecer en el emocionante mundo del desarrollo web. Mi enfoque se centra en la creación de interfaces <span className="text-[#366bfd]">intuitivas, atractivas y funcionales</span> que brinden una experiencia excepcional al usuario. Con gran habilidad de comunicación, trabajo en equipo y liderazgo. Tengo experiencia en <span className="text-[#366bfd]">HTML, CSS, TailwindCSS, JavaScript y React</span>. Estoy emocionado de enfrentar nuevos desafíos y colaborar en proyectos innovadores que impulsen el cambio y la creatividad.</p>
            </div>
            <div className="">
                <img src={img}  className="w-[600px]"/>
            </div>
        </div>
    )
};

export default SobreMi;