import { useNavigate } from "react-router-dom";
import { DataContext } from "../data/DataContext";
import Modal from "../components/ContactModal/Modal";
import usePortfolioData from "../data/usePortfolioData";

function ModalPage() {
  const portfolioData = usePortfolioData();
  const navigate = useNavigate();
  return (
    <DataContext.Provider value={{ portfolioData }}>
      <Modal onClose={() => navigate("/")}/>
    </DataContext.Provider>
  );
}

export default ModalPage;
