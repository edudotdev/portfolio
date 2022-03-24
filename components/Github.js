import React, {useEffect} from 'react';

const Github = () => {

  useEffect(() => {
    const squares = document.querySelector('.squares');
    while(squares.firstChild){squares.removeChild(squares.firstChild)}  
    for (var i = 1; i < 330; i++) {
      const level = Math.floor(Math.random() * 4);  
      squares.insertAdjacentHTML('beforeend', `<li data-level="${level}"></li>`);
    }
  }, []);  

  return (
      <ul className="squares absolute opacity-30">
      </ul>
  );
}

export default Github;
