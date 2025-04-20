import "./Card.css";

export default function Card({
  imageUrl,
  title,
  price,
  quantity,
  onClick,
  actions,
}) {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-image">
        <img src={imageUrl} alt="card-image"></img>
      </div>
      <div className="card-body">
        <div id="title" className="card-body-title title">
          {title}
        </div>
        {quantity && (
          <div id="title" className="card-body-title title">
            Quantity: {quantity}
          </div>
        )}
        <div className="card-body-content">
          <p className="card-price">${price}</p>

          {actions}
        </div>
      </div>
    </div>
  );
}
