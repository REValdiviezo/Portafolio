import img from "../assets/img.jpeg";

const SobreMi = () => {
    return(
        <div id="sobre-mi" className="h-screen w-11/12 flex gap-10 items-center font-bold justify-evenly">
            <div className="max-w-xl ml-10">
                <h2 className="text-[50px] font-inter ">Sobre mi</h2>
                <p className="leading-tight text-xl">Soy un Desarrollador Frontend con una fuerte pasión por el aprendizaje autodidacta y continuo. Me especializo en la creación de interfaces <span className="text-[#366bfd]">intuitivas, atractivas y funcionales</span>, con el objetivo de ofrecer una experiencia de usuario excepcional. Poseo sólidas habilidades de comunicación, trabajo en equipo y liderazgo. Tengo experiencia en tecnologías como <span className="text-[#366bfd]">HTML, CSS, TailwindCSS, JavaScript, Typescript y React</span>. Estoy siempre dispuesto a enfrentar nuevos desafíos y me entusiasma la oportunidad de colaborar en proyectos innovadores que impulsen la creatividad y generen impacto.</p>
            </div>
            <div className="-mr-10">
                <img src={img}  className="w-[250px] rotate-6 rounded-[50px] mt-16"/>
            </div>
        </div>
    )
};

export default SobreMi;