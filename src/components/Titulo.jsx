import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { GoCopy } from "react-icons/go";
import { FiDownload } from "react-icons/fi";
import { useState } from "react"; // Importamos useState
import img from "../assets/img.jpeg";

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
        <div id="inicio" className="h-screen flex items-center justify-evenly font-bold">
            <div className="max-w-xl">
                <h2>👋 Hola, soy</h2>
                <h1 className="text-[55px] font-playpen"><b className="text-[#366bfd]">Ezequiel Valdiviezo</b></h1>
                <h3 className="text-[30px] mb-3 -mt-2 font-inter">Frontend Developer</h3>
                <p className="font-inter mb-5">Apasionado por el desarrollo web y brindar la mejor experiencia.</p>
                <div className="flex items-center">
                    <button className="bg-blue-600 flex text-white text-[20px] px-3 mr-4 py-1 rounded-xl font-inter font-extrabold"><a href="/docuCV.pdf" download className="text-sm mr-2">Descargar CV</a><FiDownload /></button>
                    <a href="https://www.linkedin.com/in/ezequiel-valdiviezo-987582247/" target="_blank" className="text-2xl mr-2 text-blue-600" rel="noreferrer"><FaLinkedin/></a>
                    <a href="https://github.com/REValdiviezo" target="_blank" className="text-2xl text-blue-600" rel="noreferrer"><FaGithubSquare/></a>
                    <div className="flex flex-row justify-center items-center relative">
                        <div className="ml-3 mr-1 border-2 border-blue-600 rounded-xl px-2 text-[14px]">ezequielrvaldiviezo@gmail.com</div>
                        <button onClick={() => copyToClipboard("ezequielrvaldiviezo@gmail.com")} className="bg-blue-600 text-white text-[17px] w-8 h-6 pl-2 mr-2 rounded-lg font-extrabold"><GoCopy /></button>
                        {copied && <span className="text-xs text-green-500 absolute left-72">Copiado!</span>}
                    </div>
                </div>
            </div>
            <div>
                <img src={img} alt="" className="w-80 rounded-[30%20px]"/>
            </div>
        </div>
    );
};

export default Titulo;