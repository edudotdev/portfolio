import React from 'react';
import { PlusCircleIcon } from '@heroicons/react/outline';

const Btnmodal = ({openModal,blendDif}) => {
  return (
    <button onClick={openModal} className='absolute bottom-0 right-0 m-5 outline-none z-10'>
      <PlusCircleIcon 
        className={`${blendDif ? "mix-blend-difference": 'text-white'}  w-11 h-11`}
      />
    </button>
  );
}

export default Btnmodal;
