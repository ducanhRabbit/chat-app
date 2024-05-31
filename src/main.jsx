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

const router = createBrowserRouter([
  {
    path:'/auth',
    element: <></>,
    children:[{
      path:'/login',
      element:<Login></Login>
    }]
  },
  {
    path: "/",
    element: <DashBoard />,
    children:[{
      index:true,
      element:<GenerallApp/>
    },{
      path:'/settings',
      element:<Setting/>
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