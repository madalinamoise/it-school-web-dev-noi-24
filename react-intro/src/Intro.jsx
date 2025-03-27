import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import StudentList from './components/StudentList/StudentList';
import './Intro.css';

const Intro = () => {
  return (
    <>
      <NavBar />
      <Header title='New app title'></Header>
      <div className='test-class'>Dummy text</div>
      <StudentList />
      {/* <Header title='New app title 1'></Header>
      <Header title='New app title 2'></Header> */}
    </>
  );
};

export default Intro;
