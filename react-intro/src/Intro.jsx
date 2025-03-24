import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import reactLogo from './assets/react.svg';
import './Intro.css';

const Intro = () => {
  return (
    <>
      <div className='test-class'>Dummy text</div>
      <NavBar />
      <Header title='New app title' logo={reactLogo}></Header>
      {/* <Header title='New app title 1'></Header>
      <Header title='New app title 2'></Header> */}
    </>
  );
};

export default Intro;
