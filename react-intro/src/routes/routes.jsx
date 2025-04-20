import { createBrowserRouter } from "react-router";

import Layout from "../layouts/Layout";
import Cart from "../views/Cart/Cart";
import Product from "../views/Product/Product";
import Products from "../views/Products/Products";
import Students from "../views/Students/Students";
import Users from "../views/Users/Users";

let router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      { path: "/", Component: Users },
      { path: "/users", Component: Users },
      { path: "/products", Component: Products },
      { path: "/product/:id", Component: Product },
      { path: "/students", Component: Students },
      { path: "/cart", Component: Cart },
    ],
  },
]);

export default router;
