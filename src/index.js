import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Spage from './Pages/Spage'
import Tpage from "./Pages/Tpage"
import WeatherCard from "./WeatherCard/WeatherCard"
import Layout from './Components/layout';


import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/Spage",
      element: <Layout><Spage /></Layout>,
    },
    {
      path: "/Tpage",
      element: <Layout><Tpage /></Layout>,
    },
    
    
  ]);


ReactDOM.render(<RouterProvider router={router} />, document.getElementById("root"));


