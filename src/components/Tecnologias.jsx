import { useState, useEffect } from 'react';
import imagen1 from "../assets/descarga.png";
import imagen2 from "../assets/descarga2.png";
import imagen3 from "../assets/descarga3.png";

const Tecnologias = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const images = [imagen1, imagen2, imagen3,imagen1, imagen2, imagen3,imagen1, imagen2, imagen3,imagen1, imagen2, imagen3]; // Array de imágenes
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 2000); // Cambia 5000 por el tiempo deseado en milisegundos para cambiar de imagen automáticamente

    return () => clearInterval(interval);
  }, [currentIndex, images]);

  return (
    <div className="relative w-[8px] h-[30px]">
      <div className="flex absolute top-0 transition-transform duration-1000" style={{ width: `${images.length * 100}%`, transform: `translateX(-${currentIndex * (100 / images.length)}%)` }}>
        {images.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Slide ${index}`}
            className="w-full h-full object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default Tecnologias;
