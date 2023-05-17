import "./job.css";
import { Row, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import GapLogo from "../../../../assets/images/company-logos/gap.jpeg";
import Pitch59Logo from "../../../../assets/images/company-logos/pitch59.jpeg";
import BDLogo from "../../../../assets/images/company-logos/bd.jpeg";
import "./custom.scss";

const jobs = {
  "Gap Inc.": {
    Logo: GapLogo,
    Title: "Full Stack DevSecOps Engineer",
    Dates: "06/2021 - Present",
    Bullets: [
      "Designed, maintained, and supported Azure Infrastructure, CI/CD pipelines, and automation scripts using Python, to streamline application deployment (Java/JavaScript), Azure cloud resource management, and workflow optimization.",
      "Architected continuous automation, optimization, and modernization initiatives for Azure cloud resources, resulting in an average annual reduction of $180,000 in operational costs.",
      "Implemented Infrastructure as Code (IaC) technologies such as Azure ARM templates and Terraform, resulting in a 20% decrease in deployment time and the elimination of manual deployment tasks.",
      "Leveraged tools such as Git, GitHub, Jenkins, and Azure DevOps to automate build, test, and deployment processes, resulting in a 25% reduction in build time and cleaner, easier-to-maintain code/infrastructure.",
    ],
  },
  Pitch59: {
    Logo: Pitch59Logo,
    Title: "DevOps Engineer/SWE",
    Dates: "04/2021 - 06/2021",
    Bullets: [
      "Streamlined testing, deployment, and optimization processes for web applications and microservices.",
      "Reduced deployment time by 40% by implementing CI/CD pipelines and deploying web apps and microservices to GKE/GCP (Kubernetes/Google Cloud).",
      "Automated testing scripts using Python/Selenium Web Driver, resulting in a 30-hour reduction in manual testing time per week.",
      "Conducted load testing using Python and Locust on Pitch59.com, leading to a 25% improvement in website response time and providing insights for performance optimization efforts.",
    ],
  },
  "BD Medical": {
    Logo: BDLogo,
    Title: "Cloud Technical Support Engineer",
    Dates: "09/2020 - 04/2021",
    Bullets: [
      "Leveraged Azure Cloud resources and Salesforce to provide tier 2 software technical support for medical devices, resulting in the timely resolution of customer issues and improved team efficiency.",
      "Designed and implemented a React/JavaScript web application hosted on Azure to remotely troubleshoot capital equipment, including image capture, documentation files, and interactive menu simulators, resulting in a 20% increase in customer satisfaction scores and leveraging cloud-based resources for scalability and reliability.",
      "Designed and implemented a NoSQL database solution to optimize remote access and management of documentation files, leading to a 12% increase in team productivity based on internal performance metrics.",
    ],
  },
};

const Job = () => (
  <div className="jobs-component">
    {Object.entries(jobs).map(([company, job], index) => (
      <Accordion.Item eventKey={index.toString()} key={index}>
        <Accordion.Header>
          <div className="job-heading">
            <Row className="job-container">
              <Col xs="auto d-none d-sm-block">
                <img src={job.Logo} className="company-logo" alt={company} />
              </Col>
              <Col xs="auto">
                <h2 className="job-title bold">{job.Title}</h2>
                <h6>{company}</h6>
                <p className="dates">{job.Dates}</p>
              </Col>
            </Row>
          </div>
        </Accordion.Header>
        <Accordion.Body>
          <ul className="job-description">
            {job.Bullets.map((bullet, bulletIndex) => (
              <li key={bulletIndex}>{bullet}</li>
            ))}
          </ul>
        </Accordion.Body>
      </Accordion.Item>
    ))}
  </div>
);

export default Job;
