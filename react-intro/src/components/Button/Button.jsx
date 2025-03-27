import './Button.css';
import { useState } from 'react';

const Button = ({ label, onButtonClick }) => {
  const [count, setCount] = useState(0);

  // .addEventListener('click',()=>{})
  const handleOnClick = () => {
    setCount((prevValue) => prevValue + 1);
    onButtonClick();
  };

  const handleOnMouseLeave = () => console.log('on mouse leave');

  const handleOnMouseEnter = () => console.log('on mouse enter');

  return (
    <button
      onClick={handleOnClick}
      onMouseLeave={handleOnMouseLeave}
      onMouseEnter={handleOnMouseEnter}
    >
      {label}({count})
    </button>
  );
};

export default Button;
