import "./brand.css";
import logo from "../../assets/icons/brand/logo-lg.gif";
import { Row, Col } from "react-bootstrap";

const Brand = () => (
  <Row className="brand-container">
    <Col xs="auto" className="brand-logo">
      <img src={logo} className="logo d-none d-lg-block" />
    </Col>
    <Col xs="auto">
      <h3 className="brand-text">DevOps with David</h3>
    </Col>
  </Row>
);

export default Brand;
