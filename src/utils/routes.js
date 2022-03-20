import Landing from '../pages/landing';
import Info from '../pages/info';
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
    component: 'Product',
  },
];
