import Heading from "../../heading/heading";
import Education from "./education/education";
import "./experience.css";
import Job from "./job/job";
import Accordion from "react-bootstrap/Accordion";

const Experience = () => (
  <div className="experience">
    <div className="work">
      <Heading text={"Professional Experience"} />
      <Accordion>
        <Job />
      </Accordion>
    </div>
    <div className="education pt-2 mb-1">
      <Heading text={"Education and Certifications"} />
      <ul>
        <Education />
      </ul>
    </div>
  </div>
);

export default Experience;
