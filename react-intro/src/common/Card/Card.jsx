import Button from './../Button/Button';
import { TfiShoppingCart } from 'react-icons/tfi';

import './Card.css';

export default function Card({ imageUrl, title, price, uniqueId, onClick, onDelete }) {
  return (
    <div className='card'>
      <div className='card-image' onClick={onClick}>
        <img src={imageUrl} alt='card-image'></img>
      </div>
      <div className='card-body'>
        <div className='card-title'>{title}</div>
        <div className="card-details">
          <p className='card-price'>${price}</p>
          <p className='card-unique'>ID: {uniqueId}</p>
        </div>
        <div className="card-actions">
          <Button
            icon={<TfiShoppingCart />}
            label={'Add'}
          // iconPosition={'right'}
          >
          </Button>
          <Button
            onClick={onDelete}
            label={'Delete'}
          ></Button>
        </div>

      </div>
    </div>
  );
}