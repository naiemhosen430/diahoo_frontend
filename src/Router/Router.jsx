import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivetRoute";
import Main from "../Layout/Main";
import StopLoginRoute from "./StopLoginRoute";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";
import Profile from "../Pages/Profile/Profile";
import Message from "../Pages/Message/Message";
import Friend from "../Pages/Friend/Friend";
import Setting from "../Pages/Setting/Setting";



const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute> <Main /> </PrivateRoute>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/profile",
        element: <Profile />
      },
      {
        path: "/message",
        element: <Message />
      },
      {
        path: "/friend",
        element: <Friend />
      },
      {
        path: "/setting",
        element: <Setting />
      },
    ]
  },
  {
    path: "/register",
    element: <StopLoginRoute> <Register /> </StopLoginRoute>,
  },
  {
    path: "/login",
    element: <StopLoginRoute> <Login /> </StopLoginRoute>
  }
]);


export default router
