import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Posts from "./Components/Post";
import Users from "./Components/Users";
import Images from "./Components/Images";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/images" element={<Images />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </Router>
    );
  }
}
