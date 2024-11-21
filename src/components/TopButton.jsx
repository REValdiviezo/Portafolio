import { useState, useEffect } from 'react';
import { FaArrowCircleUp } from "react-icons/fa";

const TopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Manejar el desplazamiento de la página
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Mostrar u ocultar el botón según la posición del scroll
    const handleScroll = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <button
            className={`text-[30px] fixed bottom-4 right-4 text-[#366bfd] px-4 py-2 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            onClick={scrollToTop}
        >
            <FaArrowCircleUp />
        </button>
    );
};

export default TopButton;