import { createBrowserRouter, Outlet } from 'react-router';

import Product from '../views/Product/Product';
import Products from '../views/Products/Products';
import Students from '../views/Students/Students';
import Users from '../views/Users/Users';
import Layout from '../layouts/Layout';

let router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      { path: '/', Component: Users },
      { path: '/users', Component: Users },
      { path: '/products', Component: Products },
      { path: '/product/:id', Component: Product },
      { path: '/students', Component: Students },
    ],
  },
]);

export default router;
