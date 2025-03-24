import './NavBar.css';
import { getDate } from '../../utils/date';

const NavBar = () => {
  const style = {
    color: 'red',
  };

  return (
    <nav className='navbar' style={style}>
      <ul>
        <li>
          <a href=''>Home</a>
        </li>
        <li>
          <a href=''>About</a>
        </li>
        <li>
          <a href=''>Contact</a>
        </li>
        <li>{getDate()}</li>
      </ul>
    </nav>
  );
};

export default NavBar;
