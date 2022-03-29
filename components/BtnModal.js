import React from 'react';
import { PlusCircleIcon } from '@heroicons/react/outline';
import {Link} from 'next/link'

const Btnmodal = ({openModal, color}) => {
  return (
    <button onClick={openModal} className='absolute bottom-0 right-0 m-5 outline-none'>
      <PlusCircleIcon 
        className={`${color ? 'text-'+color+'-400' :'text-white'} w-11 h-11`}
      />
    </button>
  );
}

export default Btnmodal;
