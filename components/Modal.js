import React,{useState} from 'react';
import { PlusCircleIcon } from '@heroicons/react/outline';
import ReactDOM from 'react-dom';
import Modals from 'react-modal';
import BtnModal from './BtnModal';

const customStyles = {
  content: {
    width: '100%',
    height: '100%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: 'rgba(255,255,255, .3)',
    backdropFilter: 'saturate(180%) blur(20px)',
  },
};

const Modal = ({children, blendDif}) => {

  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <BtnModal blendDif={blendDif} openModal={openModal} />
      <Modals
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        
        <button onClick={closeModal} className='rotate-45 absolute top-0 left-0 m-4 outline-none'>
          <PlusCircleIcon
            className={'text-gray-600  w-10 h-10'}
          />
        </button>

       <hr className='my-14'></hr>
        <div class="container m-auto">
          {children}
        </div>
      </Modals>
    </div>
  );
}

export default Modal;
