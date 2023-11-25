import img from "../assets/imgSobremi.png"

const SobreMi = () => {
    return(
        <div className="h-4/5 flex items-center font-bold justify-evenly">
            <div className="max-w-xl ml-24">
                <h2 className="text-[55px] font-inter">Sobre mi</h2>
                <p className="leading-tight">Ingresé al mundo de la programación mientras cursaba la carrera de Analista Programador, donde consolidé las bases y fundamentos. Durante este proceso y de manera autodidacta, me sumergí en el desarrollo web. Realicé proyectos tanto de forma individual como grupal, lo que me permitió desarrollar habilidades sólidas de comunicación para el trabajo en equipo, siempre con <b className="text-[#366bfd]">responsabilidad, actitud curiosa, positiva y colaborativa.</b> Mi enfoque se centra en crear soluciones web efectivas y escalables. ¡Explora mi portfolio y descubre cómo puedo aportar valor a tu próximo proyecto!</p>
            </div>
            <div className="">
                <img src={img} alt=""  className="w-[600px]"/>
            </div>
        </div>
    )
};

export default SobreMi;