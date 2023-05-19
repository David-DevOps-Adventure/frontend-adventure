import "./about.css";
import banner from "../../../assets/icons/brand/banner.png";
import Typewriter from "typewriter-effect";
import { toWords } from "number-to-words";
import Heading from "../../heading/heading";
// for the dynamic I'm content
const statements = [
  "David Del Sol.",
  "a DevOps Engineer.",
  "a Full Stack Developer.",
  "a Mentor.",
  "a Husband.",
  "an Animal Lover.",
  "a Guitar Enthusiast.",
];

// dynamic experience
const currentYear = new Date().getFullYear();
const firstYearWorked = 2020;
const yearsOfExperience = currentYear - firstYearWorked;
const years = toWords(yearsOfExperience);

const About = () => (
  <div className="about row">
    <div className="col-lg text-center">
      <img src={banner} className="img-fluid banner" />
    </div>
    <div className="col iam-section text-center">
      <h4>
        <span className="iam">I'm </span>{" "}
        <span className="green code">
          <Typewriter
            options={{
              strings: statements,
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </h4>
      <div className="value-proposition">
        <Heading text={"About Me"} />
        <div className="bg-light container text-center">
          <p className="about-paragraph">
            I am a <span className="bold">Software Engineer</span> specialized
            in DevSecOps, automation and cloud computing. Over the past {years}{" "}
            years, I have assisted various organizations in building scalable
            applications and infrastructure, simplifying processes and reducing
            operational costs along the way. See my{" "}
            <a className="bold">experience</a> to learn more.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default About;
