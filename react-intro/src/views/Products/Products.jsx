import { useState, useEffect } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import AddProduct from '../../components/AddProduct/AddProduct';
import image from './../../assets/phone.svg';
import Header from '../../common/Header/Header';

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

  useEffect(() => {
    const fetchProducts = async () => {
      const resp = await fetch('https://fakestoreapi.com/products');
      const products = await resp.json();
      setProducts(products);
      console.log(products);
    };

    fetchProducts();
  }, []);

  const handleOnAddProduct = (product) => {
    product.image = image;
    product.id = Math.random();

    const newProducts = [...products, product];
    setProducts(newProducts);
  };

  return (
    <>
      <Header title='Products'></Header>

      <ProductList products={products} />
      <AddProduct onAdd={(product) => handleOnAddProduct(product)} />
    </>
  );
}
