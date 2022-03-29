
import Modal from './Modal';

const Card = ({children, classes, isModal, color}) => {
  return (
    <div className={`rounded-2rem shadow-inner relative overflow-hidden ${classes}`}>
      {children}
      {isModal && <Modal color={color} />  }
    </div>
  );
}

export default Card;
