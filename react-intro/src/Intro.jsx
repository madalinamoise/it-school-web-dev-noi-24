import Header from './components/common/Header/Header';
import NavBar from './components/common/NavBar/NavBar';
import StudentList from './components/StudentList/StudentList';
import ProductList from './components/ProductList/ProductList';
import image from './assets/phone.svg';
import './Intro.css';

const Intro = () => {
  const products = [
    {
      id: '1',
      imageUrl: image,
      name: 'Apple IPhone 14',
      price: 899,
    },
    {
      id: '222',
      imageUrl: image,
      name: 'Apple IPhone 14',
      price: 899,
    },
    {
      id: '43243',
      imageUrl: image,
      name: 'Apple IPhone 14',
      price: 899,
    },
    {
      id: '7536',
      imageUrl: image,
      name: 'Apple IPhone 14',
      price: 899,
    },
    {
      id: '123',
      imageUrl: image,
      name: 'Apple IPhone 14',
      price: 899,
    },
    {
      id: 'xcvcxdf',
      imageUrl: image,
      name: 'Apple IPhone 14',
      price: 899,
    },
  ];

  return (
    <>
      <NavBar />
      <Header title='New app title'></Header>
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
