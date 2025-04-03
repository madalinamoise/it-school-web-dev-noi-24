import Header from './components/common/Header/Header';
import NavBar from './components/common/NavBar/NavBar';
import StudentList from './components/StudentList/StudentList';
import ProductList from './components/ProductList/ProductList';
import './Intro.css';
import { useEffect, useState } from 'react';

const Intro = () => {
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
  const [showHeader, setShowHeader] = useState(true);
  const [isCapHeader, setCapHeader] = useState(false);
  const [products, setProducts] = useState([]);

  console.log('render');
  useEffect(() => {
    setTimeout(() => {
      setShowHeader((prev) => !prev);
    }, [5000]);
  });

  useEffect(() => {
    console.log('empty array dep');

    const timeout = setTimeout(() => {
      setCapHeader((prev) => !prev);
    }, [1700]);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      const resp = await fetch('https://fakestoreapi.com/products');
      const products = await resp.json();
      setProducts(products);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <NavBar />
      {showHeader && (
        <Header title='New app title' isCapHeader={isCapHeader}></Header>
      )}
      <div className='test-class'>Dummy text 2</div>
      <StudentList />
      {/* <Header title='New app title 1'></Header>
      <Header title='New app title 2'></Header> */}
      {/* <Card imageUrl={image} title={'Apple IPhone 14'} price={899}></Card> */}
      <ProductList products={products} />
    </>
  );
};

export default Intro;
