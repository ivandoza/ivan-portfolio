import React, { useEffect, useState } from "react";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Home/Header";
import Projects from "./components/Projects/Projects";
import axios from "axios";
import { DataContext } from "./DataContext";

function App() {
  const [portfolioData, setPortfolioData] = useState({});

  useEffect(() => {
    const getPortfolioData = async () => {
      try {
        const response = await axios.get("./portfolioData.json");
        setPortfolioData(response.data);
      } catch (error) {
        console.error(error);
        alert("Failed to fetch data");
      }
    };

    getPortfolioData();
  }, []);

  return (
    <DataContext.Provider value={{ portfolioData }}>
      <Header />
      <About />
      <Projects />
      <Footer />
    </DataContext.Provider>
  );
}

export default App;
