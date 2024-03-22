import About from "./components/About/About";
import Header from "./components/Home/Header";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <Home>
        <Header />
        <About />
      </Home>
    </>
  );
}

export default App;
