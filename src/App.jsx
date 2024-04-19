import Test from "./Test";
import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import herobg from '/herobg24.png'

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Homepage"style={{width:"100vw",height:"100vh",background:`url(${herobg})`,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"}}>
        <Navbar />
        <Hero />
      </section>
      {/* <section id="Services">
        <Parallax type="services" />
      </section> */}
    <section id="Portfolio">
      </section>
      <Portfolio />
      <section id="Services">
        <Services />
      </section>
      
      <section id="Contact">
        <Contact />
      </section>
      {/* Framer Motion Crash Course */}
      {/* <Test/>
    <Test/> */}
    </div>
  );
};

export default App;
