import React from "react";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Middle from "./components/Middle/Middle";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Middle />
      <Footer />
    </div>
  );
}
