import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Page from './components/pages/Page';
import Home from './components/pages/HomePage/HomePage';
import CollectionsPage from './components/pages/CollectionsPage/CollectionsPage';
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
        }
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
