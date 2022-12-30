import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Nano from "./Nano";
import Resources from "./Resources";
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
      <Resources />
      <Contact />
    </div>
  );
};

export default Landing;
