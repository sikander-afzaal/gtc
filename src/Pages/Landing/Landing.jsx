import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Nano from "./Nano";
import Resources from "./Resources";
import Roadmap from "./Roadmap";
import Services from "./Services";
import Tech from "./Tech";

const Landing = () => {
  return (
    <div className="container landing">
      <Hero />
      <About />
      <Services />
      <Nano />
      <Roadmap />
      <Tech />
      <Resources />
      <Contact />
    </div>
  );
};

export default Landing;
