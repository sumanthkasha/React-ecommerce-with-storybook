import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Page from './components/pages/Page';
import Home from './components/pages/HomePage/HomePage';
import CollectionsPage from './components/pages/CollectionsPage/CollectionsPage';
import ProductDetails from './components/organisms/ProductDetails/ProductDetails';
import Wislist from './components/pages/Wishlist/Wishlist';
import CartPage from './components/pages/CartPage/CartPage';
import { Error } from './stories/pages/Error/Error';

import './App.css';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Page />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/collections/:productId",
          element: <CollectionsPage />
        },
        {
          path: "/productDetails/:productType/:productId",
          element: <ProductDetails />
        },
        {
          path: "/wishlist",
          element: <Wislist />
        },
        {
          path: "/cart",
          element: <CartPage />
        },
      ]

    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
