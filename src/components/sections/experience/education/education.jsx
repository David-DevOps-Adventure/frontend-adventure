import React from "react";
import "./education.css";
import { Col } from "react-bootstrap";
import BYUILogo from "../../../../assets/images/education-logos/byui.jpeg";
import LinuxLogo from "../../../../assets/images/education-logos/linux.jpeg";

const institutions = {
  "Brigham Young University-ID": {
    Logo: BYUILogo,
    Degree: "Bachelor of Science in Software Engineering",
    Graduation: "04/2022",
  },
  "The Linux Foundation": {
    Logo: LinuxLogo,
    Degree: "KCNA: Kubernetes and Cloud Native Certified",
    Graduation: "09/2022",
  },
};

const Education = () => (
  <>
    {Object.keys(institutions).map((key) => {
      const degree = institutions[key];
      return (
        <li key={key} className="education row">
          <Col xs="auto d-none d-sm-block">
            <img src={degree.Logo} className="institution-logo" alt={key} />
          </Col>
          <Col xs="auto">
            <h2 className="degree bold">{key}</h2>
            <h6 className="graduation-degree">{degree.Degree}</h6>
            <p>{degree.Graduation}</p>
          </Col>
        </li>
      );
    })}
  </>
);

export default Education;
