import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage"; // Your main component
import LoginPage from "./LoginPage"; // Your login page component
import SignupForm from "./SignupForm";
import HomePage from "./HomePage";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/myshop" element={<HomePage />} />
    </Routes>
  </Router>
);

export default App;
