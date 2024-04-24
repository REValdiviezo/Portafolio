import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import img from "../assets/img.jpeg";

const Titulo = () => {
    return(
        <div className="h-screen flex items-center justify-evenly font-bold">
            <div className="max-w-xl">
                <h2>👋 Hola, soy</h2>
                <h1 className="text-[55px] font-playpen"><b className="text-[#366bfd]">Ezequiel Valdiviezo</b></h1>
                <h3 className="text-[30px] mb-3 -mt-2 font-inter">Frontend Developer</h3>
                <p className="font-inter mb-5">Apacionado por el desarrollo web y brindar la mejor experiencia.</p>
                <div className="flex items-center w-80">
                    <button className="bg-blue-600 text-white text-[20px] px-3 mr-4 rounded-xl font-inter font-extrabold ">Resume</button>
                    <a href="https://www.linkedin.com/in/ezequiel-valdiviezo-987582247/" target="_blank" className="text-2xl mr-2 text-blue-600"><FaLinkedin/></a>
                    <a href="https://github.com/REValdiviezo" target="_blank" className="text-2xl text-blue-600"><FaGithubSquare/></a>
                    <div className="flex flex-row justify-center">
                        <div className="ml-3 mr-1 border-2 border-blue-600 rounded-xl px-2 text-[14px]">ezequielrvaldiviezo@gmail.com</div>
                        <span>
                            <button className="bg-blue-600 text-white text-[12px] px-3 mr-4 rounded-xl font-inter font-extrabold">Copy</button>
                        </span>
                    </div>
                </div>
            </div>
            <div className="">
                <img src={img} alt="" className="w-80"/>
            </div>
        </div>
    )
};

export default Titulo;