import { createBrowserRouter, type RouteObject } from 'react-router-dom';
import App from '../App';
import ProductDetails from '../pages/productDetails/ProductDetails'

const routes :RouteObject[] = [
  {
    path: "/",
    element: <App />
  },
  {
    path: "/product-details",
    element: <ProductDetails />
  }
]

export const router = createBrowserRouter(routes);