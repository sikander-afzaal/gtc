import "./styles/Nano.css";

const Nano = () => {
  return (
    <div className="container mt-top">
      <div className="nano-div">
        <h2 className="title">
          GTC DIPAM PLATFORM: POWERED BY <br /> NANO HEALTH, HYDERABAD, INDIA
        </h2>
        <h5>
          Comprehensive and integrated Digital Disease Management Platform that
          enables delivery of pro-a ctive, coordinated& continuous care to
          patients screened to enhance their health, reduce hospitalization
          rates and lower healthcare costs-Realising the Vision of DIPAM
        </h5>
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
        <div className="nano-row">
          <div className="left-nano">
            <img src="/proactive.svg" alt="" />
            <h4>Proactive</h4>
          </div>
          <div className="right-nano">
            <p>Population based risk-profiling and follow up</p>
          </div>
        </div>
        <div className="nano-row">
          <div className="left-nano">
            <img src="/team.png" alt="" />
            <h4>Coordinated</h4>
          </div>
          <div className="right-nano">
            <p>
              Multiple stakeholders work in tandem with 360° view of the patient
            </p>
          </div>
        </div>
        <div className="nano-row">
          <div className="left-nano">
            <img src="/continous.png" alt="" />
            <h4>Proactive</h4>
          </div>
          <div className="right-nano">
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
