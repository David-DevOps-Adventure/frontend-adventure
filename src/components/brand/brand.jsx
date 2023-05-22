import "./brand.css";

import { Row, Col } from "react-bootstrap";

const Brand = () => (
  <Row className="brand-container">
    <Col xs="auto">
      <h3 className="brand-text">
        <span className="green">{"<"}</span>
        DevOps with David
        <span className="green">{"/>"}</span>
      </h3>
    </Col>
  </Row>
);

export default Brand;
