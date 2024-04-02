import Background from "../Background/Background";

function Home({ children }) {
  return (
    <section className="Home">
      <Background />
      {children}
    </section>
  );
}

export default Home;
