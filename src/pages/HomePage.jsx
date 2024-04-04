import React from "react";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Header from "../components/Home/Header";
import Projects from "../components/Projects/Projects";
import { DataContext } from "../data/DataContext";
import usePortfolioData from "../data/usePortfolioData";

function HomePage() {
  const portfolioData = usePortfolioData();

  return (
    <DataContext.Provider value={{ portfolioData }}>
      <Header />
      <About />
      <Projects />
      <Footer />
    </DataContext.Provider>
  );
}

export default HomePage;
