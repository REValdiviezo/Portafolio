import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { GoCopy } from "react-icons/go";
import { FiDownload } from "react-icons/fi";
import { useState } from "react"; // Importamos useState
import img2 from "../assets/imgSobremi.png";

const Titulo = () => {
    const [copied, setCopied] = useState(false); // Estado para controlar si se ha copiado el correo electrónico

    // Función para copiar texto al portapapeles
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                // Éxito al copiar
                setCopied(true);
                setTimeout(() => {
                    setCopied(false);
                }, 1000); // Reinicia el estado después de 2 segundos
            })
            .catch((error) => {
                console.error('Error al copiar al portapapeles:', error);
            });
    };

    return (
        <div id="inicio" className="w-full h-screen flex flex-col-reverse lg:flex-row items-center justify-evenly font-bold px-5">
            <div className="max-w-xl lg:pl-5 text-center lg:text-left mt-10 lg:mt-0">
                <h2>👋 Hola, soy</h2>
                <h1 className="text-[40px] lg:text-[55px] font-playpen"><b className="text-[#366bfd]">Ezequiel Valdiviezo</b></h1>
                <h3 className="text-[24px] lg:text-[30px] mb-3 -mt-2 font-inter">Desarrollador Frontend</h3>
                <p className="font-inter mb-5 text-sm lg:text-base">Apasionado por la tecnología, siempre en busca de nuevos desafíos que impulsen la creación de soluciones efectivas en el entorno digital.</p>
                <div className="flex flex-col lg:flex-row items-center">
                    <button className="bg-[#366bfd] hover:bg-blue-800 flex items-center text-[#e6f3ff] text-[16px] lg:text-[20px] px-3 mr-0 lg:mr-4 mb-4 lg:mb-0 py-2 rounded-xl font-inter font-extrabold">
                        <a href="/Doc_CV.pdf" download className="text-sm mr-2">Descargar CV</a><FiDownload />
                    </button>
                    <div className="flex space-x-3 lg:space-x-2">
                        <a href="https://www.linkedin.com/in/ezequiel-valdiviezo-987582247/" target="_blank" className="text-xl lg:text-2xl text-[#366bfd] hover:text-blue-800" rel="noreferrer"><FaLinkedin /></a>
                        <a href="https://github.com/REValdiviezo" target="_blank" className="text-xl lg:text-2xl text-[#366bfd] hover:text-blue-800" rel="noreferrer"><FaGithubSquare /></a>
                    </div>
                    <div className="flex flex-row justify-center items-center relative mt-4 lg:mt-0 :bg-red-600">
                        <div className="ml-3 mr-1 border-2 border-[#366bfd] rounded-xl px-2 text-[12px] lg:text-[14px]">ezequielrvaldiviezo@gmail.com</div>
                        <button onClick={() => copyToClipboard("ezequielrvaldiviezo@gmail.com")} className="bg-[#366bfd] hover:bg-blue-800 text-white text-[14px] lg:text-[17px] w-8 h-6 pl-2 mr-2 rounded-lg font-extrabold"><GoCopy /></button>
                        {copied && <span className="text-xs text-green-500 absolute top-8 sm:left-64 sm:top-1 md:left-64 lg:left-72">Copiado!</span>}
                    </div>
                </div>
            </div>
            <div className="hidden lg:block -mr-14">
                <img src={img2} alt="" className="w-[280px] md:w-[380px]" />
            </div>
        </div>
    );
};

export default Titulo;
