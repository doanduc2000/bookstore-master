import Landing from '../pages/landing';
import Info from '../pages/info';
import Product from '../pages/product';
import DetailProduct from '../pages/detailProduct';
import Checkout from '../pages/checkout';
import Cart from '../pages/cart';
import Login from '../pages/auth/login';
import Register from '../pages/auth/register';
import AdminProduct from '../pages/adminProduct';
import Dashboard from '../pages/dashboard';
import homeIcon from '../assets/icons/home.svg';
import bookIcon from '../assets/icons/book.svg';

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
  {
    name: 'Thanh toán',
    path: '/checkout',
    exact: false,
    component: <Checkout />,
  },
  {
    name: 'Giỏ hàng',
    path: '/cart',
    exact: false,
    component: <Cart />,
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
export const adminRoute = [
  {
    name: 'Trang chủ',
    layout: '/admin',
    path: '/dashboard',
    exact: true,
    icon: homeIcon,
    component: <Dashboard />,
  },
  {
    name: 'Sản phẩm',
    layout: '/admin',
    path: '/product',
    exact: true,
    icon: bookIcon,
    component: <AdminProduct />,
  },
];
