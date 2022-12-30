import "./styles/Tech.css";

const Tech = () => {
  return (
    <div className="container mt-top">
      <div className="tech-div">
        <h2 className="title">Technology For Comprehensive Health</h2>
        <div className="tech-grid">
          <div className="tech-col">
            <div className="tech-row">
              <h3>Screening</h3>
              <img src="/search.png" alt="" />
              <h4>What</h4>
              <ul>
                <li>Universal Rist Profiling</li>
                <li>Digital Health Records</li>
                <li>Early Symptom Identification</li>
              </ul>
            </div>
            <div className="tech-row">
              <h4>How</h4>
              <ul>
                <li>Digital Forms</li>
              </ul>
            </div>
            <div className="tech-row">
              <h4>Who</h4>
              <ul>
                <li>Patient (User App)</li>
                <li>CHW (CHW App)</li>
              </ul>
            </div>
            <div className="tech-row">
              <h4>Impact</h4>
              <ul>
                <li>Risk Profile of entire population in line with IDSP </li>
                <li>
                  Helps in disease burden identification and allocation of
                  resources
                </li>
              </ul>
            </div>
          </div>
          <div className="tech-col">
            <div className="tech-row">
              <h3>
                Preventive <br /> Diagnostic Tests
              </h3>
              <img src="/chemical.png" alt="" />
              <h4>What</h4>
              <ul>
                <li>Relevant diagnostics with those with identified needs</li>
                <li>As per the government guidelines/care pathways</li>
              </ul>
            </div>
            <div className="tech-row">
              <h4>How</h4>
              <ul>
                <li>Diagnostic Labs</li>
                <li>Radiology centers</li>
              </ul>
            </div>
            <div className="tech-row">
              <h4>Who</h4>
              <ul>
                <li>Diagnostic Labs</li>
              </ul>
            </div>
            <div className="tech-row">
              <h4>Impact</h4>
              <ul>
                <li>Right tests done at right time</li>
                <li>Repetition of tests are avoided</li>
                <li>Disease identified in time</li>
              </ul>
            </div>
          </div>
          <div className="tech-col">
            <div className="tech-row">
              <h3>Diagnosis</h3>
              <img src="/support.png" alt="" />
              <h4>What</h4>
              <ul>
                <li>
                  General Practitioner (MBBS) can handle most of the cases
                </li>
                <li>Complex cases are referred to specialists</li>
              </ul>
            </div>
            <div className="tech-row">
              <h4>How</h4>
              <ul>
                <li>PHC/UPHC</li>
                <li>Tele-consultation</li>
              </ul>
            </div>
            <div className="tech-row">
              <h4>Who</h4>
              <ul>
                <li>Doctor</li>
              </ul>
            </div>
            <div className="tech-row">
              <h4>Impact</h4>
              <ul>
                <li>Timely diagnosis and initiation of treatment</li>
                <li>Teleconsultation is convenient to patients and doctors</li>
              </ul>
            </div>
          </div>
          <div className="tech-col">
            <div className="tech-row">
              <h3>
                Disease <br /> Management/Reversal
              </h3>
              <img src="/help.jpg" alt="" />
              <h4>What</h4>
              <ul>
                <li>
                  After disease confirmation, periodic monitoring is required.
                </li>
                <li>
                  Right care is provided at the right time at right location to
                  the patients proactively
                </li>
              </ul>
            </div>
            <div className="tech-row">
              <h4>How</h4>
              <ul>
                <li>Timely follow-up across multiple stakeholder</li>
              </ul>
            </div>
            <div className="tech-row">
              <h4>Who</h4>
              <ul>
                <li>Patient, Health coach</li>
                <li>Doctors, specialists, Labs</li>
              </ul>
            </div>
            <div className="tech-row">
              <h4>Impact</h4>
              <ul>
                <li>
                  Timely management of diseases reduces emergencies and
                  hospitalization
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
