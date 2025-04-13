import Header from './components/common/Header/Header';
import NavBar from './components/common/NavBar/NavBar';
import StudentList from './components/StudentList/StudentList';
import ProductList from './components/ProductList/ProductList';
import AddProduct from './components/AddProduct/AddProduct';
import './Intro.css';
import { useEffect, useState } from 'react';
import image from './assets/phone.svg'


const Intro = () => {
  const studentAddress = {
    street: 'Street',
    number: 25,
  };

  const list = [
    {
      id: '11',
      name: 'Alexandru',
      lastName: 'Popescu',
      age: 18,
      scholarship: 'athletic',
      address: studentAddress,
      isStudent: true,
    },
    {
      id: '12',
      name: 'Maria',
      lastName: 'Stelian',
      age: 23,
      scholarship: '',
      address: studentAddress,
      isStudent: false,
    },
  ];

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

  const handleOnAddProduct = (product) => {
    product.image = image;
    product.id = Math.random();

    const newProducts = [...products, product]
    setProducts(newProducts)
  }


  const handleDeleteProduct = (id) => {
    setProducts(prevProducts => prevProducts.filter(product => product.id !== id));
  };


  return (
    <>
      <NavBar />
      {showHeader && (
        <Header title='New app title' isCapHeader={isCapHeader}></Header>
      )}
      <div className='test-class'>Dummy text 2</div>

      <StudentList studentList={list} />
      {/* <Header title='New app title 1'></Header>
      <Header title='New app title 2'></Header> */}
      {/* <Card imageUrl={image} title={'Apple IPhone 14'} price={899}></Card> */}
      <AddProduct onAdd={(product) => handleOnAddProduct(product)}></AddProduct>
      <ProductList products={products} onDelete={handleDeleteProduct} />
    </>
  );
}

export default Intro;
