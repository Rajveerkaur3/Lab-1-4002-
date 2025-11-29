import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Body from "./components/Body";
import Organization from "./components/organization"; 
import Footer from "./components/Footer";
import "./App.css";

import { SignedIn, SignedOut, SignIn } from "@clerk/clerk-react";

const App: React.FC = () => (
  <Router>
    <div>
      {/* Navigation always visible */}
      <Nav />

      <Routes>
        {/* Sign-in route for guests */}
        <Route path="/sign-in/*" element={
          <SignedOut>
            <div style={{ padding: "50px", textAlign: "center" }}>
              <SignIn routing="path" path="/sign-in" />
            </div>
          </SignedOut>
        } />

        {/* Protect the main app content */}
        <Route path="/employees" element={
          <SignedIn>
            <Header />
            <Body />
            <Footer />
          </SignedIn>
        } />
        <Route path="/organization" element={
          <SignedIn>
            <Header />
            <Organization />
            <Footer />
          </SignedIn>
        } />

        {/* Redirect guest users accessing "/" */}
        <Route path="/" element={
          <SignedIn>
            <Navigate to="/employees" replace />
          </SignedIn>
        } />

        {/* Redirect unknown paths */}
        <Route path="*" element={
          <SignedOut>
            <Navigate to="/sign-in" replace />
          </SignedOut>
        } />
      </Routes>
    </div>
  </Router>
);

export default App;
