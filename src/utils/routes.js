import Landing from '../pages/landing';
import Info from '../pages/info';
import Product from '../pages/product';
import DetailProduct from '../pages/detailProduct';
import Login from '../pages/auth/login';
import Register from '../pages/auth/register';
export const landingRoute = [
  {
    name: 'Trang chủ',
    path: '/home',
    exact: true,
    component: <Landing />,
  },
  {
    name: 'Giới thiệu',
    path: '/info',
    exact: true,
    component: <Info />,
  },
  {
    name: 'Sản phẩm',
    path: '/product',
    exact: true,
    component: <Product />,
  },
  {
    name: 'Chi tiết sản phẩm',
    path: '/product/:id',
    exact: false,
    component: <DetailProduct />,
  },
];
export const authRoute = [
  {
    name: 'Đăng nhập',
    layout: '/auth',
    path: '/login',
    exact: true,
    component: <Login />,
  },
  {
    name: 'Đăng ký',
    layout: '/auth',
    path: '/register',
    exact: true,
    component: <Register />,
  },
];
