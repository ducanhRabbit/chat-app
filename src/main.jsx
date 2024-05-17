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

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashBoard />,
    children:[{
      index:true,
      element:<Chats/>
    }]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <CssVarsProvider theme={theme}>
      <CssBaseline></CssBaseline>
      <RouterProvider router={router} />
    </CssVarsProvider>
);