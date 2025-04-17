import "./Button.css";
import { useState } from "react";
import { clsx } from "clsx";

const Button = ({ label, onClick, hasCount, icon }) => {
  const [count, setCount] = useState(0);

  // .addEventListener('click',()=>{})
  const handleOnClick = (e) => {
    setCount((prevValue) => prevValue + 1);
    onClick(e);
  };

  const handleOnMouseLeave = () => console.log("on mouse leave");

  const handleOnMouseEnter = () => console.log("on mouse enter");

  return (
    <button
      className="button"
      onClick={(e) => handleOnClick(e)}
      onMouseLeave={handleOnMouseLeave}
      onMouseEnter={handleOnMouseEnter}
    >
      {label}
      {hasCount && " (" + count + ")"}
      <span className={clsx("icon", label && "icon-p-left")}>{icon}</span>
    </button>
  );
};
//HW: add an iconPosition prop and manipulate the position of the icon
export default Button;
