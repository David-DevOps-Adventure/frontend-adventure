import React from "react";
import PropTypes from "prop-types";
import "./in-progress.css";
import UnderConstructionLogo from "../../assets/icons/brand/progress.png";

const InProgress = () => (
  <div className="in-progress">
    <div className="picture-div text-center py-2 d-none d-sm-block">
      <img
        className="progress-picture img-fluid"
        src={UnderConstructionLogo}
        alt="under construction"
      />
    </div>
    <div className="progress-text text-center py-2">
      <p className="code">This sections is in progress...</p>
    </div>
  </div>
);

InProgress.propTypes = {};

InProgress.defaultProps = {};

export default InProgress;
