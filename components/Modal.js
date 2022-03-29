import React,{useState} from 'react';
import { PlusCircleIcon } from '@heroicons/react/outline';
import ReactDOM from 'react-dom';
import Modals from 'react-modal';
import BtnModal from './BtnModal';

import Link from 'next/link'

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
    background: 'rgba(255,255,255, .4)',
    transition: 'backdrop-filter 4s ease',
    backdropFilter: 'saturate(180%) blur(40px)',
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
          <div className='h-12 bg-white bg-opacity-10'>
            <button onClick={closeModal} className='transform rotate-45 absolute top-0 left-0 m-2 outline-none text-white mix-blend-difference'>
              <PlusCircleIcon
                className={'w-8 h-8'}
              />
            </button>
          </div>

          {/* Card About */}
          <section id='about' className='bg-blue-200 bg-opacity-70 min-h-screen'>
            <div className='container mx-auto px-4'>
            <Link href="#skill">
              <a>Home</a>
            </Link>
              <h1 className='text-20xl font-bold text-blue-400'>About</h1>
              <p className='text-4xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla perferendis corrupti reprehenderit facilis architecto cum, accusamus dignissimos placeat dolorum voluptate! Libero exercitationem quibusdam porro facere voluptatibus reiciendis deleniti consequatur qui?</p>
            </div>
          </section>
          {/* Card Projects */}
          <section id='projects' className='bg-yellow-200 bg-opacity-70 p-5 min-h-screen'>
            <div className='container mx-auto px-4'>
              <h1 className='text-20xl font-bold text-yellow-400'>Projects</h1>
              <p className='text-4xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla perferendis corrupti reprehenderit facilis architecto cum, accusamus dignissimos placeat dolorum voluptate! Libero exercitationem quibusdam porro facere voluptatibus reiciendis deleniti consequatur qui?</p>
            </div>
          </section>
          {/* Card Skills */}
          <section id='skill' className='bg-green-200 bg-opacity-70 p-5 min-h-screen'>
            <div className='container mx-auto px-4'>
              <h1 className='text-20xl font-bold text-green-400'>Skills</h1>
              <p className='text-4xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla perferendis corrupti reprehenderit facilis architecto cum, accusamus dignissimos placeat dolorum voluptate! Libero exercitationem quibusdam porro facere voluptatibus reiciendis deleniti consequatur qui?</p>
            </div>
          </section>
        </div>

      </Modals>
    </>
  );
}

export default Modal;
