import React from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import './App.css';


const App: React.FC = () => (
  <div>
    <Nav />
    <Header />
    <Body />
    <Footer />
  </div>
);

export default App;
