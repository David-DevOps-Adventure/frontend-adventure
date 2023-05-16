import "./about.css";
import banner from "../../../assets/images/banner.png";
import Typewriter from "typewriter-effect";

const statements = [
  "David Del Sol.",
  "a DevOps Engineer.",
  "a Full Stack Developer.",
  "a Problem Solver.",
  "a Husband.",
  "an Animal Lover.",
  "a Guitar Player.",
];

const About = () => (
  <div className="about row">
    <div className="col-lg text-center">
      <img src={banner} className="img-fluid banner rounded-circle" />
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
      <h5 className="value-proposition">About Me</h5>
      <div className="bg-light container text-center">
        <p className="about-paragraph">
          I am a <span className="bold">Software Engineer</span> specialized in
          DevSecOps, automation and cloud computing. Over the past three years,
          I have assisted various organizations in building scalable
          applications and infrastructure, simplifying processes and reducing
          operational costs along the way. See my{" "}
          <a className="bold">experience</a> to learn more.
        </p>
      </div>
    </div>
  </div>
);

export default About;
