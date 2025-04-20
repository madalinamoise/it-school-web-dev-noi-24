import { TfiShoppingCart } from "react-icons/tfi";
import { Link } from "react-router";

import reactLogo from "./../../assets/react.svg";
import "./NavBar.css";
import { useCart } from "../../store/cart/CartContext";

const NavBar = () => {
  const { cart } = useCart();
  console.log(cart);
  const style = {
    color: "red",
  };

  if (window.location.pathname === "/home") {
    console.log("home");
  }

  return (
    <nav className="custom-navbar" style={style}>
      <ul>
        <li>
          <a href="https://react.dev/" target="_blank">
            <img src={reactLogo}></img>
          </a>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/students">Students</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/cart">
            <TfiShoppingCart />({cart.length})
          </Link>
          {/* {getDate()} */}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
