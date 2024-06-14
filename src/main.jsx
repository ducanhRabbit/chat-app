import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import DashBoard from "./pages/dashBoard/DashBoard";
import { CssBaseline, Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material";
import theme from "./theme/theme";
import SettingsProvider from "./contexts/settingsContext";

import Chats from "./pages/dashBoard/Chats";
import GenerallApp from "./pages/dashBoard/GenerallApp";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/store";
import Setting from "./pages/dashBoard/Setting";
import Login from "./pages/auth/Login";
import MainLayout from "./layouts/main/MainLayout";
import Register from "./pages/auth/Register";
import ResetPasswordForm from "./sections/auth/ResetPasswordForm";
import ResetPassword from "./pages/auth/ResetPassword";
import NewPassord from "./pages/auth/NewPassord";
import GroupChat from "./pages/dashBoard/GroupChat";
import Call from "./pages/dashBoard/Call";

const router = createBrowserRouter([
  {
    path:'/auth',
    element: <MainLayout></MainLayout>,
    children:[{
      path:'login',
      element:<Login></Login>
    },{
      path:'register',
      element:<Register></Register>
    },{
      path:'reset-password',
      element:<ResetPassword></ResetPassword>
    },{
      path:'new-password',
      element:<NewPassord></NewPassord>
    }]
  },
  {
    path: "/",
    element: <DashBoard />,
    children:[{
      index:true,
      element:<GenerallApp/>
    },{
      path:'settings',
      element:<Setting/>
    },{
      path:'group',
      element:<GroupChat/>
    },{
      path:'call',
      element:<Call/>
    }]
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ReduxProvider store={store}>
    <CssVarsProvider theme={theme}>
      <CssBaseline></CssBaseline>
      <RouterProvider router={router} />
    </CssVarsProvider>
  </ReduxProvider>
);