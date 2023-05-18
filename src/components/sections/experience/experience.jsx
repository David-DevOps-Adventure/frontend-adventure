import Heading from "../../heading/heading";
import InProgress from "../../in-progress/in-progress";
import Certification from "./certification/certification";
import Education from "./education/education";
import "./experience.css";
import Job from "./job/job";
import Accordion from "react-bootstrap/Accordion";

const Experience = () => (
  <div className="experience">
    <div className="row work-and-projects">
      <div className="col-lg">
        <Heading text={"Professional Experience"} />
        <Accordion>
          <Job />
        </Accordion>
      </div>
      <div className="col skills">
        <Heading text={"Projects"} />
        <InProgress />
      </div>
    </div>
    <div className="row education-and-certification">
      <div className="pt-2 mb-1 col-lg">
        <Heading text={"Education"} />
        <ul>
          <Education />
        </ul>
      </div>
      <div className="col">
        <div className="pt-2 mb-1 col-lg">
          <Heading text={"Professional Certifications"} />
          <ul>
            <Certification />
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Experience;
