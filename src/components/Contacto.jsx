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
      <h2 className='text-[70px]'>Contacto</h2>
      <form
        ref={refForm}
        onSubmit={handleSubmit}
        className='flex flex-col w-80 mt-5 py-7 px-4 rounded-2xl bg-gradient-to-tr from-bootomBlue to-topBlue'
      >
        <label>Nombre:</label>
        <input type='text' name='userName' className='text-black mb-5 bg-[#13173DF1] border-none focus:outline-none' required />
        <label>Email:</label>
        <input type='email' name='email' className='text-black mb-5 bg-[#13173DF1] border-none focus:outline-none' required />
        <label>Mensaje:</label>
        <textarea type='text' name='message' className='text-black mb-5 bg-[#13173DF1] border-none focus:outline-none' required />
        <div className='flex justify-center'>
          <button className='bg-blue-800 font-bold w-16 rounded-md border-none'>Enviar</button>
        </div>
      </form>
    </div>
  );
};
export default Contacto;
