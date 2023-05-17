import "./heading.css";

const Heading = ({ text }) => (
  <div className="heading">
    <h5 className="bold text-center">
      <span className="green">{"<"}</span>
      {text}
      <span className="green">{"/>"}</span>
    </h5>
  </div>
);

Heading.propTypes = {};

Heading.defaultProps = {};

export default Heading;
