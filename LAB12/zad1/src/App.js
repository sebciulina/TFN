import './App.css';
import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Contact,
  ContactUs,
  ContactPl,
  ContactDe,
  Whoops404,
  Services
} from "./pages";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />}>
          <Route
            path="us"
            element={<ContactUs />}
          />
          <Route
            path="pl"
            element={<ContactPl />}
          />
          <Route
            path="de"
            element={<ContactDe />}
          />
        </Route>
        <Route path="*" element={<Whoops404 />} />
      </Routes>
    </div>
  );
}

export default App;