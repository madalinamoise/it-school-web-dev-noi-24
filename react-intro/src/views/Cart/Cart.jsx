import { useEffect, useState } from "react";
import { useCart } from "../../store/cart/CartContext";
import Card from "../../common/Card/Card";

export default function Cart() {
  const { cart } = useCart();
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
  }, [cart]);

  const getCartQuantityForProduct = (id) =>
    cart.find((p) => p.id === id).quantity;

  return (
    <ul>
      {products.map((product, index) => (
        <Card
          key={index}
          imageUrl={product.image}
          title={product.title}
          price={product.price}
          quantity={getCartQuantityForProduct(product.id)}
        />
      ))}
    </ul>
  );
}
