import { useEffect, useState } from "react";
import Header from "../../common/Header/Header";
import AddProduct from "../../components/AddProduct/AddProduct";
import ProductList from "../../components/ProductList/ProductList";
import { ADD_TO_CART } from "../../store/cart/actions";
import { useCart } from "../../store/cart/CartContext";
import image from "./../../assets/phone.svg";

export default function Products() {
  // const products = [
  //   {
  //     id: '1',
  //     imageUrl: image,
  //     name: 'Apple IPhone 14',
  //     price: 899,
  //   },
  //   {
  //     id: '222',
  //     imageUrl: image,
  //     name: 'Apple IPhone 14',
  //     price: 899,
  //   },
  //   {
  //     id: '43243',
  //     imageUrl: image,
  //     name: 'Apple IPhone 14',
  //     price: 899,
  //   },
  //   {
  //     id: '7536',
  //     imageUrl: image,
  //     name: 'Apple IPhone 14',
  //     price: 899,
  //   },
  //   {
  //     id: '123',
  //     imageUrl: image,
  //     name: 'Apple IPhone 14',
  //     price: 899,
  //   },
  //   {
  //     id: 'xcvcxdf',
  //     imageUrl: image,
  //     name: 'Apple IPhone 14',
  //     price: 899,
  //   },
  // ];

  const [products, setProducts] = useState([]);
  const { dispatch } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      const resp = await fetch("https://fakestoreapi.com/products");
      const products = await resp.json();
      setProducts(products);
    };

    fetchProducts();
  }, []);

  const handleOnAddProduct = (product) => {
    product.image = image;
    product.id = Math.random();

    const newProducts = [...products, product];
    setProducts(newProducts);
  };

  const handleAddProductToCart = (id) => {
    dispatch({
      type: ADD_TO_CART,
      payload: id,
    });
  };

  return (
    <>
      <Header title="Products"></Header>
      <ProductList
        products={products}
        addProductToCart={handleAddProductToCart}
      />
      <AddProduct onAdd={(id) => handleOnAddProduct(id)} />
    </>
  );
}
