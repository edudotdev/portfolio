import React from 'react';

const Titlecard = ({title, classes, spaceLetter}) => {
  return (
    <span className={`text-9xl text-bold font-black opacity-80 leading-none absolute ${classes}`}>
      <span className='text-20xl'>{title.charAt(0)}</span><span className={spaceLetter ? 'relative -left-10' : null}>{title.slice(1)}</span>
    </span>
  );
}

export default Titlecard;
