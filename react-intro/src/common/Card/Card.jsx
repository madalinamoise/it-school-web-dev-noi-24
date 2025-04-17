import Button from "./../Button/Button";
import { TfiShoppingCart } from "react-icons/tfi";

import "./Card.css";

export default function Card({ imageUrl, title, price, onClick, actions }) {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-image">
        <img src={imageUrl} alt="card-image"></img>
      </div>
      <div className="card-body">
        <div id="title" className="card-body-title title">
          {title}
        </div>
        <div className="card-body-content">
          <p className="card-price">${price}</p>

          {actions}
        </div>
      </div>
    </div>
  );
}
