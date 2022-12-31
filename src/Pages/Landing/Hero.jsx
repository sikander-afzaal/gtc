import "./styles/Hero.css";

const Hero = () => {
  return (
    <div id="past" className="container">
      <div className="hero-div">
        <div className="left-hero">
          <h2 className="title">Our Past</h2>
          <p>
            Our initial journey started about 12 years ago when we formed the
            Indo American Telemedicine Corporation. We tried to impact screening
            of no communicable dieses through several models and created
            significant impact with screening through health cube and with our
            own model of screening population in rural and urban areas. And
            finally, we started global teleclinics (GTC) as a separate entity to
            focus on noncommunicable diseases prevention and management.{" "}
          </p>
          <a href="/pdf1.pdf" target={"blank"}>
            Learn More
          </a>
        </div>
        <img src="/hero.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
