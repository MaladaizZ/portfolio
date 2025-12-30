import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Acceuil from "./pages/Acceuil";
import Mention from "./pages/Mention";
import { Routes, Route } from "react-router-dom";
import Service from "./pages/Service";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />

        <Routes>
          <Route path="/" element={<Acceuil />}></Route>
          <Route path="/service" element={<Service />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/mention" element={<Mention />}></Route>
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;
