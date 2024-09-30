import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Parallex from "./components/parallex/Parallex";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
const App = () => {
  return (
    <>
      <Cursor />
      <section id="Home">
        <Navbar />
        <Home />
      </section>

      <section id="Services">
        <Parallex type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallex type="portfolio " />
      </section>
      <section style={{ height: "100%" }}>
        <Portfolio />
      </section>
      <section id="Contact">
        <Contact />
      </section>
    </>
  );
};

export default App;
