import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Body from "./components/Body";
import Organization from "./components/organization"; 
import Footer from "./components/Footer";
import "./App.css";

const App: React.FC = () => (
  <Router>
    <div>
      <Nav />
      <Header />

      
      <Routes>
      <Route path="/" element={<Navigate to="/employees" replace />} />
        <Route path="/employees" element={<Body />} />
        <Route path="/organization" element={<Organization />} />
      </Routes>

      <Footer />
    </div>
  </Router>
);

export default App;
