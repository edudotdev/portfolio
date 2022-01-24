import React from 'react';


const Card = ({children, classes}) => {
  return (
    <div className={`rounded-2rem shadow-inner relative ${classes}`}>
      {children}
    </div>
  );
}

export default Card;
