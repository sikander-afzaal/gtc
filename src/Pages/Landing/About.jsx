import "./styles/About.css";

const About = () => {
  return (
    <div id="about" className="container mt-top">
      <div className="about-div">
        <h2 className="title">About Us</h2>
        <div className="about-row">
          <img src="/gokula.jpg" alt="" />
          <div className="text-div">
            <h3>DR.MURTHY GOKULA</h3>
            <p>
              Earning his medical degree at Siddhartha Medical College in India,
              Dr. Murthy Gokula completed his family medicine residency at
              Sparrow Hospital/Michigan State University in Lansing, MI. After
              his residency, he continued his training at the University of
              Michigan, Ann Arbor, where he completed a fellowship in geriatrics
              and became board certified in family medicine and geriatrics.
              Gokula has been an invited speaker at several national and
              regional conferences and written multiple publications.He was
              grant funded to do several research projects. In 2020 Dr. Gokula
              became board certified in Lifestyle Medicine. Currently, he is
              pursuing a online fellowship with American Academy of Anti-Aging
              Medicine (Bio Identical hormones, platelet rich plasma, herbal
              medications, gut health).{" "}
            </p>
          </div>
        </div>
        <div className="about-row">
          <div className="text-div">
            <h3>DR.SIRISHA POTLURI</h3>
            <p>
              Dr. Sirisha Potluri is a medical doctor and dietary/lifestyle
              medicine coach certified in plant-based nutrition through
              ECornell. She is a certified lifestyle medicine physician whose
              interest is in plant-based nutrition and disease prevention and
              reversal. She has hosted over 70+ plant-based workshops and more
              than 15 diabetes undone workshops, and 50 one on one consultations
              for weight loss and disease reversal. She has been featured on
              numerous shows and podcasts including Jane Unchained News Network,
              Chef AJ, Gift of Health, New York etc. She co-founded and
              currently manages “Plant-Based Thursdays”, which is a social
              network consisting of 1000+ active participants. Along with
              illness prevention and disease reversal, her passion is to craft
              whole-food plant-based recipes, which she constantly updates on
              her blog( https://plantbasedlosangeles.org/). Dr. Sirisha is
              planning to publish a whole food plant based no oil cook book in
              the near future.
            </p>
            <p style={{ color: "var(--blue)", fontWeight: "bold" }}>
              Facebook-{" "}
              <a
                href="https://www.facebook.com/losangelesplantbased/"
                target={"blank"}
              >
                plantbasedlosangeles
              </a>{" "}
            </p>
            <p style={{ color: "var(--blue)", fontWeight: "bold" }}>
              Instagram-{" "}
              <a
                href="https://www.instagram.com/siri_healthfoods/?hl=en"
                target={"blank"}
              >
                siri_healthfoods
              </a>
            </p>
            <p>
              My message is loud and clear. While it is worthwhile to switch out
              your plastic water bottles for glass, buy non-GMO products and use
              phthalate-free toothpaste, it is more important to first conquer
              the six habits that can make heart attacks and chronic diseases
              nearly extinct. The number one killer of men and women can be
              tamed with your fork, your feet, your fingers far from cigarettes,
              and some responsible use of a small glass of wine.{" "}
            </p>
            <p>
              So it's as easy as simply sticking to these six simple habits:{" "}
            </p>
            <ol>
              <li>Whole food Plant-based diet</li>
              <li>Regular physical activity</li>
              <li>No smoking and reduce or eliminate alcohol consumption. </li>
              <li>Using Stress reducing techniques like yoga and meditation</li>
              <li>Adequate sleep </li>
              <li>Weight and waist control </li>
            </ol>
            <p>
              Quote about plant based diet:{" "}
              <strong>
                “There is only one you and also there is no planet B- If you are
                concerned about your health and planetary health, add more plant
                on your plates”
              </strong>
              . 
            </p>
          </div>
          <img src="/srisha.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
