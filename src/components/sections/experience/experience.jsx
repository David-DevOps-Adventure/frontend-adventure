import "./experience.css";
import Job from "./job/job";
import Accordion from "react-bootstrap/Accordion";

const Experience = () => (
  <div className="experience">
    <div className="education">
      <h5 className="bold text-center">Professional Experience</h5>
      <Accordion defaultActiveKey="0">
        <Job />
      </Accordion>
    </div>
  </div>
);

export default Experience;
