import React from "react";
import "./assets/style/style.css";
import Home from "./components/home/Home";
import NavBar from "./components/navbar/NavBar";
import Promo from "./components/promo/Promo";
import About from "./components/about/About";
import Services from "./components/nos-services/Services";
import WhyUs from "./components/whyUs/WhyUs";
import Packs from "./components/packs/Packs";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Promo />
      <About />
      <Services />
      <WhyUs />
      <Packs />
      <Footer />
    </div>
  );
}

export default App;
