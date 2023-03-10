import "./styles/Services.css";

const Services = () => {
  return (
    <div className="container mt-top">
      <div className="service-div">
        <h2 className="title">Our Servies</h2>
        <div id="dipam" className="service-col">
          <h3>DISEASE REVERSAL PROGRAM</h3>
          <h4>
            DIGITAL INTEGRATED PREVENTION AND MANAGEMENT PROGRAM (DIPAM): <br />{" "}
            BRING LIGHT THROUGH HEALING HANDS{" "}
          </h4>
          <div className="objectives">
            <div className="objective">
              <img src="/mission.jpg" alt="" />
              <h3>Mission:</h3>
              <p>
                To bring Non-Communicable Diseases (NCDs) screening and
                prevention to rural and urban people at their door steps
              </p>
            </div>
            <div className="objective">
              {" "}
              <img src="/vision.png" alt="" />
              <h3>Vision:</h3>
              <p>
                Raise awareness of disease management and reversal of
                Non-Communicable Diseases to Improve health outcomes and connect
                rural and urban areas with medical providers and partners.
              </p>
            </div>
          </div>
          <p className="sub-head">
            <strong>
              {" "}
              GTC DIPAM disease management and reversal program uses a very
              comprehensive personalized approach that is individually tailored
              and can be applied to any chronic disease. The five-step protocol
              we follow is:{" "}
            </strong>
          </p>
          <ol>
            <li>
              Get a detailed medical history of habits and exposure from patient{" "}
            </li>
            <li>
              Evaluate the patient using qualitative and quantitative
              performance and behavioral test to assess the severity of symptoms
              and performance measures{" "}
            </li>
            <li>Do labs and radiology based on history and physical exam </li>
            <li>
              Identify and eliminate the contributing factors by dwelling into
              the root cause of the disease{" "}
            </li>
            <li>
              Implement disease management and disease reversal programs and
              protocols for the chronic disease that is being addressed{" "}
            </li>
          </ol>
          <div className="btn-div">
            <a
              href="https://gtcdiseasereversal.com/login/index.php"
              target={"blank"}
            >
              Login into GTC Disease Reversal Program
            </a>{" "}
            <a href="#" target={"blank"}>
              Learn More
            </a>{" "}
          </div>
        </div>
        <div id="aapi" className="service-col">
          <h3>AAPI ADOPT A VILLAGE </h3>

          <p>
            The pilot project was initiated in August 2021 by DR ANUPAMA
            GOTIMUKULA, MD AAPI PRESIDENT (2021-2022). By the end of December
            2023, we will complete 75 villages across India. This program is
            supported by the current chair for Adopt a Village Dr. Satish
            Kathula (Vice President, AAPI). The project is fully endorsed and
            supported by current president, Dr. RAVI KOLLI.{" "}
          </p>
          <p>
            The numbers are alarming with high levels of Kidney Disease,
            Diabetes, Cardiovascular Disease, Anemia, High Blood pressure and
            Cholesterol and pre-disease states found in the rural population
            (All age groups & Gender). We will continue to screen villages
            across India, and create a road map to provide 'continuous health
            care' with the help of AAPI sponsors, service partners and social
            entrepreneurs. Our goal is to bring the importance of Preventive
            healthcare screening to diagnose and prevent diseases early and, if
            possible, reverse diseases through adjustments in lifestyle for
            non-communicable diseases (NCDs) like HTN, DM, High Cholesterol,
            Anemia, Kidney disease, Obesity & Malnutrition, Chronic Lung
            diseases.{" "}
          </p>
          <p>
            Let us join hands in delivering health care to every mile of Indian
            villages. Your contributions will save many people living in rural
            India with minimal access to healthcare and compliment the efforts
            of AAPI on promoting the need of Annual Physical health screening'
            and development of the 'Indian Preventive Health Task Force.' Thank
            you. <br /> <strong>Dr. Anupama Gotimukula</strong>{" "}
          </p>

          <div className="btn-div">
            <a href="https://village-smaller.vercel.app" target={"blank"}>
              AAPI ADOPT A VILLAGE (AAPI)
            </a>
            <a href="#">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
