import { useNavigate } from "react-router";
import Card from "./../../common/Card/Card";
import "./ProductList.css";
import Button from "./../../common/Button/Button";
import { TfiShoppingCart } from "react-icons/tfi";

//HW: add delete button on card and erase product from list
export default function ProductList({ products, addProductToCart }) {
  let navigate = useNavigate();

  const handleButtonClick = (e, id) => {
    e.stopPropagation();
    addProductToCart(id);
  };
  return (
    <div className="product-list">
      {products.length > 0 &&
        products.map((product) => (
          <Card
            key={product.id}
            imageUrl={product.image}
            price={product.price}
            title={product.title}
            onClick={() => navigate(`/product/${product.id}`)}
            actions={
              <Button
                icon={<TfiShoppingCart />}
                onClick={(e) => handleButtonClick(e, product.id)}
              />
            }
          />
        ))}
    </div>
  );
}
