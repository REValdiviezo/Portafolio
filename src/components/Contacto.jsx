import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contacto = () => {
  const refForm = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const serviceId = 'service_u4p5xvn';
    const templateId = 'template_7w17wr8';
    const apikey = 'S5KxbaCS8K3oEBIQN';

    emailjs
      .sendForm(serviceId, templateId, refForm.current, apikey)
      .then((result) => {
        console.log(result.text);
        refForm.current.reset();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div id='contacto' className='h-screen flex flex-col justify-center items-center'>
      <h2 className='text-[70px] -mt-20'>Contacto</h2>
      <form
        ref={refForm}
        action=''
        onSubmit={handleSubmit}
        className='flex flex-col w-80 border-2 mt-20 py-7 px-4'
      >
        <label htmlFor=''>Nombre:</label>
        <input type='text' name='userName' className='text-black' required />
        <label htmlFor=''>Email:</label>
        <input type='email' name='email' className='text-black' required />
        <label htmlFor=''>Mensaje:</label>
        <input type='text' name='message' className='text-black' required />
        <button>Enviar</button>
      </form>
    </div>
  );
};
export default Contacto;
