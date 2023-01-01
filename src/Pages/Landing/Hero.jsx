import "./styles/Hero.css";

const Hero = () => {
  return (
    <div id="past" className="container">
      <div className="hero-div">
        <div className="left-hero">
          <h2 className="title">Our Past</h2>
          <p>
            Our initial journey started about 12 years ago when we formed the
            Indo American Telemedicine Corporation. We tried to influence
            screening of non communicable diseases through several models. We
            were able to make a significant impact through health cube and our
            own model of screening populations in rural and urban areas. After
            this, we started global teleclinics (GTC) as a separate entity to
            focus on the prevention and management of noncommunicable diseases.
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
