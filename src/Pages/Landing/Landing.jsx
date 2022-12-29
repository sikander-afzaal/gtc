import About from "./About";
import Hero from "./Hero";
import Nano from "./Nano";
import Roadmap from "./Roadmap";
import Services from "./Services";

const Landing = () => {
  return (
    <div className="container landing">
      <Hero />
      <About />
      <Services />
      <Roadmap />
      <Nano />
    </div>
  );
};

export default Landing;
