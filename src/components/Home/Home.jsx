import BackgroundAnimation from "./Background/BackgroundAnimation";

function Home({ children }) {
  return (
    <section className="Home">
      <BackgroundAnimation />
      {children}
    </section>
  );
}

export default Home;
