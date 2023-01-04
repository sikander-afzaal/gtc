import "./styles/Nano.css";

const Nano = () => {
  return (
    <div id="platform" className="container mt-top">
      <div className="nano-div">
        <h2 className="title">GTC DIPAM PLATFORM</h2>
        <h3 className="sub">POWERED BY NANO HEALTH, HYDERABAD, INDIA</h3>
        <h5>
          Comprehensive and integrated Digital Disease Management Platform that
          enables delivery of pro-a ctive, coordinated& continuous care to
          patients screened to enhance their health, reduce hospitalization
          rates and lower healthcare costs-Realising the Vision of DIPAM
        </h5>
        <h3>Download Our Mobile App</h3>
        <div className="store-div">
          <a
            href="https://play.google.com/store/apps/details?id=com.dipam.gtc.user"
            target={"blank"}
          >
            <img src="/playstore.png" alt="" />
          </a>
          <a
            href="https://apps.apple.com/pk/app/dipam-gtc/id6444764907"
            target={"blank"}
          >
            <img src="/app-store.png" alt="" />
          </a>
        </div>
        <h3>Integrated and Comprehensive healthcare for our society</h3>
        <p>Better Health. Lower Hospitalization. Reduced Mortality.</p>
        <div className="objectives">
          <div className="objective">
            <img src="/proactive.svg" alt="" />
            <h3>Proactive:</h3>
            <p>Population based risk-profiling and follow up</p>
          </div>
          <div className="objective">
            <img src="/team.png" alt="" />
            <h3>Coordinated:</h3>
            <p>
              Multiple stakeholders work in tandem with 360° view of the patient
            </p>
          </div>
          <div className="objective">
            <img src="/continous.png" alt="" />
            <h3>Continous</h3>
            <p>
              Transition from reactive symptomatic care to proactive health care
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nano;
