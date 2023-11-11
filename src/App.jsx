import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MenuSection from "./components/Menu/MenuSection";
import Navbar from "./components/Navbar/Navbar";
import Home, { loader as menuLoader } from "./pages/Home";
import Cart from "./pages/Cart";
import Favorite, { loader as favoriteLoader } from "./pages/Favorite";
import Details from "./pages/Details";
import Order from "./pages/Order";
import CheckOut, { loader as orderLoader } from "./pages/CheckOut";
import AppLayout from "./pages/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: menuLoader,
      },
      {
        path: "/card",
        element: <Cart />,
      },
      { path: "/favorite", element: <Favorite />, loader: favoriteLoader },
      { path: "/details", element: <Details /> },
      { path: "/order", element: <Order /> },
      {
        path: "/received/:orderId",
        element: <CheckOut />,
        loader: orderLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
