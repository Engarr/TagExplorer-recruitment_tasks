import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './pages/Root';
import HomePage from './pages/HomePage';
import Explore from './pages/Explore';
import ErrorPage from './pages/ErrorPage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      id: 'root',

      children: [
        { path: '', element: <HomePage /> },
        { path: '/eksploruj', element: <Explore /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
