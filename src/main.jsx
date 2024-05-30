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

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashBoard />,
    children:[{
      index:true,
      element:<GenerallApp/>
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