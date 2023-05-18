import "./certification.css";
import { Col } from "react-bootstrap";

import MicrosoftLogo from "../../../../assets/images/education-logos/microsoft.jpeg";
import KubernetesLogo from "../../../../assets/images/education-logos/linux.jpeg";

const certifications = {
  "AZ-204: Microsoft Certified Azure Developer": {
    issued: "02/2023 - Present (in progress)",
    cert_logo: MicrosoftLogo,
  },
  "KCNA: Kubernetes and Cloud Native Associate": {
    issued: "09/2022",
    cert_logo: KubernetesLogo,
  },
  "AZ-900: Microsoft Certified Azure Fundamentals": {
    issued: "05/2023",
    cert_logo: MicrosoftLogo,
  },
};

const Certification = () => (
  <div className="certification">
    {Object.keys(certifications).map((key) => {
      const cert = certifications[key];
      return (
        <li key={key} className="education row">
          <Col xs="auto d-none d-sm-block">
            <img src={cert.cert_logo} className="cert-logo" alt={key} />
          </Col>
          <Col xs="auto">
            <h2 className="cert bold">{key}</h2>
            <small>{cert.issued}</small>
          </Col>
        </li>
      );
    })}
  </div>
);

export default Certification;
