import "./styles/Resources.css";

const Resources = () => {
  return (
    <div id="resource" className="container mt-top">
      <div className="resource-div">
        <h2 className="title">Resources</h2>
        <div className="resource-links">
          <a href="https://plantbasedlosangeles.org" target={"blank"}>
            <img src="/plant.jpg" alt="" />
          </a>
          <a href="https://nutritionfacts.org/" target={"blank"}>
            <img src="/nutrition.svg" alt="" />
          </a>
          <a href="https://www.pcrm.org/" target={"blank"}>
            <img src="/physicians.svg" alt="" />
          </a>
          <a
            className="bg-green"
            href="https://www.ijdrp.org/index.php/ijdrp"
            target={"blank"}
          >
            <img src="/ijdrp.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resources;
