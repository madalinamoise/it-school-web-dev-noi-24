import './Button.css';
import { useState } from 'react';

const Button = ({ label, onClick, hasCount, icon }) => {
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
      {label}
      {hasCount && ' (' + count + ')'}
      {icon}
    </button>
  );
};
//HW: add an iconPosition prop and manipulate the position of the icon
export default Button;
