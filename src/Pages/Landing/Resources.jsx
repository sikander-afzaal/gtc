import "./styles/Resources.css";

const Resources = () => {
  return (
    <div id="resource" className="container mt-top">
      <div className="resource-div">
        <h2 className="title">Resources</h2>
        <div className="resource-links">
          <a href="https://plantbasedlosangeles.org" target={"blank"}>
            https://plantbasedlosangeles.org{" "}
          </a>
          <a href="https://nutritionfacts.org/" target={"blank"}>
            https://nutritionfacts.org/
          </a>
          <a href="https://www.pcrm.org/" target={"blank"}>
            https://www.pcrm.org/
          </a>
          <a href="https://www.ijdrp.org/index.php/ijdrp" target={"blank"}>
            https://www.ijdrp.org/index.php/ijdrp
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resources;
