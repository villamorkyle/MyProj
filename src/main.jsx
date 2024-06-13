import React from 'react'
import { createRoot } from "react-dom/client";
import App from './App.jsx'
import SignupForm from './GuideForm.jsx';
import './index.css'

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    {/* <SignupForm /> */}
    <App />
  </React.StrictMode>
);
