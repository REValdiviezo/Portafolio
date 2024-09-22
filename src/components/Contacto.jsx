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
      <h2 className='text-[50px] font-inter font-bold '>Contacto</h2>
      <form
        ref={refForm}
        onSubmit={handleSubmit}
        className='flex flex-col w-[450px] mt-5 py-7 px-4 rounded-2xl bg-gradient-to-tr from-bootomBlue to-topBlue'
      >
        <label className='font-bold'>Nombre:</label>
        <input type='text' name='userName' placeholder='Ej: Ezequiel Valdiviezo' className='mb-5 mt-1 texr-white bg-[#13173DF1] border-none rounded-md' required />
        <label className='font-bold'>Email:</label>
        <input type='email' name='email' placeholder='Ej: ejemplo@gmail.com' className='mb-5 mt-1 placeholder: bg-[#13173DF1] border-none rounded-md' required />
        <label className='font-bold'>Mensaje:</label>
        <textarea type='text' name='message' placeholder='' className='mb-5 mt-1 placeholder: bg-[#13173DF1] border-none rounded-md' required />
        <div className='flex justify-center'>
          <button className=' font-bold w-32 h-8 rounded-md border-none bg-gradient-to-br bg-[#366bfd] to-blue-200 hover:bg-blue-800'>Enviar</button>
        </div>
      </form>
    </div>
  );
};
export default Contacto;
