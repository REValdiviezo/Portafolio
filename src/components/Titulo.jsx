import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import img from "../assets/img.jpeg";

const Titulo = () => {
    return(
        <div className="h-screen flex items-center justify-evenly font-bold">
            <div className="max-w-xl">
                <h1 className="text-[55px] font-playpen">Hola, soy Ezequiel</h1>
                <h3 className="text-[30px] mb-3 -mt-2 font-inter">Full Stack Developer</h3>
                <p className="font-inter mb-5">Especializado en la creación de aplicaciones web eficientes y escalables, proporcionando soluciones integrales para optimizar la experiencia del usuario y el rendimiento del sistema</p>
                <div className="flex items-center w-80">
                    <button className="bg-blue-600 text-white text-[20px] px-3 mr-4 rounded-xl font-inter font-extrabold ">Resume</button>
                    <a href="https://www.linkedin.com/in/ezequiel-valdiviezo-987582247/" className="text-2xl mr-2 text-blue-600"><FaLinkedin/></a>
                    <a href="https://github.com/REValdiviezo" className="text-2xl text-blue-600"><FaGithubSquare/></a>
                </div>
            </div>
            <div className="bg-red-400">
                <img src={img} alt="" className="w-80"/>
            </div>
        </div>
    )
};

export default Titulo;