import React from "react";
import Navbar from "./Layout/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes/Routes";
import Footer from "./Layout/Footer";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes/>
      <Footer/>
    </Router>
 
  );
}

export default App;
