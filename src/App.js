import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/home";
import About from "./Components/about";
import Ticket from "./Components/ticket";
import geest from "./images/ghost.png";

import "./App.css";
import "./NavBar.css";
class App extends Component {
  render() {
    return (
      <Router>
        <img src={geest} className="geest" alt="" />
        <div className="App">
          <div className="topnav">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/ticket">Tickets</Link>
            <Link to="/">Contact</Link>
          </div>

          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/ticket" element={<Ticket />}></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}
export default App;
