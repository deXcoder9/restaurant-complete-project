import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/pages/home/home/Home";
import Menu from "../components/pages/menu/menu/Menu";
import Order from "../components/pages/order/order/Order";
// import Login from "../components/pages/login/Login";
// import Signup from "../components/pages/sign up/Signup";
import Dashboard from "../layout/Dashboard";
import Cart from "../components/pages/user dashboard/cart/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/order/:category",
        element: <Order></Order>,
      },
    ],
  },
  // {
  //   path: "/login",
  //   element: <Login></Login>,
  // },
  // {
  //   path: "/signup",
  //   element: <Signup></Signup>,
  // },
  {
    path:"/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path:"cart",
        element:<Cart></Cart>
      }
    ],
  }
]);
