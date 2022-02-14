import React from 'react';


const Card = ({children, classes}) => {
  return (
    <div className={`rounded-2rem shadow-inner relative overflow-hidden ${classes}`}>
      {children}
    </div>
  );
}

export default Card;
