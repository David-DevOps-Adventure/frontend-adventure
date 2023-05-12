import "./navigation.css";
import { Button } from "react-bootstrap";
import Brand from "../brand/brand";
import hamburger from "../../assets/icons/navigation/hamburger-icon.gif";

const Navigation = () => (
  <div className="navigation">
    <div class="row align-items-start">
      <div class="col">
        {/* hamburger button for mobile menu */}
        <button
          className="btn  d-lg-none hamburger-btn"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasResponsive"
          aria-controls="offcanvasResponsive"
        >
          <img className="hamburger btn-outline" src={hamburger} />
        </button>
        <Brand />
      </div>
      {/* offcanvas mobile menu */}
      <div
        class="offcanvas-lg offcanvas-start"
        tabindex="-1"
        id="offcanvasResponsive"
        aria-labelledby="offcanvasResponsiveLabel"
        style={{ width: "350px" }}
      >
        <div class="offcanvas-header">
          <div class="offcanvas-title" id="offcanvasResponsiveLabel">
            <Brand />
          </div>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            data-bs-target="#offcanvasResponsive"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          {/* <p class="mb-0">mobile menu goes here</p> */}
        </div>
      </div>
      {/* large menu */}
      <div className="col d-none d-lg-block navigation-menu-lg">
        {/* <p>nav items go here</p> */}
      </div>
      <div class="col-2 navigation-contact">
        <Button variant="primary">Contact</Button>
      </div>
    </div>
  </div>
);

export default Navigation;
