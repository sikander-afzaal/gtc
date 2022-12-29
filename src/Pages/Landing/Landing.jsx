import About from "./About";
import Hero from "./Hero";
import Roadmap from "./Roadmap";
import Services from "./Services";

const Landing = () => {
  return (
    <div className="container landing">
      <Hero />
      <About />
      <Services />
      <Roadmap />
    </div>
  );
};

export default Landing;
