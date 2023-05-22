import "./brand.css";

import { Row, Col } from "react-bootstrap";

const Brand = () => (
  <Row className="brand-container">
    <Col xs="auto" className="brand-logo"></Col>
    <Col xs="auto">
      <h3>
        <span className="green">{"<"}</span>
        DevOps with David
        <span className="green">{"/>"}</span>
      </h3>
    </Col>
  </Row>
);

export default Brand;
