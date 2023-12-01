import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
// import { LayoutProvider } from "./layout/context/layoutcontext";
import Dashboard from "./pages/Dashboard";
import "./index.css"
import Test from "./pages/Test";
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { PrimeReactProvider } from 'primereact/api';
import './styles/layout/layout.scss';
import './styles/demo/Demos.scss';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard/>
  },
  {
    path: "/test",
    element: <Test/>
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

createRoot(document.getElementById("root")).render(
    <html lang="en" suppressHydrationWarning>
    <head>
      <link
          id="theme-css"
          href={`./themes/lara-light-teal/theme.css`}
          rel="stylesheet"
      ></link>
    </head>
    <body>
    <PrimeReactProvider>
      <RouterProvider router={router} />
    </PrimeReactProvider>
    </body>
    </html>

);