import About from "./components/About/About";
import Header from "./components/Home/Header";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <>
      <Home>
        <Header />
        <About />
        <Projects />   
      </Home>
    </>
  );
}

export default App;
