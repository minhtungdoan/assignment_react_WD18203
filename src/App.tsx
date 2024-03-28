import './App.css'
import Page from './components'
import { Routes, Route, createBrowserRouter } from "react-router-dom"
import HomePage from './components/pages/HomePage/HomePage';
import PopularPage from './components/pages/PopularPage/PopularPage';
import ErrorPage from './components/pages/ErrorPage/ErrorPage';
import ProductDetailPage from './components/pages/ProductDetailPage/ProductDetailPage';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Page />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "popular",
        element: <PopularPage />,
      },
      {
        path: "product-detail",
        element: <ProductDetailPage />,
      }
    ],
  },
]);

function App() {
  return (
    <>
      
    </>
  );
}

export default App;
