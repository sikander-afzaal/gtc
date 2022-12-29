import About from "./About";
import Hero from "./Hero";
import Services from "./Services";

const Landing = () => {
  return (
    <div className="container landing">
      <Hero />
      <About />
      <Services />
    </div>
  );
};

export default Landing;
