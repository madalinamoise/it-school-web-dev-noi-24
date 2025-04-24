import { useEffect, useState } from "react";
import { TfiTrash } from "react-icons/tfi";
import { useNavigate } from "react-router";
import Button from "../../common/Button/Button";
import Card from "../../common/Card/Card";
import { useCart } from "../../store/cart/CartContext";
import styles from "./Cart.module.css";

export default function Cart() {
  const { cart, removeFromCart } = useCart();
  let navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const promises = cart.map((product) =>
      fetch(`https://fakestoreapi.com/products/${product.id}`).then((resp) =>
        resp.json()
      )
    );
    const fetchProducts = async () => {
      const products = await Promise.all(promises);
      setProducts(products);
    };

    fetchProducts();
  }, []);

  const getCartQuantityForProduct = (id) =>
    cart.find((p) => p.id === id).quantity;

  const handleButtonClick = (e, id) => {
    e.stopPropagation();
    removeFromCart(id);
  };

  return (
    <div className={styles.productsList}>
      {products.map(
        (product, index) =>
          cart.find((p) => p.id === product.id) && (
            <Card
              key={index}
              imageUrl={product.image}
              title={product.title}
              price={product.price}
              quantity={getCartQuantityForProduct(product.id)}
              onClick={() => navigate(`/product/${product.id}`)}
              actions={
                <Button
                  icon={<TfiTrash />}
                  onClick={(e) => handleButtonClick(e, product.id)}
                />
              }
            />
          )
      )}
    </div>
  );
}
