import img from "../assets/img.jpeg";

const SobreMi = () => {
    return(
        <div id="sobre-mi" className="w-full mx-auto flex flex-col lg:flex-row items-center font-bold justify-evenly my-20 px-6">
            <div className="max-w-xl">
                <h2 className="text-[40px] lg:text-[50px] font-inter ">Sobre mi</h2>
                <p className="leading-tight text-lg lg:text-xl">Soy Desarrollador Frontend con pasión por el aprendizaje continuo y por contribuir al éxito de equipos multidisciplinarios. Me especializo en el desarrollo de interfaces <span className="text-[#366bfd]">modernas, intuitivas y funcionales</span>, utilizando principalmente tecnologías como <span className="text-[#366bfd]">HTML, CSS, TailwindCSS, JavaScript y React</span>. Mi enfoque se centra en colaborar de manera proactiva, aportar soluciones creativas y adaptarme rápidamente a nuevos desafíos. Gracias a mis habilidades de comunicación, liderazgo y trabajo en equipo, puedo integrar mis conocimientos para impulsar proyectos innovadores que generen impacto y mejoren la experiencia del usuario.</p>
            </div>
            <div className=" lg:mt-0 lg:-mr-14 mt-20">
                <img src={img} className="w-[200px] sm:w-[200px] lg:w-[250px] rotate-6 rounded-[30px] lg:rounded-[50px]"/>
            </div>
        </div>
    )
};

export default SobreMi;
