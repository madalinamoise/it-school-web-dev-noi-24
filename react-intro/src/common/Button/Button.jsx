import './Button.css';
import { useState } from 'react';

const Button = ({ label, onClick, hasCount, icon, iconPosition }) => {
  const [count, setCount] = useState(0);

  // .addEventListener('click',()=>{})
  const handleOnClick = () => {
    setCount((prevValue) => prevValue + 1);
    onClick();
  };

  const handleOnMouseLeave = () => console.log('on mouse leave');

  const handleOnMouseEnter = () => console.log('on mouse enter');

  return (
    <button
      className='button'
      onClick={handleOnClick}
      onMouseLeave={handleOnMouseLeave}
      onMouseEnter={handleOnMouseEnter}
    >
      {iconPosition === 'left' && <span className="icon" style={{ paddingRight: '5px' }}>{icon}</span>}
      {label}
      {hasCount && ' (' + count + ')'}
      {!iconPosition && <span className={`icon ${label && 'icon-right'}`}>{icon}</span>}
      {iconPosition === 'right' && <span className="icon icon-right">{icon}</span>}
    </button>
  );
};
//HW: add an iconPosition prop and manipulate the position of the icon
export default Button;
