import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Bag from "./router/Bag.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import App from './router/App.jsx'
import Home from './router/Home.jsx';
import { Provider } from 'react-redux';
import Store from './store/index.js';
import HeroPage from './router/HeroPage.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
    {
      path: "/",
      element: <HeroPage />,
    },
      {
        path: "/home",
        element: < Home />,
      },
      { path: "/bag", element: <Bag /> },
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store}>
  <RouterProvider router={router}></RouterProvider></Provider>
  </StrictMode>,
)
