import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Servies from "./Pages/Servies";
import Media from "./Pages/Media";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home/>
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <Navbar />
       <About/>
      </div>
    ),
  },
  {
    path: "/services",
    element: (
      <div>
        <Navbar />
        <Servies/>
      </div>
    ),
  },
  {
    path: "/contact",
    element: (
      <div>
        <Navbar />
        <Contact/>
      </div>
    ),
  },
  {
    path: "/media",
    element: (
      <div>
        <Navbar />
      L<Media/>
      </div>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
