import React,{useState} from 'react';
import { PlusCircleIcon } from '@heroicons/react/outline';
import ReactDOM from 'react-dom';
import Modals from 'react-modal';
import BtnModal from './BtnModal';

const customStyles = {
  content: {
    width: '100%',
    minHeight: '100vh',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: 'rgba(255,255,255, .2)',
    transition: 'backdrop-filter 4s ease',
    backdropFilter: 'saturate(180%) blur(20px)',
    padding: '0',
    scrollBehavior: 'smooth',
  },
};

const Modal = ({children, color}) => {

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    document.body.classList.add('overflow-y-hidden');
    setIsOpen(true);
  }

  function closeModal() {
    document.body.classList.remove('overflow-y-hidden');
    setIsOpen(false);
  }

  return (
    <>
      <BtnModal color={color} openModal={openModal} />

        <Modals
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

        <div className='overflow-y-scroll max-h-modal scrollbar-hide'>
          <div className='bg-white bg-opacity-10'>
            <button onClick={closeModal} className='transform rotate-45 absolute top-0 left-0 m-2 outline-none text-white mix-blend-difference'>
              <PlusCircleIcon
                className={'w-10 h-10'}
              />
            </button>
          </div>

          {/* Card About */}
          <main className='flex flex-col gap-16 my-24'>
            <section>
              <div className='container px-10 bg-blue-200 h-1000 mx-auto px-4 rounded-3xl bg-opacity-90'>
                <h1 className='text-10xl font-bold text-blue-400'>About</h1>
                <div className='grid grid-cols-3 gap-10'>
                  <div className='bg-white p-4 rounded-xl'>
                    <h3 className='text-2xl font-bold text-blue-400'>
                      🇲🇽
                    </h3>
                    <p className='text-3xl'>I'm from Mexico 🌮</p>
                  </div>
                  <div className='bg-white p-4 rounded-xl shadow-md'>
                    <h3 className='text-2xl font-bold text-blue-400'>
                      🇲🇽
                    </h3>
                    <p>I'm from Mexico 🌮</p>
                  </div>
                  <div className='bg-white p-4 rounded-xl shadow-md'>
                    <h3 className='text-2xl font-bold text-blue-400'>
                      🇲🇽
                    </h3>
                    <p>I'm from Mexico 🌮</p>
                  </div>
                </div>
              </div>
            </section>
            {/* Card Projects */}
            <section id='projects' className='bg-yellow-200 h-1000 mx-auto px-4 rounded-3xl bg-opacity-60'>
              <div className='container mx-auto px-4'>
                <h1 className='text-20xl font-bold text-yellow-400'>Projects</h1>
                <p className='text-4xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla perferendis corrupti reprehenderit facilis architecto cum, accusamus dignissimos placeat dolorum voluptate! Libero exercitationem quibusdam porro facere voluptatibus reiciendis deleniti consequatur qui?</p>
              </div>
            </section>
            {/* Card Skills */}
            <section id='skill' className='bg-green-200 h-1000 mx-auto px-4 rounded-3xl bg-opacity-60'>
              <div className='container mx-auto px-4'>
                <h1 className='text-20xl font-bold text-green-400'>Skills</h1>
                <p className='text-4xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla perferendis corrupti reprehenderit facilis architecto cum, accusamus dignissimos placeat dolorum voluptate! Libero exercitationem quibusdam porro facere voluptatibus reiciendis deleniti consequatur qui?</p>
              </div>
            </section>
          </main>
        </div>

      </Modals>
    </>
  );
}

export default Modal;
