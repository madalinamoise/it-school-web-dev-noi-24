import { Link } from 'react-router';

import './NavBar.css';
import { getDate } from './../../utils/date';
import reactLogo from './../../assets/react.svg';

const NavBar = () => {
  const style = {
    color: 'red',
  };

  if (window.location.pathname === '/home') {
    console.log('home');
  }

  return (
    <nav className='custom-navbar' style={style}>
      <ul>
        <li>
          <a href='https://react.dev/' target='_blank'>
            <img src={reactLogo}></img>
          </a>
        </li>
        <li>
          <Link to='/users'>Users</Link>
        </li>
        <li>
          <Link to='/students'>Students</Link>
        </li>
        <li>
          <Link to='/products'>Products</Link>
        </li>
        <li>{getDate()}</li>
      </ul>
    </nav>
  );
};

export default NavBar;
