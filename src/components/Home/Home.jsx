import Background from "../Background/Background";

function Home({ children }) {
  return (
    <section id="home" className="home">
      <Background />
      {children}
    </section>
  );
}

export default Home;
