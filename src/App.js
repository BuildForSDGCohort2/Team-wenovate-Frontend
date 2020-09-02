import React from "react";
import Navbar from "./Layout/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes/Routes";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes/>
    </Router>
 
  );
}

export default App;
