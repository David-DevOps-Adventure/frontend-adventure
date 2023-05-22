import "./footer.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";

let currentYear = new Date().getFullYear();

const Footer = () => (
  <div className="footer">
    <footer className="py-1 sticky-bottom dark-section">
      <div className="container text-center">
        <small>David Del Sol &copy; {currentYear}</small>
        <span className="social">
          <a href="https://www.linkedin.com/in/delsoldavid/" target="_blank">
            <BsLinkedin />
          </a>
          <a href="https://github.com/daviddelsol1998" target="_blank">
            <BsGithub />
          </a>
        </span>
      </div>
    </footer>
  </div>
);

export default Footer;
