import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import './index.css'
import App from './App.tsx'
import { router } from "./routes/route.tsx";
import {store} from './store/store.ts';
import { Provider } from "react-redux";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
    {/* <App /> */}
  </StrictMode>,
)
