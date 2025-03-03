import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductShowcase from "./components/ProductShowcase";
import Features from "./components/Features";
import Reviews from "./components/Reviews";
import SalesInsights from "./components/SalesInsights";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ProductShowcase />
      <Features />
      <Reviews />
      <SalesInsights />
      <Footer />
    </div>
  );
}

export default App;
