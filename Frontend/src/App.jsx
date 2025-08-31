import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Servies from "./Pages/Servies";
import Media from "./Pages/Media";
import Footer from "./Components/Footer/Footer";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home/>
        <Footer/>
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <Navbar />
       <About/>
       <Footer/>
      </div>
    ),
  },
  {
    path: "/services",
    element: (
      <div>
        <Navbar />
        <Servies/>
        <Footer/>
      </div>
    ),
  },
  {
    path: "/contact",
    element: (
      <div>
        <Navbar />
        <Contact/>
        <Footer/>
      </div>
    ),
  }

]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
