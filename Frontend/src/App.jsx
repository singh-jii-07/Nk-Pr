import React from "react";
import "./App.css";
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Servies from "./Pages/Servies";
import ScrollToTop from './Components/ScrollToTop'
import Footer from "./Components/Footer/Footer";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar/>
        <ScrollToTop/>
        <Home/>
        <Footer/>
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <Navbar/>
        <ScrollToTop/>
       <About/>
       <Footer/>
      </div>
    ),
  },
  {
    path: "/services",
    element: (
      <div>
      <Navbar/>
      <ScrollToTop/>
        <Servies/>
        <Footer/>
      </div>
    ),
  },
  {
    path: "/contact",
    element: (
      <div>
        <Navbar/>
        <ScrollToTop/>
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
