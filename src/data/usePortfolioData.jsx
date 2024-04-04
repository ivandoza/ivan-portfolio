import { useState, useEffect } from "react";
import axios from "axios";

const usePortfolioData = () => {
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

  return portfolioData;
};

export default usePortfolioData;
