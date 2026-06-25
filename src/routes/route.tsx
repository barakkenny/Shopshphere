import { createBrowserRouter, type RouteObject } from 'react-router-dom';
import App from '../App';
import ProductDetails from '../pages/productDetails/ProductDetails'
import Cart from '@/pages/cart/Cart';

const routes :RouteObject[] = [
  {
    path: "/",
    element: <App />
  },
  {
    path: "/product-details/:id",
    element: <ProductDetails />
  },
  {
    path: "/cart",
    element: <Cart />
  }
]

export const router = createBrowserRouter(routes);