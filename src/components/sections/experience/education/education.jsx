import React from "react";
import "./education.css";
import { Col } from "react-bootstrap";
import BYUILogo from "../../../../assets/images/education-logos/byui.jpeg";
import AppBrewLogo from "../../../../assets/images/education-logos/appbrew.jpeg";

const institutions = {
  "Brigham Young University-ID": {
    Logo: BYUILogo,
    Degree: "Bachelor of Science in Software Engineering",
    Graduation: "2018-2022",
  },
  "The App Brewery": {
    Logo: AppBrewLogo,
    Degree: "Full Stack Web Development/DevOps Bootcamp",
    Graduation: "2020",
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
            <small>{degree.Graduation}</small>
          </Col>
        </li>
      );
    })}
  </>
);

export default Education;
