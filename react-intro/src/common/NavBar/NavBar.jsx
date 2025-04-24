import { TfiShoppingCart } from "react-icons/tfi";
import { Link } from "react-router";

import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { useCart } from "../../store/cart/CartContext";
import reactLogo from "./../../assets/react.svg";
import "./NavBar.css";

const NavBar = () => {
  const width = useWindowWidth();
  let navigate = useNavigate();
  const { getTotalCartQuantity } = useCart();
  const style = {
    color: "red",
  };

  return (
    <nav className="custom-navbar" style={style}>
      {width < 640 ? (
        <div className="mobile-container">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Menu
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => navigate("/users")}>
                Users
              </Dropdown.Item>
              <Dropdown.Item onClick={() => navigate("/students")}>
                Students
              </Dropdown.Item>
              <Dropdown.Item onClick={() => navigate("/products")}>
                Products
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Link to="/cart">
            <TfiShoppingCart />({getTotalCartQuantity()})
          </Link>
        </div>
      ) : (
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
              <TfiShoppingCart />({getTotalCartQuantity()})
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
