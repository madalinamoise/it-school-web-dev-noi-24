import './Button.css';
import { useState } from 'react';
//HW: add an iconPosition prop and manipulate the position of the icon
const Button = ({ label, onClick, hasCount, icon, iconPosition = 'right' }) => {
  const [count, setCount] = useState(0);

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
      {iconPosition === 'left' && icon}
      {label}
      {hasCount && ` (${count})`}
      {iconPosition === 'right' && icon}
    </button>
  );
};

export default Button;
